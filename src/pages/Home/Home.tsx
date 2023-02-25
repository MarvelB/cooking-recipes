import useFetch from 'hooks/useFetch';
import { RecipeModel } from 'types';
import './Home.css';

interface HomeProps {}

const Home = ({ }: HomeProps) => {

  const { data: recipes, isLoading, error } = useFetch<RecipeModel[]>("http://localhost:8000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipes && recipes.map((recipe) => (
        <h2 key={recipe.id}>{recipe.title}</h2>
      ))}
    </div>
  );
}

export default Home;
