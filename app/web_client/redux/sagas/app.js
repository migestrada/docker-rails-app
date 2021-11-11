import { takeEvery, fork, all, call, put } from 'redux-saga/effects';
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
    const result = yield call(del, '/logout')
    if (result.ok) {
      localStorage.removeItem('token')
      yield put(logoutSuccess())
    } else {
      yield put(logoutFail())
    }
  });
}

export default function* appSaga() {
  yield all([
    fork(getStateFromApi),
    fork(logout),
  ]);
}
