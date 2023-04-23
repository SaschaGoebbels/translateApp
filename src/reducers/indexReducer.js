import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import historyReducer from './historyReducer';

const allReducers = combineReducers({
  loggedIn: loginReducer,
  historyList: historyReducer,
});

export default allReducers;
