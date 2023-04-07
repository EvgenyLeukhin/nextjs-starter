import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartActions } from '../cart/cart.slice';
import { counterActions } from '../counter/counter.slice';

// cохраняем все экшены
const allActions = {
  ...cartActions,
  ...counterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
