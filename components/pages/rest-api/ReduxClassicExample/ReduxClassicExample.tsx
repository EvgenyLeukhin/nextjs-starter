import { useSelector, useDispatch } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';

const ReduxClassicExample = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => {
    // console.log('state', state); // all state

    // @ts-ignore
    return state.counter;
  });

  // можно создавать отдельные функции с параметрами для dispatch
  function changeCount(count: number) {
    dispatch({ type: 'COUNTER_CHANGE', payload: count });
  }

  return (
    <section className={styles.ReduxClassicExample}>
      <h3>Counter: {counterState.counter}</h3>

      <button onClick={() => changeCount(-10)}>-10</button>
      {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: -10 })}>
        -10
      </button> */}
      <button onClick={() => dispatch({ type: 'COUNTER_MINUS' })}>-1</button>
      <button onClick={() => dispatch({ type: 'COUNTER_RESET' })}>X</button>
      <button onClick={() => dispatch({ type: 'COUNTER_PLUS' })}>+1</button>
      <button onClick={() => changeCount(10)}>+10</button>
      {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: 10 })}>
        +10
      </button> */}
    </section>
  );
};

export default ReduxClassicExample;
