import { createStore, applyMiddleware } from 'redux/lib/redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(process.env.NODE_ENV === 'development' && logger),
);

export default store;



