const defaultUserState = { loggedIn: false, timestamp: '' };

const userReducer = (state = { ...defaultUserState }, action) => {
  // console.log("✅", state, action);
  // timestamp: Date.now();
  if (action === 'LOGIN') return (state.loggedIn = true);
  if (action === 'LOGOUT') return (state.loggedIn = false);
  return state;
};

export default userReducer;
