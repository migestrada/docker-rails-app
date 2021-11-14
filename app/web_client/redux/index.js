import { createStore, applyMiddleware } from 'redux/lib/redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './modules';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, process.env.NODE_ENV === 'development' && logger),
);

sagaMiddleware.run(rootSaga);

export default store;
