import createAction from '../../untils/createAction';

export const GET_STATE_FROM_API = 'application/app/GET_STATE_FROM_API';
export const SHOW_ERROR = 'application/app/SHOW_ERROR';

const initialState = {
  currentDate: new Date(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export const getStateFromApi = createAction(GET_STATE_FROM_API, 'name');
export const showError = createAction(GET_STATE_FROM_API, 'result');
