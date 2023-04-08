import { useSelector, useDispatch } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';
import {
  TActionCount,
  TCountState,
} from '@/store/redux-classic/counter/counter.types';
import { TActionCash, TCashState } from '@/store/redux-classic/cash/cash.types';

const ReduxClassicExample = () => {
  const dispatch = useDispatch();
  const counterState = useSelector<TCountState>(
    (state: TCountState) => state.counter,
  );
  const cashState = useSelector<TCashState>(state => state.cash);

  // можно создавать отдельные функции с параметрами для dispatch
  function changeCount(count: number) {
    dispatch<TActionCount>({ type: 'COUNTER_CHANGE', payload: count });
  }

  return (
    <section className={styles.ReduxClassicExample}>
      {/* counter */}
      <div>
        {/* @ts-ignore */}
        Counter: <b>{counterState.counter}</b>
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
        {/* @ts-ignore */}
        Cash: <b>{cashState.cash}</b>
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
    </section>
  );
};

export default ReduxClassicExample;
