const processInitialState = { processList: [] };
const processReducer = (state = { ...processInitialState }, action) => {
  if (action === "UPDATEPROCESS") {
    console.log("✅");
  }
  return state;
};
export default processReducer;
