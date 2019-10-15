import React from 'react';
import './App.css';
import Navigation from './components/navigationbar.js';
import { HashRouter, Route, Switch } from 'react-router-dom';
import home from './components/home.js';

function App() {
  return (
    <HashRouter> 
      <Navigation />
      <Switch>
        <Route path="/" exact component={home} />
      </Switch>
      </HashRouter>
  );
}

export default App;
