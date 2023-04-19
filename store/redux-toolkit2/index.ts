import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { counterReducer } from '../redux-toolkit2/reducers/counter/counter.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const storeToolkit2 = configureStore({
  reducer: rootReducer,
});

// setupListeners(storeToolkit2.dispatch);
