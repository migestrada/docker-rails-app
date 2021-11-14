import { combineReducers } from 'redux/lib/redux';
import { reducer as appReducer } from './app';
import { reducer as boilerplateReducer } from './boilerplate';
import { reducer as loginReducer } from './login';
import { reducer as signUpReducer } from './signUp';
import { reducer as invoicesReducer } from './invoices';

const rootReducer = combineReducers({
  appReducer,
  boilerplateReducer,
  loginReducer,
  signUpReducer,
  invoicesReducer,
});

export default rootReducer;
