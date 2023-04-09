import {
  CUSTOMERS_ADD,
  CUSTOMERS_DELETE,
  CUSTOMERS_DELETE_ALL,
  CUSTOMERS_DELETE_LAST,
  CUSTOMERS_ERROR,
  CUSTOMERS_FETCHING,
  CUSTOMERS_SUCCESS,
} from './customers.actions';

import {
  TActionCustomers,
  TCustomer,
  TCustomersState,
} from './customers.types';

const initialCounterState: TCustomersState = {
  customers: [
    {
      id: 1,
      name: 'Customer Name 1',
    },
  ],
  isLoading: false,
  isSucces: false,
  isError: '',
};

// action - это объект с {type: string и payload: data}
export const customersReducer = (
  state = initialCounterState,
  action: TActionCustomers,
) => {
  switch (action.type) {
    // CUSTOMERS_ADD
    case CUSTOMERS_ADD:
      return { ...state, customers: [...state.customers, action.payload] };

    // CUSTOMERS_DELETE
    case CUSTOMERS_DELETE:
      return {
        ...state,
        customers: state.customers.filter(
          customer => action.payload?.id !== customer.id,
        ),
      };

    // CUSTOMERS_DELETE_LAST
    case CUSTOMERS_DELETE_LAST:
      return { ...state, customers: state.customers.slice(0, -1) };

    // CUSTOMERS_DELETE_ALL
    case CUSTOMERS_DELETE_ALL:
      return { ...state, customers: [] };

    // CUSTOMERS_FETCHING
    case CUSTOMERS_FETCHING:
      return { ...state, isLoading: true };

    // CUSTOMERS_SUCCESS
    case CUSTOMERS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true };

    // CUSTOMERS_ERROR
    case CUSTOMERS_ERROR:
      return { ...state, isLoading: false, isError: 'Fetch customers error' };
    default:
      return state;
  }
};
