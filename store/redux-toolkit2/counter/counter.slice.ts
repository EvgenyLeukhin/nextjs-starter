import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCounterState } from './counter.types';

const initialCounterState: TCounterState = {
  counter: 0,
};

// creater slice
export const counterSlice = createSlice({
  name: 'counter',

  // initial state
  initialState: initialCounterState,

  // reducer with actions
  reducers: {
    // changeCounters (with return writing)
    changeCounter: (state, { payload }: PayloadAction<number>) => {
      return {
        // ...state,
        counter: payload, // будет всегда равен payload (без суммирования)
      };
    },

    // increment
    increment(state) {
      state.counter += 1;
    },

    // dicrement
    dicrement(state) {
      state.counter -= 1;
    },

    // change
    change(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },

    // clear
    clear: () => initialCounterState,
  },
});
