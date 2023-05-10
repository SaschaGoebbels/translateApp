import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  learn: { list: [], timestamp: '' },
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

const deleteFilteredId = (array, id) => {
  return array.filter(el => el.id !== id);
};

const timestamp = Date.now();
//==================================================================
export const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    xxx: (state, action) => {
      console.log('✅', action);
      state.history.timestamp = timestamp;
      state.history.list = [action.payload, ...state.history.list];
    },
    xxx1: state => {
      state.count = 0;
    },
    xxx2: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { nullCount, incrementByAmount } = learnSlice.actions;
export default learnSlice.reducer;
