import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/">home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/menu/88">Menu</Link>
        </div>

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu/:userId" component={Menu} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
