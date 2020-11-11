import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stuff from './pages/Stuff';

function App() {
  return (
    <main>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/stuff" component={Stuff} />
    </Switch>
</main>
    
  );
}

export default App;
