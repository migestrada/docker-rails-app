import React from 'react';
// Project
import Login from '../Login';
import Boilerplate from '../Boilerplate';

const createRoute = (path, element) => ({ path, element })

const routes = [
  createRoute('/login', <Login />),
  createRoute('/', <Boilerplate />),
]

export default routes;