import { combineReducers } from 'redux';
import userReducer from './userReducer';
import historyReducer from './historyReducer';
import settingsReducer from './settingsReducer';

const allReducers = combineReducers({
  timestamp: Date.now(),
  userData: userReducer,
  history: historyReducer,
  settings: settingsReducer,
});

export default allReducers;
