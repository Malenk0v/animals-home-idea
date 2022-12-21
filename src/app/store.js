import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../reducers/pageReducer';

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});
