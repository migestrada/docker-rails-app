import { fromJS } from 'immutable';
import createAction from '../../untils/createAction';

export const GET_STATE_FROM_API = 'application/app/GET_STATE_FROM_API';
export const SHOW_ERROR = 'application/app/SHOW_ERROR';
export const LOGOUT = 'application/app/LOGOUT';
export const LOGOUT_SUCCESS = 'application/app/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'application/app/LOGOUT_FAIL';

const initialState = fromJS({
  currentDate: new Date(),
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export const getStateFromApi = createAction(GET_STATE_FROM_API, 'name');
export const showError = createAction(GET_STATE_FROM_API, 'result');
export const logout = createAction(LOGOUT, 'result');
export const logoutSuccess = createAction(LOGOUT_SUCCESS, 'result');
export const logoutFail = createAction(LOGOUT_FAIL, 'result');
