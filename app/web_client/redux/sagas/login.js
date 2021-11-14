import { takeEvery, fork, all } from 'redux-saga/effects';
import { get, post, del} from '../../untils/apiFetch';
import decamelize from 'decamelize-keys-deep';
import authenticityToken from '../../untils/authenticityToken'
import controlledCall from '../../untils/controlledCall';

import {
  LOGIN,
  loginSuccess,
  loginFail
} from '../modules/login';

function* login() {
  yield takeEvery(LOGIN, function* (action) {
    const { email, password } = action.controls;
    const body = decamelize({
      user: {
        email,
        password,
        rememberMe: 0
      },
      authenticityToken: authenticityToken()
    })
    
    yield controlledCall(post, '/sign_in', body, () => window.location.replace('/'), loginFail, true)
  });
}

export default function* loginSaga() {
  yield all([
    fork(login),
  ]);
}
