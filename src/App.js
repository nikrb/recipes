import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import './App.css';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </div>
            <hr/>
            <Route exact path="/" component={RecipeList}/>
            <Route path="/recipe" component={Recipe} />
          </div>
        </Router>
        <div className="App-header">
          <h2>Mum's Recipes</h2>
        </div>
        <RecipeList />
      </div>
    );
  };
}

export default App;