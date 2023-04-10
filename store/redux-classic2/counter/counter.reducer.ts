import { TActionCount, TCountState } from './counter.types';

const initialCounterState: TCountState = {
  counter: 0,
};

// action - это объект с type и payload
export const counterReducer = (
  state = initialCounterState,
  action: TActionCount,
) => {
  switch (action.type) {
    case 'COUNTER_PLUS':
      return { ...state, counter: ++state.counter };
    case 'COUNTER_MINUS':
      return { ...state, counter: --state.counter };
    case 'COUNTER_CHANGE':
      return { ...state, counter: state.counter + Number(action.payload) };
    case 'COUNTER_RESET':
      return { ...state, counter: initialCounterState.counter };
    default:
      return state;
  }
};
