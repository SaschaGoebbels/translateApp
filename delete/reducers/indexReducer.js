import { combineReducers } from 'redux';
import appReducer from './appReducer';

const allReducers = combineReducers({
  appData: appReducer,
});

export default allReducers;
