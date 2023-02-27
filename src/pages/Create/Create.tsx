import { useRef, useState } from 'react';
import './Create.css';

interface CreateProps {}

const Create = ({ }: CreateProps) => {

  const [title, setTitle] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");
  const [newIngredient, setNewIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
  };

  const handleAddNewIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngs => [...prevIngs, ing]);
    }

    setNewIngredient("");
    ingredientInput.current?.focus();
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAddNewIngredient}>add</button>
          </div>
        </label>
        <p>
          Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Recipe cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Create;
