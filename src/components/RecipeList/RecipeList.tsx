import useTheme from 'hooks/useTheme';
import { Link } from 'react-router-dom';
import { RecipeModel } from 'types';
import './RecipeList.css';

interface RecipeListProps {
  recipes: RecipeModel[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {

  const { state } = useTheme();

  if (recipes.length == 0) {
    return <div className="error">No recipes to load...</div>
  }

  return (
    <div className="recipe-list">
      {recipes && recipes.map(recipe => (
        <div key={recipe.id} className={`card ${state.mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
