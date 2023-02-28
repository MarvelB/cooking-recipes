import RecipeList from 'components/RecipeList/RecipeList';
import { projectFirestore } from 'firebase/config';
import { useEffect, useState } from 'react';
// import useFetch from 'hooks/useFetch';
import { RecipeModel } from 'types';
import './Home.css';

interface HomeProps {}

const Home = ({ }: HomeProps) => {

  // const { data: recipes, isLoading, error } = useFetch<RecipeModel[]>("http://localhost:8000/recipes");

  const [recipes, setRecipes] = useState<RecipeModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  useEffect(() => {
    setIsLoading(true);

    projectFirestore.collection("recipes").get().then((recipeSnapshot) => {
       if (recipeSnapshot.empty) {
        setError("No recipes to load");
        setIsLoading(false);
       } else {
        let results: RecipeModel[] = [];

        recipeSnapshot.docs.forEach((recipe) => {
          results.push({id: recipe.id, ...recipe.data()} as RecipeModel);
        });

        setRecipes(results);
        setIsLoading(false);
       }
    }).catch(err => {
      setError(err.message);
    });

  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default Home;
