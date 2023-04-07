// https://codesandbox.io/s/todo-forked-f0vk2?file=/src/store/types/UsersApiState.ts:0-143

// redux
// redux-thunk

import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import todos from './todos/reducers';
import users from './users/reducers';
import { AppState } from './types/AppState';
import { AppActions } from './types/AppActions';

export const rootReducer = combineReducers({
  todos,
  users,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

export const storeClassic2 = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)), // composeEnhancers
);
