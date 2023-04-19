const loginReducer = (state = false, action) => {
  console.log("✅", state, action);
  if (action === "LOGIN") return (state.loginReducer = true);
  if (action === "LOGOUT") return (state.loginReducer = false);
  return state;
};

export default loginReducer;
