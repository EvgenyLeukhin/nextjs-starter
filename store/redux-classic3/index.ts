import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './users/users.reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import * as usersActionCreators from './users/users.actionCreators';

const rootReducer = combineReducers({
  users: userReducer,
});

export const storeClassic3 = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk),
);

type RootState = ReturnType<typeof rootReducer>;

// типизация useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// хук с dispatch
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(usersActionCreators, dispatch);
};
