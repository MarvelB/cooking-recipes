import { useState } from 'react';
import './Create.css';

interface CreateProps {}

const Create = ({ }: CreateProps) => {

  const [title, setTitle] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };

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

        {/* Ingredients section */}

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
