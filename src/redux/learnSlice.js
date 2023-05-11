import { createSlice } from '@reduxjs/toolkit';
import { deleteFilteredId } from './utils/helperFunctions';

const exampleList = [
  {
    text1: 'was machen wir heute',
    language1: 'en',
    text2: 'What shall we do today',
    language2: 'de',
    interval: 0,
    count: 0,
    id: '1fea35ea-7aea-d466-7a4f-9c260cf365af',
    fav: false,
    timestamp: 1683797600963,
  },
  {
    text1: 'wie geht es dir',
    language1: 'en',
    text2: 'How are you',
    language2: 'de',
    interval: 0,
    count: 0,
    id: '399120de-e534-72b7-e3a2-3a1aa9b11b62',
    fav: false,
    timestamp: 1683797593211,
  },
  {
    text1: 'welt',
    language1: 'en',
    text2: 'world',
    language2: 'de',
    interval: 0,
    count: 0,
    id: 'bbc1720e-7a78-b5fc-237f-a8bab7e716a3',
    fav: false,
    timestamp: 1683797435524,
  },
  {
    text1: 'hallo',
    language1: 'en',
    text2: 'Hello',
    language2: 'de',
    interval: 0,
    count: 0,
    id: '4d781420-2f99-66b2-b5d9-ecc17401302f',
    fav: false,
    timestamp: 1683797430376,
  },
];

const initialState = {
  learn: { list: [...exampleList], timestamp: '' },
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
};

//==================================================================
const filterIntervalCount = array => {
  return array.filter(el => el.count >= el.interval);
};
const arrayCountUp = array => {
  return array.map(el => el.count + 1);
};
const newRound = array => {
  let newRound = filterIntervalCount(array);
  console.log('✅', newRound);
  if (newRound.length === 0) {
    while (newRound === 0) {
      newRound = filterIntervalCount(arrayCountUp(array));
      console.log('✅');
    }
    return;
  }
  return newRound;
};

// if index = length ok
// new round
// round empty
// count + 1
// call again

const timestamp = Date.now();
//==================================================================
export const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    addOrRemoveByHistoryList: (state, action) => {
      const item = action.payload.item;
      if (state.learn.list.some(el => el.id === item.id)) {
        state.learn.list = deleteFilteredId(state.learn.list, item.id);
      }
      //push to array if item not exist
      else {
        state.learn.list = [item, ...state.learn.list];
      }
    },
    xxx1: state => {
      state.count = 0;
    },
    xxx2: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { addOrRemoveByHistoryList } = learnSlice.actions;
export default learnSlice.reducer;
