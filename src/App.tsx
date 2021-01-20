import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Forms from './pages/Forms';
import Queries from './pages/Queries';

import logo from './logo.svg';
import './App.css';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/users">Users </Link>
            <Link to="/forms">Forms </Link>
            <Link to="/queries">Queries </Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/forms" component={Forms} />
            <Route path="/queries" component={Queries} />
          </Switch>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
