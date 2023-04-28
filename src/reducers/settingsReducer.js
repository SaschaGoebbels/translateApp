//
const defaultSettings = {
  defaultLanguage: ['German', 'English'],
  languageArray: [
    { name: 'English', lang: 'en' },
    { name: 'German', lang: 'de' },
    { name: 'Spanish', lang: 'sp' },
  ],
  shortcuts: { clearWithESC: true, submitEnter: true },
  timestamp: '',
};

const settingsReducer = (state = defaultSettings, action) => {
  // timestamp: Date.now(),
  if (action.type === 'DEFAULTLANGUAGE') {
    state.defaultLanguage = action.payload;
    return state;
  }
  if (action.type === 'SHORTCUTS') {
    console.log('❌ shortcuts');
  }
  return state;
};
export default settingsReducer;
