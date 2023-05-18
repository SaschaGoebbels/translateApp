import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    defaultLanguage: ['German', 'English'],
    languageArray: [
      { name: 'English', lang: 'en' },
      { name: 'German', lang: 'de' },
      { name: 'Spanish', lang: 'es' },
      { name: 'Italian', lang: 'it' },
      { name: 'Albanian', lang: 'sq' },
      { name: 'Bulgarian', lang: 'bg' },
      { name: 'Lithuanian', lang: 'lt' },
      { name: 'Croatian', lang: 'hr' },
      { name: 'Norwegian', lang: 'no' },
      { name: 'Czech', lang: 'cs' },
      { name: 'Persian', lang: 'fa' },
      { name: 'Danish', lang: 'da' },
      { name: 'Dutch', lang: 'nl' },
      { name: 'Portuguese', lang: 'pt' },
      { name: 'Romanian', lang: 'ro' },
      { name: 'Russian', lang: 'ru' },
      { name: 'Serbian', lang: 'sr' },
      { name: 'Finnish', lang: 'fi' },
      { name: 'Slovenian', lang: 'sl' },
      { name: 'Swedish', lang: 'sv' },
      { name: 'Greek', lang: 'el' },
      { name: 'Turkish', lang: 'tr' },
      { name: 'Irish', lang: 'ga' },
    ],
    shortcuts: { clearWithESC: true, submitEnter: true, learn: true },
    timestamp: '',
    userData: { loggedIn: false, timestamp: '' },
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
    //==================================================================
    settingsStateLocalData: (state, action) => {
      state.settings = action.payload.state.settings;
    },
    //==================================================================
  },
});

export const { xx1, xx2, xx3, settingsStateLocalData } = settingsSlice.actions;
export default settingsSlice.reducer;
