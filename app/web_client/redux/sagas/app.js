import { takeEvery, fork, all } from 'redux-saga/effects';
import controlledCall from '../../untils/controlledCall';
import { get, del } from '../../untils/apiFetch';
import {
  GET_STATE_FROM_API,
  LOGOUT,
  logoutFail,
  logoutSuccess
} from '../modules/app';

function* getStateFromApi() {
  yield takeEvery(GET_STATE_FROM_API, function* (action) {
    yield controlledCall(get, '/app')
  });
}

function* logout() {
  yield takeEvery(LOGOUT, function* (action) {
    yield controlledCall(get, '/users/sign_out', undefined, logoutSuccess, logoutFail)
  });
}

export default function* appSaga() {
  yield all([
    fork(getStateFromApi),
    fork(logout),
  ]);
}
