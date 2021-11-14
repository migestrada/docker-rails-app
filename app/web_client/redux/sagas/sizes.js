import { takeEvery, fork, all } from 'redux-saga/effects';
import controlledCall from '../../untils/controlledCall';
import { get, post, del } from '../../untils/apiFetch';
import decamelize from 'decamelize-keys-deep';

import {
  GET_STATE_FROM_API,
  getStateFromApiSuccess,
  getStateFromApiFail
} from '../modules/sizes';

function* getStateFromApi() {
  yield takeEvery(GET_STATE_FROM_API, function* (action) {
    const body = decamelize({})
    yield controlledCall(get, '/sizes', body, getStateFromApiSuccess, getStateFromApiFail)
  });
}

export default function* boilerplateSaga() {
  yield all([
    fork(getStateFromApi),
  ]);
}
