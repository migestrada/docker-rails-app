import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
// Project
import routes from './routes'

const Router = props =>
  <BrowserRouter>
    <Switch>
      {
        routes.map(obj=>
          <Route key={obj.path} path={obj.path}>
            { obj.element }
          </Route>
        )
      }
    </Switch>
  </BrowserRouter>;

export default Router;
