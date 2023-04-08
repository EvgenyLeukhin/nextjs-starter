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
  type: 'CUSTOMERS_FETCHING' | 'CUSTOMERS_SUCCESS' | 'CUSTOMERS_ERROR';
  payload?: TCustomer;
};
