import createAction from '../../untils/createAction';
import { fromJS } from 'immutable';

export const FORM_CONTROLS_CHANGED = 'application/login/FORM_CONTROLS_CHANGED';
export const LOGIN = 'application/login/LOGIN';
export const LOGIN_SUCCESS = 'application/login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'application/login/LOGIN_FAIL';

const initialState = fromJS({
  loading: false,
  formControls: {
    email: '',
    password: ''
  }
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN:
    return state
      .set('loading', true);
  case LOGIN_SUCCESS:
  case LOGIN_FAIL:
    return state
      .set('loading', false);
  case FORM_CONTROLS_CHANGED:
    return state
      .mergeIn(['formControls'], action.controls);
  default:
    return state;
  }
};


export const formControlsChanged = createAction(FORM_CONTROLS_CHANGED, 'controls');
export const login = createAction(LOGIN, 'controls');
export const loginSuccess = createAction(LOGIN_SUCCESS, 'result');
export const loginFail = createAction(LOGIN_FAIL, 'result');
