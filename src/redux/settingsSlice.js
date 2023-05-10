import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: { loggedIn: false, timestamp: '' },
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
const timestamp = Date.now();
//==================================================================
export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    xx1: (state, action) => {
      console.log('✅', action);
      // const newHistoryItem = JSON.parse(action);
      state.history.timestamp = timestamp;
      state.history.list = [action.payload, ...state.history.list];
    },
    xx2: state => {
      state.count = 0;
    },
    xx3: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { xx1, xx2, xx3 } = settingsSlice.actions;
export default settingsSlice.reducer;
