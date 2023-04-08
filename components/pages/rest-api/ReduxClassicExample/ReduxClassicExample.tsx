import { useSelector, useDispatch } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';
import { TActionCount } from '@/store/redux-classic/counter/counter.types';
import { TActionCash } from '@/store/redux-classic/cash/cash.types';

const ReduxClassicExample = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => {
    // console.log('state', state); // all state

    // @ts-ignore
    return state.counter;
  });

  // @ts-ignore
  const cashState = useSelector(state => state.cash);

  // можно создавать отдельные функции с параметрами для dispatch
  function changeCount(count: number) {
    dispatch<TActionCount>({ type: 'COUNTER_CHANGE', payload: count });
  }

  return (
    <section className={styles.ReduxClassicExample}>
      <ul>
        <li>
          Counter: <b>{counterState.counter}</b>
        </li>
        <li>
          Cash: <b>{cashState.cash}</b>
        </li>
      </ul>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <h4>Change count</h4>

          <button onClick={() => changeCount(-10)}>-10</button>
          {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: -10 })}>
        -10
      </button> */}
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
          {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: 10 })}>
        +10
      </button> */}
        </div>

        <div>
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
      </div>
    </section>
  );
};

export default ReduxClassicExample;
