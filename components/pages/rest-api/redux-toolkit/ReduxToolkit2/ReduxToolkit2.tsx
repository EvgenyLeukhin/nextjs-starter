import { useActions, useAppSelector } from '@/store/redux-toolkit2';
import styles from './ReduxToolkit2.module.scss';

const ReduxToolkit2 = () => {
  // get state from store by useAppSelector
  const {
    counterStore: { counter },
    usersStore: { users },
  } = useAppSelector(state => state);

  // get actions
  const { changeCounter, clearCounter, dicrementCounter, incrementCounter } =
    useActions();

  return (
    <section className={styles.ReduxToolkit2}>
      <h2>
        <mark>ReduxToolkit 2</mark>
      </h2>

      {/* count */}
      <div>
        <b>count</b>: {counter}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => changeCounter(-100)}>-100</button>
        <button onClick={() => changeCounter(-10)}>-10</button>
        <button onClick={() => dicrementCounter()}>-1</button>
        <button onClick={() => clearCounter()}>X</button>
        <button onClick={() => incrementCounter()}>+1</button>
        <button onClick={() => changeCounter(10)}>+10</button>
        <button onClick={() => changeCounter(100)}>+100</button>
      </div>

      {/* users */}
      <div>
        <b>users</b>: {users.length}
      </div>
    </section>
  );
};

export default ReduxToolkit2;
