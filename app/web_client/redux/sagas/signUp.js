import { takeEvery, fork, all } from 'redux-saga/effects';
import controlledCall from '../../untils/controlledCall';
import { get, post, del} from '../../untils/apiFetch';
import decamelize from 'decamelize-keys-deep';
import {
  SIGN_UP,
  signUpSuccess,
  signUpFail,
} from '../modules/signUp';

function* signUp() {
  yield takeEvery(SIGN_UP, function* (action) {
    const { email, password } = action.controls;
    const body = decamelize({
      user: {
        email,
        password
      }
    })
    
    yield controlledCall(post, '/users/sign_up', body, signUpSuccess, signUpFail)
  });
}

export default function* boilerplateSaga() {
  yield all([
    fork(signUp),
  ]);
}
