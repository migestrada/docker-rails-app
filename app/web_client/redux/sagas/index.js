import { takeEvery, fork, all } from 'redux-saga/effects';
import appSaga from './app';
import signUpSaga from './signUp';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(signUpSaga),
    fork(loginSaga),
  ])
}