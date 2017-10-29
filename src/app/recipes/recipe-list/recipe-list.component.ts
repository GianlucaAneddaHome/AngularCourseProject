import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe(
                'TestRecipe',
                'test recipe description',
                'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg'
              ),
    new Recipe(
                'TestRecipe2',
                'test recipe description 2',
                'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg'
              )
   ];
  
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
