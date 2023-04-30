// startup
export const startup = action => {
  return { type: 'STARTUP', payload: action };
};

export const login = () => {
  return { type: 'LOGIN' };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};
//#############################################################
// history
export const historyListAdd = action => {
  return { type: 'ADD', payload: action.payload };
};
export const historyAddToLearn = id => {
  return { type: 'ADDTOLEARN', id };
};
export const historyDelete = id => {
  return { type: 'DELETEHISTORYITEM', id };
};

//#############################################################
// settings
export const defaultLanguage = action => {
  return { type: 'DEFAULTLANGUAGE', payload: action.payload };
};

//#############################################################
// learn
export const learnDelete = id => {
  return { type: 'LEARNDELETE', id };
};
export const currentList = array => {
  return { type: 'CURRENTLIST', array };
};
