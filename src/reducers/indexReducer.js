import { combineReducers } from 'redux';
import userReducer from './userReducer';
import historyReducer from './historyReducer';
import settingsReducer from './settingsReducer';

const allReducers = combineReducers({
  userData: userReducer,
  historyList: historyReducer,
  settings: settingsReducer,
});

export default allReducers;
