import { TActionCustomers, TCustomersState } from './customers.types';

const initialCounterState: TCustomersState = {
  customers: [],
  isLoading: false,
  isSucces: false,
  isError: '',
};

// action - это объект с type и payload
export const customersReducer = (
  state = initialCounterState,
  action: TActionCustomers,
) => {
  switch (action.type) {
    case 'CUSTOMERS_FETCHING':
      return { ...state, isLoading: true };
    case 'CUSTOMERS_SUCCESS':
      return { ...state, isLoading: false, isSuccess: true };
    case 'CUSTOMERS_ERROR':
      return { ...state, isLoading: false, isError: 'Fetch customers error' };
    default:
      return state;
  }
};
