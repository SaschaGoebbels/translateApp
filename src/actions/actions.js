export const login = () => {
  return { type: 'LOGIN' };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const historyList = action => {
  return { type: 'add', payload: action.payload };
};
