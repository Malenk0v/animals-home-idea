import { createSlice } from '@reduxjs/toolkit';

const state = {
  text: 'work',
};
const tempReducer = createSlice({
  name: 'temp',
  initialState: state,
  reducers: {
    temp(state, action) {
      console.log(`work`);
    },
  },
});

export default tempReducer.reducer;
