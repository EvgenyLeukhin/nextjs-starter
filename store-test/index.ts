import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { RootState, rootReducer } from './rootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const testStore = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk),
);

// экспорт типизированного селектора всего стейта приложения
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
