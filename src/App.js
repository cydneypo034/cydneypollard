import React from 'react';
import './App.css';
import Navigation from './components/navigationbar.js';
import { HashRouter, Route, Switch } from 'react-router-dom';
import home from './components/home/home';
import portfolio from './components/portfolio.js';
import about from './components/about/about.js';
import graphicarts from './components/graphicarts.js';
import skills from './components/skills/skills';
import contact from './components/contact/contact';

function App() {
  return (
    <HashRouter> 
      <Navigation />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/about" component={about} />
        <Route path="/graphicarts" component={graphicarts} />
        <Route path="/skills" component={skills} />
        <Route path="/contact" component={contact} />
      </Switch>
      </HashRouter>
  );
}

export default App;
