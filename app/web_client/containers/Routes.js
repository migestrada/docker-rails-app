import React from "react";
import { } from 'fs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  { path: '/', name: 'Login' },
];

export default function App() {
  return <Router>
    <Switch>
      {
        routes.map(route => import())
      }
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}
