//
const defaultSettings = {
  defaultLanguage: ['German', 'English'],
  languageArray: [
    { name: 'English', lang: 'en' },
    { name: 'German', lang: 'de' },
    { name: 'Spanish', lang: 'sp' },
  ],
  shortcuts: { clearWithESC: true, submitEnter: true },
};

const settingsReducer = (state = defaultSettings, action) => {
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
