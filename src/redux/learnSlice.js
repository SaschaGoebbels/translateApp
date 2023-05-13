import { createSlice } from '@reduxjs/toolkit';
import { deleteFilteredId } from './utils/helperFunctions';
// logic components
import { createNewRound } from '../components/logic/learnLogic';

const exampleList = [
  {
    text1: 'was machen wir heute',
    language1: 'en',
    text2: 'What shall we do today',
    language2: 'de',
    interval: 3,
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
    interval: 2,
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
    interval: 1,
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
    interval: 1,
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
    0: 0,
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
  },
};

const filterById = (array, id) => {
  return array.filter(el => el.id === id)[0];
};

const removeObjectFromArray = (array, object) => {
  const index = array.indexOf(object);
  return array.splice(index, 1);
};
//==================================================================
const currentIndexPlusOneOrNewRound = (array, index, learnList, interval) => {
  // if length > index => index plus one
  if (array.length > index + 1) {
    return [index + 1];
  }
  // else index 0 + new round
  if (array.length <= index + 1) {
    const newRound = createNewRound(learnList, interval);
    return [0, newRound];
  }
};

const increaseCount = array => {
  array.map(el => el.count + 1);
};
//==================================================================
const timestamp = Date.now();
//==================================================================
export const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    addOrRemoveByHistoryList: (state, action) => {
      state.timestamp = timestamp;
      const item = action.payload.item;
      if (state.learn.list.some(el => el.id === item.id)) {
        state.learn.list = deleteFilteredId(state.learn.list, item.id);
      }
      //push to array if item not exist
      else {
        state.learn.list = [item, ...state.learn.list];
      }
    },
    currentList: (state, action) => {
      state.timestamp = timestamp;
      state.current.list = action.payload.list;
    },
    intervalIncrease: (state, action) => {
      state.timestamp = timestamp;
      const item = filterById(state.learn.list, action.payload.id);
      item.interval += 1;
      // if interval is greater than list of intervals then archive
      if (item.interval > Object.keys(state.interval).slice(-1)) {
        removeObjectFromArray(state.learn.list, item);
        state.stats.archived = [item, ...state.stats.archived];
      }
      const [index, newRound] = currentIndexPlusOneOrNewRound(
        state.current.list,
        state.current.index,
        state.learn.list,
        state.interval
      );
      state.current.index = index;
      if (newRound) {
        state.stats.totalRounds += 1;
        increaseCount(state.learn.list);
        state.current.list = newRound;
      }
    },
    intervalReset: (state, action) => {
      state.timestamp = timestamp;
      const item = filterById(state.learn.list, action.payload.id);
      item.interval = 0;
      const [index, newRound] = currentIndexPlusOneOrNewRound(
        state.current.list,
        state.current.index,
        state.learn.list,
        state.interval
      );
      state.current.index = index;
      if (newRound) {
        state.stats.totalRounds += 1;
        increaseCount(state.learn.list);
        state.current.list = newRound;
      }
    },
    //==================================================================
    deleteItemOfLearnList: (state, action) => {
      state.timestamp = timestamp;
      state.learn.list = deleteFilteredId(state.learn.list, action.payload.id);
      state.current.list = deleteFilteredId(
        state.current.list,
        action.payload.id
      );
    },
    //==================================================================
    editItemOfLearnList: (state, action) => {
      state.timestamp = timestamp;
      let item = filterById(state.learn.list, action.payload.id);
      item.text1 = action.payload.text1;
      item.text2 = action.payload.text2;
    },
    //==================================================================
  },
});

export const {
  addOrRemoveByHistoryList,
  currentList,
  intervalIncrease,
  intervalReset,
  deleteItemOfLearnList,
  editItemOfLearnList,
} = learnSlice.actions;
export default learnSlice.reducer;
