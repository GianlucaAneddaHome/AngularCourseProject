import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  id: number;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
      );
  }

  ingredientsToShoppingList() {
    this.shoppingListService.setIngredients(this.recipe.ingredients.slice());
  }

}
