import { combineReducers } from 'redux';
import { appReducer } from './app/app.reducer';
import { loginReducer } from './login/login.reducer';
import { dashboardReducer } from './dashboard/dashboard.reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
});

// импорт типизации всего state
export type RootState = ReturnType<typeof rootReducer>;
