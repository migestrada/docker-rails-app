import { fromJS } from 'immutable';
import createAction from '../../untils/createAction';

export const FORM_CONTROLS_CHANGED = 'application/signUp/FORM_CONTROLS_CHANGED';
export const SIGN_UP = 'application/signUp/SIGN_UP';
export const SIGN_UP_SUCCESS = 'application/signUp/SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'application/signUp/SIGN_UP_FAIL';

const initialState = fromJS({
  formControls: {
    username: '',
    password: '',
    email: '',
  }
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FORM_CONTROLS_CHANGED:
    return state
      .mergeIn(['formControls'], action.controls);
  default:
    return state;
  }
};

export const formControlsChanged = createAction(FORM_CONTROLS_CHANGED, 'controls');
export const signUp = createAction(SIGN_UP, 'controls');
export const signUpSuccess = createAction(SIGN_UP_SUCCESS, 'result');
export const signUpFail = createAction(SIGN_UP_FAIL);
