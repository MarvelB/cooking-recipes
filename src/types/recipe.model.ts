export interface RecipeModel {
    id: string;
    title: string;
    ingredients: string[];
    method: string;
    cookingTime: string;
}

export interface PostRecipeModel extends Omit<RecipeModel, "id"> {}