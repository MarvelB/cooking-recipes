import { useState } from 'react';
import { useHistory } from 'react-router';
import './SearchBar.css'

interface SearchBarProps {}

const SearchBar = ({ }: SearchBarProps) => {

  const [term, setTerm] = useState<string>("");

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    history.push(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text" 
          id="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
          required
          value={term}
        />
      </form>
    </div>
  );
}

export default SearchBar;
