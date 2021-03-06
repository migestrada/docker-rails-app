import { takeEvery, fork, all } from 'redux-saga/effects';
import appSaga from './app';
import signUpSaga from './signUp';
import loginSaga from './login';
import invoicesSaga from './invoices';
import sizesSaga from './sizes';

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(signUpSaga),
    fork(loginSaga),
    fork(invoicesSaga),
    fork(sizesSaga),
  ])
}