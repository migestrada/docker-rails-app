import { bindActionCreators } from 'redux/lib/redux';

export const mapStateToProps = (...stateNames) => state =>
  stateNames.reduce((acum, name) => ({
    ...acum,
    [`${name.toLowerCase()}`]: state[`${name.toLowerCase()}Reducer`],
  }), { app: state.appReducer });

export const mapDispatchToProps = actionsObj =>
  dispatch => ({
    actions: bindActionCreators(actionsObj, dispatch),
  });
