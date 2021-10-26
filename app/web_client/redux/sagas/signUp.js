import { takeEvery, fork, all } from 'redux-saga/effects';
import controlledCall from '../../untils/controlledCall';
import { get, post } from '../../untils/apiFetch';
import {
  SIGN_UP,
  signUpSuccess,
  signUpFail,
} from '../modules/signUp';

function* signUp() {
  yield takeEvery(SIGN_UP, function* (action) {
    yield controlledCall(get, '/users', undefined, signUpSuccess, signUpFail, true)
  });
}

export default function* boilerplateSaga() {
  yield all([
    fork(signUp),
  ]);
}
