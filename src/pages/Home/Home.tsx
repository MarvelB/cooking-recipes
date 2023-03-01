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

    const unsubscribe = projectFirestore.collection("recipes").onSnapshot((recipeSnapshot) => {
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
    }, (err) => {
      setError(err.message);
      setIsLoading(false);
    });

    // Clean up function
    return () => unsubscribe();

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
