import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// action creators
import * as usersActionCreators from './users/users.actionCreators';
import * as todosActionCreators from './todos/todos.actionCreators';

// reducers
import { userReducer } from './users/users.reducer';
import { todosReducer } from './todos/todos.reducer';

const rootReducer = combineReducers({
  users: userReducer,
  todos: todosReducer,
});

export const storeClassic3 = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk),
);

type RootState = ReturnType<typeof rootReducer>;

// типизация useSelector (чтобы можно было использовать типизированный useSelector)
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// хук для всех экшенов проекта (из него можно импортировать все экшены и dispatch можно не указывать)
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...usersActionCreators,
      ...todosActionCreators,
    },
    dispatch,
  );
};
