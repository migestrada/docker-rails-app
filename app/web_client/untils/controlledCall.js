import decamelize from 'decamelize-keys-deep';
import { call, put } from 'redux-saga/effects';

export default function* controlledCall(toYield, path, body = undefined, successAction, failAction,  noApi = false) {
  const result = yield body ? call(toYield, path, decamelize(body), noApi) : call(toYield, path, noApi)
  const nextAction = result.ok ? successAction : failAction
  const data = yield result.json()
  if (nextAction) yield put(nextAction(data))
}