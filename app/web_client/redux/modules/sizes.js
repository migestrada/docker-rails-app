import { fromJS } from 'immutable';
import createAction from '../../untils/createAction';

export const GET_STATE_FROM_API = 'application/sizes/GET_STATE_FROM_API';
export const GET_STATE_FROM_API_SUCCESS = 'application/sizes/GET_STATE_FROM_API_SUCCESS';
export const GET_STATE_FROM_API_FAIL = 'application/sizes/GET_STATE_FROM_API_FAIL';

const initialState = fromJS({
  currentDate: new Date(),
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_STATE_FROM_API:
    return state;
  default:
    return state;
  }
};

export const getStateFromApi = createAction(GET_STATE_FROM_API, 'controls');
export const getStateFromApiSuccess = createAction(GET_STATE_FROM_API_SUCCESS, 'result');
export const getStateFromApiFail = createAction(GET_STATE_FROM_API_FAIL, 'result');
