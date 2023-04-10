// https://www.youtube.com/watch?v=Dzzeir85i3c&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=2
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // для асинхронности

// reducers
import { cashReducer } from './cash/cash.reducer';
import { counterReducer } from './counter/counter.reducer';
import { usersReducer } from './users/users.reducer';

// types of reducers state
import { TCashState } from './cash/cash.types';
import { TCountState } from './counter/counter.types';
import { TUsersState } from './users/users.types';

// объединение редьюсеров
export const rootReducer = combineReducers({
  cash: cashReducer,
  counter: counterReducer,
  users: usersReducer,
});

export const storeClassic = legacy_createStore(
  rootReducer,
  // composeWithDevTools - devtools (Redux Google extantion)

  // redux-thunk
  // чтобы redux понимал thunk (асинхронные запросы),
  // и чтобы можно было во внутрь dispatch() передавать не только action объекты {type, payload},
  // но и асинхронные функции (тханки - функции с асинхронностью для запросов к API)
  composeWithDevTools(applyMiddleware(thunk)),
);

export type TRootState = {
  cash: TCashState;
  counter: TCountState;
  users: TUsersState;
};

// TODO
// 1. convert to TS +++
// 2. action types to sepparate file imports +++
// 3. action creators +++
// 4. fetch example +++
// 5. actions types ---
// 6. thunk creators (thunk with payload)
