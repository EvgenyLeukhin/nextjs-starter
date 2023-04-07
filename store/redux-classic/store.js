import { legacy_createStore } from 'redux';

const initialState = {
  cash: 0,
};

const reducer = (state = initialState, action) => {
  // проверка типа экшена
  switch (action.type) {
    // всегда возвращаем старый ыtate + меняем какое-либо поле (поле сash)
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

// payload - "полезная нагрузка" - данные, которые можно передать в экшен

const store = legacy_createStore(reducer);
