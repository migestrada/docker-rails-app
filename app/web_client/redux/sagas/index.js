import { takeEvery, fork, all } from 'redux-saga/effects';
import appSaga from './app';
import signUpSaga from './signUp';

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(signUpSaga),
  ])
}