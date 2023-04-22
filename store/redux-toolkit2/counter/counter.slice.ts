import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCounterState } from './counter.types';

const initialCounterState: TCounterState = {
  counter: 0,
};

// createSlice (гораздо удобнее чем createReducer())
export const counterSlice = createSlice({
  name: 'counter',

  // initial state
  initialState: initialCounterState,

  // reducer with actions
  reducers: {
    // changeCounters (with return writing)
    change: (state, { payload }: PayloadAction<number>) => {
      return {
        // ...state,
        counter: payload, // будет всегда равен payload (без суммирования)
      };
    },

    // можно мутировать стейт (изменять текущие поля)
    // dicrementCounter
    dicrementCounter(state) {
      state.counter -= 1;
    },

    // incrementCounter
    incrementCounter(state) {
      state.counter += 1;
    },

    // changeCounter
    changeCounter(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },

    // clear
    clearCounter: () => initialCounterState,

    // такая запись экшенов гораздо удобнее чем createAction()
  },
});
