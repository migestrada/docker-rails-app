import React from "react";
import { } from 'fs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login'

const Routes = props => {
  return <Router>
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>;
}

export default Routes;
