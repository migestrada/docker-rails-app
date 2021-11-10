import { takeEvery, fork, all } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
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
      user: {
        email,
        password
      }
    })
    const result = yield call(post, '/login', body)
    const data = yield result.json()
    
    console.log('result', yield result.headers)
    if (result.ok) {
      yield put(loginSuccess(data))
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
