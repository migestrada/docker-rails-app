import React from "react";
import { } from 'fs';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login'
import Boilerplate from './Boilerplate'

const Routes = props => {
  return <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/app">
        <Boilerplate />
      </Route>
    </Switch>
</BrowserRouter>;
}

export default Routes;
