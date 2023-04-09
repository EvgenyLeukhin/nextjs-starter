// https://www.youtube.com/watch?v=Dzzeir85i3c&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=2
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // для асинхронности

// reducers
import { cashrReducer } from './cash/cash.reducer';
import { counterReducer } from './counter/counter.reducer';
import { usersReducer } from './users/users.reducer';

// types of reducers state
import { TCashState } from './cash/cash.types';
import { TCountState } from './counter/counter.types';
import { TUsersState } from './users/users.types';

// объекдинение редьюсеров
export const rootReducer = combineReducers({
  cash: cashrReducer,
  counter: counterReducer,
  users: usersReducer,
});

export type TRootState = {
  cash: TCashState;
  counter: TCountState;
  users: TUsersState;
};

export const storeClassic = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// TODO
// 1. convert to TS +++
// 2. action types to sepparate file imports +++
// 3. action creators +++
// 4. fetch example ---
