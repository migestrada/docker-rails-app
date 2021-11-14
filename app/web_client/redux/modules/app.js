import { fromJS } from 'immutable';
import createAction from '../../untils/createAction';

export const GET_STATE_FROM_API = 'application/app/GET_STATE_FROM_API';
export const SHOW_ERROR = 'application/app/SHOW_ERROR';
export const HIDDE_ERROR = 'application/app/HIDDE_ERROR';
export const LOGOUT = 'application/app/LOGOUT';
export const LOGOUT_SUCCESS = 'application/app/LOGOUT_SUCCESS';

const initialState = fromJS({
  currentDate: new Date(),
  errorSnackBar: {
    message: '',
    open: false
  },
  navigator: {
    open: false
  }
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_ERROR:
    return state
      .setIn(['errorSnackBar', 'message'], action.message)
      .setIn(['errorSnackBar', 'open'], true)
  case HIDDE_ERROR:
    return state
      .setIn(['errorSnackBar', 'open'], false)
      .setIn(['errorSnackBar', 'message'], '')
  default:
    return state;
  }
};

export const getStateFromApi = createAction(GET_STATE_FROM_API, 'name');
export const showError = createAction(SHOW_ERROR, 'message');
export const hiddeError = createAction(HIDDE_ERROR);
export const logout = createAction(LOGOUT);
export const logoutSuccess = createAction(LOGOUT_SUCCESS, 'result');
