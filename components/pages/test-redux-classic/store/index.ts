import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { RootState, rootReducer } from './rootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const testStore = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// экспорт хука, типизированного селектора всего стейта приложения
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
