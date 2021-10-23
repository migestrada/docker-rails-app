import { combineReducers } from 'redux/lib/redux';
import { reducer as appReducer } from './app';
import { reducer as boilerplateReducer } from './boilerplate';
import { reducer as loginReducer } from './login';

const rootReducer = combineReducers({
  appReducer,
  boilerplateReducer,
  loginReducer,
});

export default rootReducer;
