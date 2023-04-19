import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { usersSlice } from './reducers/users/users.slice';

const rootReducer = combineReducers({
  // @ts-ignore
  users: usersSlice,
});

export const setutStore = () =>
  configureStore({
    reducer: rootReducer,
  });

// типизация стора и экшенов
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setutStore>;
export type AppDispatch = AppStore['dispatch'];

// хук со всеми типизированными экшенами
export const useAppDispatch = () => useDispatch<AppDispatch>();

// хук со всем типизированным стейтом
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
