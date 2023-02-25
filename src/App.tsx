import NavBar from 'components/NavBar/NavBar';
import Create from 'pages/Create/Create';
import Home from 'pages/Home/Home';
import Recipe from 'pages/Recipe/Recipe';
import Search from 'pages/Search/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
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
