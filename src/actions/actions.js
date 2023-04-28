export const login = () => {
  return { type: 'LOGIN' };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const historyListAdd = action => {
  return { type: 'ADD', payload: action.payload };
};

export const defaultLanguage = action => {
  return { type: 'DEFAULTLANGUAGE', payload: action.payload };
};
