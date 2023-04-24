import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import historyReducer from './historyReducer';
import settingsReducer from './settingsReducer';

const allReducers = combineReducers({
  loggedIn: loginReducer,
  historyList: historyReducer,
  settings: settingsReducer,
});

export default allReducers;
