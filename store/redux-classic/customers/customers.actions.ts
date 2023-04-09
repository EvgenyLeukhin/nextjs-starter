import { TCustomer } from './customers.types';

export const CUSTOMERS_ADD = 'CUSTOMERS_ADD';
export const CUSTOMERS_DELETE = 'CUSTOMERS_DELETE';
export const CUSTOMERS_DELETE_LAST = 'CUSTOMERS_DELETE_LAST';
export const CUSTOMERS_DELETE_ALL = 'CUSTOMERS_DELETE_ALL';
export const CUSTOMERS_FETCHING = 'CUSTOMERS_FETCHING';
export const CUSTOMERS_SUCCESS = 'CUSTOMERS_SUCCESS';
export const CUSTOMERS_ERROR = 'CUSTOMERS_ERROR';

// action creators нужны для сокращения кода, чтобы постоянно не записывать тип экшена
// и не допустить возможные ошибки
// dispatch<TActionCustomers>({
//   type: CUSTOMERS_ADD,
//   payload: { id: randomId, name: `Customer Name ${randomId}` },
// })

// dispatch(
//   addCustomerAction({
//     id: randomId,
//     name: `Customer Name ${randomId}`,
//   }),
// );

// action creators
export const addCustomer = (payload: TCustomer) => {
  return {
    type: CUSTOMERS_ADD,
    payload,
  };
};

// shortCut - возврат объекта
export const addCustomer2 = (payload: TCustomer) => ({
  type: CUSTOMERS_ADD,
  payload,
});

export const deleteCustomer = (payload: TCustomer) => ({
  type: CUSTOMERS_DELETE,
  payload,
});

export const deleteAllCustomers = () => ({
  type: CUSTOMERS_DELETE_ALL,
});

export const deleteLastCustomer = () => ({
  type: CUSTOMERS_DELETE_LAST,
});
