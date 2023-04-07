import { legacy_createStore, combineReducers } from 'redux';

const initialState1 = {
  cash: 1000,
};

const reducer1 = (state = initialState1, action) => {
  // проверка типа экшена
  switch (action.type) {
    // всегда возвращаем старый ыtate + меняем какое-либо поле (поле сash)
    // payload - "полезная нагрузка" - данные, которые можно передать в экшен
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const initialState2 = {
  counter: 0,
};

const reducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case 'PLUS':
      return { ...state, counter: ++state.counter };
    case 'MINUS':
      return { ...state, counter: --state.counter };
    default:
      return state;
  }
};

// объекдинение редьюсеров
export const rootReducer = combineReducers({
  cash: reducer1,
  counter: reducer2,
});

const store = legacy_createStore(rootReducer);

export default store;
