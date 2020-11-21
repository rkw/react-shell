import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/users">Users </Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
