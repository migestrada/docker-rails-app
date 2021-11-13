import { takeEvery, fork, all, call, put } from 'redux-saga/effects';
import decamelize from 'decamelize-keys-deep';
import controlledCall from '../../untils/controlledCall';
import { get, del } from '../../untils/apiFetch';
import authenticityToken from '../../untils/authenticityToken';
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
    const body = decamelize({
      authenticityToken: authenticityToken()
    })

    const result = yield call(del, '/sign_out', body, true)
    if (result.ok) {
      window.location.replace('/login')
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
