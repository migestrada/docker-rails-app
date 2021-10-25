import { takeEvery, fork, all } from 'redux-saga/effects'
import {
  GET_STATE_FROM_API,
} from '../modules/boilerplate';

function* getStateFromApi() {
  yield takeEvery(GET_STATE_FROM_API, function* (action) {
    console.log('boilerplate');
  });
}

export default function* boilerplateSaga() {
  yield all([
    fork(getStateFromApi),
  ]);
}
