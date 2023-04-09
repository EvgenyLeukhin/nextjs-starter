import { useSelector, useDispatch } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';
import { TActionCount } from '@/store/redux-classic/counter/counter.types';
import { TActionCash } from '@/store/redux-classic/cash/cash.types';
import { TRootState } from '@/store/redux-classic';
import {
  addCustomer,
  deleteAllCustomers,
  deleteCustomer,
  deleteLastCustomer,
} from '@/store/redux-classic/customers/customers.actions';

const ReduxClassicExample = () => {
  const dispatch = useDispatch();

  // counter
  const { counter } = useSelector((state: TRootState) => state.counter);

  // cash
  const { cash } = useSelector((state: TRootState) => state.cash);

  // customers
  const { customers, isLoading, isSucces, isError } = useSelector(
    (state: TRootState) => state.customers,
  );

  // можно создавать отдельные функции с параметрами для dispatch
  function changeCount(count: number) {
    dispatch<TActionCount>({ type: 'COUNTER_CHANGE', payload: count });
  }

  const randomId = Math.round(Math.random() * 1000);

  // console.log('customers', customers);

  return (
    <section className={styles.ReduxClassicExample}>
      {/* counter */}
      <div>
        Counter: <b>{counter}</b>
        <h4>Change count</h4>
        <button onClick={() => changeCount(-10)}>-10</button>
        {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: -10 })}>-10</button> */}
        <button
          onClick={() => dispatch<TActionCount>({ type: 'COUNTER_MINUS' })}
        >
          -1
        </button>
        <button
          onClick={() => dispatch<TActionCount>({ type: 'COUNTER_RESET' })}
        >
          X
        </button>
        <button
          onClick={() => dispatch<TActionCount>({ type: 'COUNTER_PLUS' })}
        >
          +1
        </button>
        <button onClick={() => changeCount(10)}>+10</button>
        {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: 10 })}>+10</button> */}
      </div>

      {/* cash */}
      <div>
        Cash: <b>{cash}</b>
        <h4>Change cash</h4>
        <button
          onClick={() =>
            dispatch<TActionCash>({ type: 'CASH_GET', payload: 1000 })
          }
        >
          -1000
        </button>
        <button
          onClick={() =>
            dispatch<TActionCash>({ type: 'CASH_ADD', payload: 1000 })
          }
        >
          +1000
        </button>
      </div>

      {/* customers */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 15 }}>
          Customers: <b>{customers.length}</b>
        </div>

        <ul style={{ paddingLeft: 0, margin: 0 }}>
          {customers.length
            ? customers.map((customer, index) => {
                const { id, name } = customer;

                return (
                  <li key={index}>
                    <span>{`${id} - ${name}`}</span>
                    &nbsp;
                    <b
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(deleteCustomer({ id, name }))}
                    >
                      X
                    </b>
                  </li>
                );
              })
            : 'No data'}
        </ul>

        <button
          onClick={() =>
            // dispatch<TActionCustomers>({
            //   type: CUSTOMERS_ADD,
            //   payload: { id: randomId, name: `Customer Name ${randomId}` },
            // })

            dispatch(
              addCustomer({
                id: randomId,
                name: `Customer Name ${randomId}`,
              }),
            )
          }
        >
          Add customer
        </button>

        <button onClick={() => dispatch(deleteLastCustomer())}>
          Delete last
        </button>

        <button onClick={() => dispatch(deleteAllCustomers())}>
          Delete all
        </button>
      </div>
    </section>
  );
};

export default ReduxClassicExample;
