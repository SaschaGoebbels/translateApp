import { configureStore } from '@reduxjs/toolkit';
import translateReducer from './translateSlice';
import learnReducer from './learnSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    translate: translateReducer,
    learn: learnReducer,
    settings: settingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
