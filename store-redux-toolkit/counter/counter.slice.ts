import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 0;

// creater slice
export const conterSlice = createSlice({
  name: 'counter',

  // initial state
  initialState,

  // reducer with actions
  reducers: {
    // changeCounter
    changeCounter: (state, action: PayloadAction<number>) =>
      state + action.payload,

    // clear
    clear: () => initialState,
  },
});

export const counterReducer = conterSlice.reducer;
export const counterActions = conterSlice.actions;
