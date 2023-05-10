import { createSlice } from '@reduxjs/toolkit';
import { deleteFilteredId } from './utils/helperFunctions';

const initialState = {
  history: { list: [], timestamp: '' },
};

//==================================================================
const timestamp = Date.now();

// const [item] = (array, id) => {
//   return array.list.filter(el => el.id === id);
// };
//==================================================================
export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    historyListAdd: (state, action) => {
      state.history.timestamp = timestamp;
      state.history.list = [action.payload, ...state.history.list];
    },
    historyAddToLearn: (state, action) => {
      console.log('✅', state.history.list);
      const [item] = state.history.list.filter(
        el => el.id === action.payload.id
      );
      console.log('✅', item);
      // // //delete from array if item exist
      // // if (item.fav) {
      // //   console.log('✅', item);
      // //   item.fav = false;
      // //   // state.learn.list = deleteFilteredId(state.learn.list, item.id);
      // // }
      // // //push to array if item not exist
      // // else if (!state.learn.list.some(el => el.id === item.id)) {
      // //   item.fav = true;
      // //   item.timestamp = timestamp;
      // //   console.log('✅');
      // //   // state.learn.list = [item, ...state.learn.list];
      // // }
    },
    learnDelete: (state, action) => {
      const list = deleteFilteredId(state.learn.list, action.id);
      state.learn.timestamp = timestamp;
      state.learn.list = list;
      // reset fav state in history when deleting
      const [historyItem] = state.history.list.filter(
        el => el.id !== action.id
      );
      if (historyItem) {
        historyItem.fav = false;
      }
    },
    historyDelete: (state, action) => {
      const list = deleteFilteredId(state.history.list, action.id);
      state.history.timestamp = timestamp;
      state.history.list = list;
    },
  },
});

export const { historyListAdd, historyAddToLearn, learnDelete, historyDelete } =
  translateSlice.actions;
export default translateSlice.reducer;
//==================================================================
