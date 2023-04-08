import { useSelector, useDispatch } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';
import {
  TActionCount,
  TCountState,
} from '@/store/redux-classic/counter/counter.types';
import { TActionCash } from '@/store/redux-classic/cash/cash.types';
import { TRootState } from '@/store/redux-classic';

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
      <div>
        Customers: <b>{customers.length}</b>
      </div>
    </section>
  );
};

export default ReduxClassicExample;
