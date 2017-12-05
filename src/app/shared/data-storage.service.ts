import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from './../recipes/recipe.model';

import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
    private storageURL = 'https://recipesbook-b2a03.firebaseio.com/recipes.json';

    constructor(private http: Http, private recipeService: RecipeService,
                private authService: AuthService) {
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(this.storageURL + '?auth=' + token,
                         this.recipeService.getRecipes());
    }
    getRecipes() {
        const token = this.authService.getToken();

        this.http.get(this.storageURL + '?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            ( recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

