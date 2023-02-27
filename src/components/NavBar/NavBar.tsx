import SearchBar from 'components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {}

const NavBar = ({ }: NavBarProps) => {
  return (
    <div className="navbar">
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
