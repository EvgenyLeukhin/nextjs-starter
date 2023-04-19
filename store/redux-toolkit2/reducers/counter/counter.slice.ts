import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCounterState } from './counter.types';

const initialCounterState: TCounterState = {
  counter: 0,
};

// creater slice
const сounterSlice = createSlice({
  name: 'counter',

  // initial state
  initialState: initialCounterState,

  // reducer with actions
  reducers: {
    // changeCounter
    changeCounter: (state, { payload }: PayloadAction<number>) => {
      return {
        ...state,
        counter: payload,
      };
    },

    // clear
    clear: () => initialCounterState,
  },
});

export const counterReducer = сounterSlice.reducer;
export const { changeCounter } = сounterSlice.actions;
