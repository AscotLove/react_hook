import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './containers/login';
import './App.css';

export default function App() {
  return <Router>
    <Switch>
      {/*<Route path="/" component={Login}/>*/}
      <Login />
    </Switch>
  </Router>
}