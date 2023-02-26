import RecipeList from 'components/RecipeList/RecipeList';
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
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default Home;
