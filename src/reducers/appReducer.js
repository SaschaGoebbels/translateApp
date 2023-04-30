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
    current: { list: [], index: 0 },
    timestamp: '',
    stats: {
      totalRounds: 0,
      archived: [],
    },
    interval: {
      1: 1,
      2: 1,
      3: 2,
      4: 2,
      5: 5,
      6: 5,
      7: 10,
      8: 10,
      9: 20,
      10: 20,
      11: 50,
      12: 50,
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
    shortcuts: { clearWithESC: true, submitEnter: true, learn: true },
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
      console.log('✅', item);
      item.fav = false;
      state.learn.list = deleteFilteredId(state.learn.list, item.id);
    }
    //push to array if item not exist
    else if (!state.learn.list.some(el => el.id === item.id)) {
      item.fav = true;
      item.timestamp = timestamp;
      // state.learn.list = [];
      state.learn.list = [item, ...state.learn.list];
      state.learn.timestamp = timestamp;
    }
  }
  if (action.type === 'LEARNDELETE') {
    const list = deleteFilteredId(state.learn.list, action.id);
    state.learn.timestamp = timestamp;
    state.learn.list = list;
  }
  //==================================================================
  if (action.type === 'DELETEHISTORYITEM') {
    const list = deleteFilteredId(state.history.list, action.id);
    state.history.timestamp = timestamp;
    state.history.list = list;
  }
  //==================================================================
  //learn
  if (action.type === 'CURRENTLIST') {
    // console.log('❌', action.array);
    state.learn.current.list = action.array;
    state.learn.timestamp = timestamp;
  }
  //==================================================================
  // saveLocalStorage(state); // debug
  // prevent save local on startup ! to avoid overwriting
  if (state.timestamp !== '') saveLocalStorage(state);
  state.timestamp = timestamp;
  return { ...state };
};
export default appReducer;
