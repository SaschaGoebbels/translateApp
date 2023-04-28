//
// import { readLocalStorage } from '../store/localStorage';
import { saveLocalStorage } from '../store/localStorage';

//==================================================================
const defaultState = {
  timestamp: '',
  userData: { loggedIn: false, timestamp: '' },
  history: { list: [], timestamp: '' },
  learn: {
    list: [],
    timestamp: '',
    count: 0,
    currentIndex: 0,
    interval: {
      1: 1,
      2: 2,
      3: 5,
      4: 10,
      5: 20,
      6: 50,
      7: 100,
      8: 200,
      9: 500,
      10: 1000,
      archived: false,
    },
  },
  settings: {
    defaultLanguage: ['German', 'English'],
    languageArray: [
      { name: 'English', lang: 'en' },
      { name: 'German', lang: 'de' },
      { name: 'Spanish', lang: 'sp' },
    ],
    shortcuts: { clearWithESC: true, submitEnter: true },
    timestamp: '',
  },
};
//==================================================================

const deleteFilteredId = (array, id) => {
  return array.filter(el => el.id !== id);
};

const appReducer = (state = { ...defaultState }, action) => {
  const timestamp = Date.now();
  if (action.type === 'STARTUP') {
    state = action.payload;
  }
  // history
  if (action.type === 'ADD') {
    state.history.timestamp = timestamp;
    state.history.list = [action.payload, ...state.history.list];
  }
  //==================================================================
  if (action.type === 'ADDTOLEARN') {
    const [item] = state.history.list.filter(el => el.id === action.id);
    //delete from array if item exist
    if (item.fav) {
      item.fav = false;
      state.learn.list = deleteFilteredId(state.learn.list, item.id);
    }
    //push to array if item not exist
    else if (!state.learn.list.some(el => el.id === item.id)) {
      item.fav = true;
      item.timestamp = timestamp;
      state.learn.list = [item, ...state.learn.list];
      state.learn.timestamp = timestamp;
    }
  }
  //==================================================================
  if (action.type === 'DELETEHISTORYITEM') {
    const list = deleteFilteredId(state.history.list, action.id);
    state.history.timestamp = timestamp;
    state.history.list = list;
  }
  // saveLocalStorage(state); // debug
  // prevent save local on startup ! to avoid overwriting
  if (state.timestamp !== '') saveLocalStorage(state);
  state.timestamp = timestamp;
  return { ...state };
};
export default appReducer;
