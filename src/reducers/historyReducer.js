//
const historyReducer = (state = [], action) => {
  console.log('❌', action);
  if (action.type === 'ADD') {
    state = [action.payload, ...state];
    return state;
  }
  return state;
};
export default historyReducer;
