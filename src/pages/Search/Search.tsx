import RecipeList from 'components/RecipeList/RecipeList';
import useFetch from 'hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { RecipeModel } from 'types';
import './Search.css';

interface SearchProps {}

const Search = ({ }: SearchProps) => {

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:8000/recipes?q=" + query;

  const { data: recipes, isLoading, error } = useFetch<RecipeModel[]>(url);

  return (
    <div>
      <h2 className="page-title">Recipies including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default Search;
