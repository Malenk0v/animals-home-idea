import { createSlice } from '@reduxjs/toolkit';
import Main from '../components/Main';

const state = {
  page: <Main />,
};

const pageRudecer = createSlice({
  name: 'page',
  initialState: state,
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { changePage } = pageRudecer.actions;
export default pageRudecer.reducer;
