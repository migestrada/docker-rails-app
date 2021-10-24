import createAction from '../../untils/createAction';

export const GET_STATE_FROM_API = 'application/login/GET_STATE_FROM_API';

const initialState = {
  currentDate: new Date(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_STATE_FROM_API:
    return state;
  default:
    return state;
  }
};

export const getStateFromApi = createAction(GET_STATE_FROM_API, 'someParam');
