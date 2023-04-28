//
import { readLocalStorage } from '../store/localStorage';
import { saveLocalStorage } from '../store/localStorage';

const defaultState = { list: [], timestamp: '0' };

const historyReducer = (state = { ...defaultState }, action) => {
  const timestamp = Date.now();
  // console.log('✅', state);
  if (action.type === 'ADD') {
    state.timestamp = timestamp;
    state.list = [action.payload, ...state.list];
    return state;
  }
  if (action.type === 'STARTUP') {
    state = action.payload.history;
    return state;
  }
  return state;
};
export default historyReducer;
