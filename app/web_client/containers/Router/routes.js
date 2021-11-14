import React from 'react';
// Project
import Login from '../Login';
import Boilerplate from '../Boilerplate';
import Invoices from '../Invoices';
import Sizes from '../Sizes';

const createRoute = (path, element) => ({ path, element })

const routes = [
  createRoute('/login', <Login />),
  createRoute('/invoices', <Invoices />),
  createRoute('/boilerplate', <Boilerplate />),
  createRoute('/sizes', <Sizes />),
]

export default routes;