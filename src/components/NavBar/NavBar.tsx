import SearchBar from 'components/SearchBar/SearchBar';
import useTheme from 'hooks/useTheme';
// import { ThemeContext } from 'context/ThemeContext';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ThemeContextModel } from 'types';
import './NavBar.css';

interface NavBarProps {}

const NavBar = ({ }: NavBarProps) => {

  // const { color } = useContext<ThemeContextModel | null>(ThemeContext);
  const { state, dispatch } = useTheme();

  return (
    <div className="navbar" style={{background: state.color}}>
      <nav onClick={() => dispatch("pink")}>
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
