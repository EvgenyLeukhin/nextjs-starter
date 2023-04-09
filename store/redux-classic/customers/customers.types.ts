import {
  CUSTOMERS_ADD,
  CUSTOMERS_DELETE,
  CUSTOMERS_DELETE_ALL,
  CUSTOMERS_DELETE_LAST,
  CUSTOMERS_ERROR,
  CUSTOMERS_FETCHING,
  CUSTOMERS_SUCCESS,
} from './customers.actions';

export type TCustomer = {
  id: number;
  name: string;
};

export type TCustomersState = {
  customers: TCustomer[];
  isLoading?: boolean;
  isSucces?: boolean;
  isError?: string;
};

export type TActionCustomers = {
  type:
    | typeof CUSTOMERS_ADD
    | typeof CUSTOMERS_DELETE
    | typeof CUSTOMERS_DELETE_LAST
    | typeof CUSTOMERS_DELETE_ALL
    | typeof CUSTOMERS_FETCHING
    | typeof CUSTOMERS_SUCCESS
    | typeof CUSTOMERS_ERROR;
  payload?: TCustomer;
};
