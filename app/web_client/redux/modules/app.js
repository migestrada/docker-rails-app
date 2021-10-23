import createAction from '../../Untils/createAction';

export const GET_STATE_FROM_API = 'application/app/GET_STATE_FROM_API';

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
