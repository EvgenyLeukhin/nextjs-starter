// @reduxjs/toolkit
// react-redux
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// slices (reducers)
import usersReducer from './users/users.slice';

// rootReducer
export const rootReducer = combineReducers({
  users: usersReducer,
});

// storeToolkit2
export const storeToolkit2 = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
