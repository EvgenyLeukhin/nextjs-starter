import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TypeRootState } from '../storeToolkit';

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
