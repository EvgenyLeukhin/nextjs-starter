import { combineReducers } from 'redux';
import { appReducer } from './app/app.reducer';
// import { loginReducer } from './login/login.reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  // login: loginReducer,
});

// импорт типизации всего state
export type RootState = ReturnType<typeof rootReducer>;
