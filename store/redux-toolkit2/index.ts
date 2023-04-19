import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterSlice } from './counter/counter.slice';
import { usersSlice } from './users/users.slice';

// storeToolkit2
export const storeToolkit2 = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    usersStore: usersSlice.reducer,
  },
});

// типизация всего стейта
type RootState = ReturnType<typeof storeToolkit2.getState>;
export default RootState;

// хук со всем стейтом
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// хук со всеми экшенами
const allActions = {
  ...counterSlice.actions,
  ...usersSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
