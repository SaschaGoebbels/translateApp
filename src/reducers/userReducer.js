const defaultUserState = { loggedIn: false };

const userReducer = (state = { ...defaultUserState }, action) => {
  // console.log("✅", state, action);
  if (action === 'LOGIN') return (state.loggedIn = true);
  if (action === 'LOGOUT') return (state.loggedIn = false);
  return state;
};

export default userReducer;
