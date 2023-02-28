import SearchBar from 'components/SearchBar/SearchBar';
import { ThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContextModel } from 'types';
import './NavBar.css';

interface NavBarProps {}

const NavBar = ({ }: NavBarProps) => {

  const { color } = useContext<ThemeContextModel | null>(ThemeContext) as ThemeContextModel;

  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default NavBar;
