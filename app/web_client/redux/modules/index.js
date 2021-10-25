import { combineReducers } from 'redux/lib/redux';
import { reducer as appReducer } from './app';
import { reducer as boilerplateReducer } from './boilerplate';
import { reducer as loginReducer } from './login';
import { reducer as signUpReducer } from './signUp';

const rootReducer = combineReducers({
  appReducer,
  boilerplateReducer,
  loginReducer,
  signUpReducer,
});

export default rootReducer;
