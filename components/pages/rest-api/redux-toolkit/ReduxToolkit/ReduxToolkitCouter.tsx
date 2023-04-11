import { useActions } from '@/store/redux-toolkit/hooks/useActions';
import styles from './ReduxToolkitCouter.module.scss';
import { useTypedSelector } from '@/store/redux-toolkit/hooks/useTypedSelectors';

const ReduxToolkitCouter = () => {
  // redux selector (counter)
  const { counter } = useTypedSelector(state => state);

  // redux actions
  const { changeCounter, clear } = useActions();

  return (
    <section className={styles.ReduxToolkitCouter}>
      <h3>Reducer 2 (counter)</h3>

      <div style={{ display: 'flex', marginTop: 10, alignItems: 'center' }}>
        <h3>Counter: {counter}</h3>
        &nbsp;&nbsp;&nbsp;Redux Classic Example
        <div>
          <button onClick={() => changeCounter(-10)}>-10</button>
          <button onClick={() => changeCounter(-1)}>-1</button>
          <button onClick={() => clear()}>X</button>
          <button onClick={() => changeCounter(1)}>+1</button>
          <button onClick={() => changeCounter(10)}>+10</button>
        </div>
      </div>
    </section>
  );
};

export default ReduxToolkitCouter;
