import { logout } from '../../web_client/redux/modules/app';
import { bindActionCreators } from 'redux/lib/redux';

export const mapStateToProps = (...stateNames) => state =>
  stateNames.reduce((acum, name) => ({
    ...acum,
    ...state[`${name.charAt(0).toLowerCase()}${name.slice(1)}Reducer`].toJS(),
  }), { app: state.appReducer.toJS() });

export const mapDispatchToProps = actionsObj =>
  dispatch => ({
    actions: bindActionCreators({
      ...actionsObj,
      logout
    }, dispatch),
  });
