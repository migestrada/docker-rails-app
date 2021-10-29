import { takeEvery, fork, all } from 'redux-saga/effects';
import controlledCall from '../../untils/controlledCall';
import { get, post, del} from '../../untils/apiFetch';
import decamelize from 'decamelize-keys-deep';

import {
  LOGIN,
  loginSuccess,
  loginFail
} from '../modules/login';

function* login() {
  yield takeEvery(LOGIN, function* (action) {
    const { email, password } = action.controls;
    const body = decamelize({
      email,
      password
    })
    yield controlledCall(post, '/users/sign_in', body, loginSuccess, loginFail)
  });
}

export default function* loginSaga() {
  yield all([
    fork(login),
  ]);
}
