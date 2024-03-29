import { TActionCash, TCashState } from './cash.types';

const initialCashState: TCashState = {
  cash: 1000,
};

export const cashReducer = (state = initialCashState, action: TActionCash) => {
  // проверка типа экшена
  // всегда возвращаем старый ыtate + меняем какое-либо поле (поле сash)
  // payload - "полезная нагрузка" - данные, которые можно передать в экшен
  switch (action.type) {
    case 'CASH_ADD':
      return { ...state, cash: state.cash + action.payload };
    case 'CASH_GET':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
