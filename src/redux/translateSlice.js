import { createSlice, current } from '@reduxjs/toolkit';
import { deleteFilteredId } from './utils/helperFunctions';

import {
  saveLocalStorageByKey,
  readLocalStorageByKey,
} from '../store/localStorage';

const exampleList = [];
//   {
//     text1: 'was machen wir heute',
//     language1: 'en',
//     text2: 'What shall we do today',
//     language2: 'de',
//     interval: 0,
//     count: 0,
//     id: '1fea35ea-7aea-d466-7a4f-9c260cf365af',
//     fav: false,
//     timestamp: 1683797600963,
//   },
//   {
//     text1: 'wie geht es dir',
//     language1: 'en',
//     text2: 'How are you',
//     language2: 'de',
//     interval: 0,
//     count: 0,
//     id: '399120de-e534-72b7-e3a2-3a1aa9b11b62',
//     fav: false,
//     timestamp: 1683797593211,
//   },
//   {
//     text1: 'welt',
//     language1: 'en',
//     text2: 'world',
//     language2: 'de',
//     interval: 0,
//     count: 0,
//     id: 'bbc1720e-7a78-b5fc-237f-a8bab7e716a3',
//     fav: false,
//     timestamp: 1683797435524,
//   },
//   {
//     text1: 'hallo',
//     language1: 'en',
//     text2: 'Hello',
//     language2: 'de',
//     interval: 0,
//     count: 0,
//     id: '4d781420-2f99-66b2-b5d9-ecc17401302f',
//     fav: false,
//     timestamp: 1683797430376,
//   },
// ];
//
const initialState = {
  history: { list: [...exampleList], timestamp: '' },
};

//==================================================================
const timestamp = Date.now();

//==================================================================
export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    // console.log(current(state));
    historyListAdd: (state, action) => {
      state.history.timestamp = timestamp;
      state.history.list = [action.payload, ...state.history.list];
      saveLocalStorageByKey('translate', state);
    },
    historyFavSwitch: (state, action) => {
      const [item] = state.history.list.filter(
        el => el.id === action.payload.id
      );
      item.timestamp = timestamp;
      item.fav = !item.fav;
      saveLocalStorageByKey('translate', state);
    },
    historyDelete: (state, action) => {
      const list = deleteFilteredId(state.history.list, action.payload.id);
      state.history.timestamp = timestamp;
      state.history.list = list;
      saveLocalStorageByKey('translate', state);
    },
    translateStateLocalData: (state, action) => {
      state.history = action.payload.state.history;
    },
  },
});

export const {
  historyListAdd,
  historyFavSwitch,
  historyDelete,
  translateStateLocalData,
} = translateSlice.actions;
export default translateSlice.reducer;
//==================================================================
