import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    private ingredients: Ingredient[] = [];
    //     new Ingredient('Apples', 5),
    //     new Ingredient('Tomatoes', 10)
    // ];

    ingredientsChanged = new Subject();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredients() {
        return this.ingredients.slice();
    }

    setIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}