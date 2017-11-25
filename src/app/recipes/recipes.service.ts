import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
    recipeSeletcted = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Butter Chicken',
            'chicken cooked in a pan with butter',
            'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',
            [
                new Ingredient('chicken', 5),
                new Ingredient('butter', 3)
            ]
        ),
        new Recipe(
            'Fried Zucchini',
            'zucchini fried in olive oil',
            'http://www.nonsprecare.it/wp-content/uploads/2015/05/ricette-estive-zucchine-3-640x426.jpg',
            [
                new Ingredient('zucchini', 2),
                new Ingredient('olive oil', 5)
            ]
        )
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}