import { takeEvery, fork, all } from 'redux-saga/effects';
import controlledCall from '../../untils/controlledCall';
import { get } from '../../untils/apiFetch';
import {
  GET_STATE_FROM_API,
} from '../modules/app';

function* getStateFromApi() {
  yield takeEvery(GET_STATE_FROM_API, function* (action) {
    yield controlledCall(get, '/app')
  });
}

export default function* appSaga() {
  yield all([
    fork(getStateFromApi),
  ]);
}
