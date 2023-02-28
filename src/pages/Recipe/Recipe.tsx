import useFetch from 'hooks/useFetch';
import useTheme from 'hooks/useTheme';
import { useParams } from 'react-router';
import { RecipeModel } from 'types';
import './Recipe.css';

interface RecipePathParams {
  id: string;
}

interface RecipeProps {}

const Recipe = ({ }: RecipeProps) => {

  const {id} = useParams<RecipePathParams>();
  const url = "http://localhost:8000/recipes/" + id;

  const {data: recipe, error, isLoading} = useFetch<RecipeModel>(url);

  const { state } = useTheme();

  return (
    <div className={`recipe ${state.mode}`}>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
