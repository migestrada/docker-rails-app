import { takeEvery, fork, all } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { get, post, del} from '../../untils/apiFetch';
import decamelize from 'decamelize-keys-deep';
import authenticityToken from '../../untils/authenticityToken'

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
    const result = yield call(post, '/sign_in', body, true)
    const data = yield result.json()
    
    if (result.ok) {
      window.location.replace('/')
    } else {
      yield put(loginFail(data))
    }

  });
}

export default function* loginSaga() {
  yield all([
    fork(login),
  ]);
}
