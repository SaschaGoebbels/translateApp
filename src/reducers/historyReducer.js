//
const historyReducer = (state = [], action) => {
  if (action.type === 'add') {
    state = [...state, action.payload];
    return state;
  }
  return state;
};
export default historyReducer;
