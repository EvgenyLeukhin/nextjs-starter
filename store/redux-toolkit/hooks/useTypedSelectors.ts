import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TypeRootState } from '../storeToolkit';

// типизация селектора по стору
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
