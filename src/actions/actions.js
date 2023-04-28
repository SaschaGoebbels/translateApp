//
export const startup = action => {
  return { type: 'STARTUP', payload: action };
};

export const login = () => {
  return { type: 'LOGIN' };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const startUpData = action => {
  return { type: 'STARTUP', payload: action.data };
};

export const historyListAdd = action => {
  return { type: 'ADD', payload: action.payload };
};

export const defaultLanguage = action => {
  return { type: 'DEFAULTLANGUAGE', payload: action.payload };
};
