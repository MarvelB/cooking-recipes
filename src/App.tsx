import NavBar from 'components/NavBar/NavBar';
import ThemeSelector from 'components/ThemeSelector/ThemeSelector';
import useTheme from 'hooks/useTheme';
import Create from 'pages/Create/Create';
import Home from 'pages/Home/Home';
import Recipe from 'pages/Recipe/Recipe';
import Search from 'pages/Search/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const { state } = useTheme();

  return (
    <div className={`App ${state.mode}`}>
      <BrowserRouter>
        <NavBar />

        <ThemeSelector />
        
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
