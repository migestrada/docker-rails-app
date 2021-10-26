import decamelize from 'decamelize-keys-deep';
import { call, put } from 'redux-saga/effects';

export default function* controlledCall(method, path, body = undefined, successAction, failAction,  noApi = false) {
  const toYield = method(path, body, noApi)
  const result = yield body ? call(toYield, path, decamelize(body)) : call(toYield, path)
  const nextAction = result.ok ? successAction : failAction

  if (nextAction) yield put(nextAction(result.data))
}