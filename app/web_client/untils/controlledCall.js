import decamelize from 'decamelize-keys-deep';
import { call, put } from 'redux-saga/effects';

export default function* controlledCall(method, path, body, successAction, failAction) {
  const toYield = method(path)
  const result = yield body ? call(toYield, path, decamelize(body)) : call(toYield, path)
  const nextAction = result.ok ? successAction : failAction

  if (nextAction) yield put(nextAction(result.data))
}