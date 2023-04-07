// https://www.youtube.com/watch?v=Dzzeir85i3c&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=2
import { legacy_createStore, combineReducers } from 'redux';

const initialCashState = {
  cash: 1000,
};

const reducer1 = (state = initialCashState, action) => {
  // проверка типа экшена
  switch (action.type) {
    // всегда возвращаем старый ыtate + меняем какое-либо поле (поле сash)
    // payload - "полезная нагрузка" - данные, которые можно передать в экшен
    case 'CASH_ADD':
      return { ...state, cash: state.cash + action.payload };
    case 'CASH_GET':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const initialCounterState = {
  counter: 0,
};

const reducer2 = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'COUNTER_PLUS':
      return { ...state, counter: ++state.counter };
    case 'COUNTER_MINUS':
      return { ...state, counter: --state.counter };
    case 'COUNTER_CHANGE':
      return { ...state, counter: state.counter + action.payload };
    case 'COUNTER_RESET':
      return { ...state, counter: initialCounterState.counter };
    default:
      return state;
  }
};

// объекдинение редьюсеров
export const rootReducer = combineReducers({
  cash: reducer1,
  counter: reducer2,
});

const storeClassic = legacy_createStore(rootReducer);

export default storeClassic;

// TODO
// 1. convert to TS
// 2. action types to sepparate file imports
// 3. action creators ???
// 4. fetch example
