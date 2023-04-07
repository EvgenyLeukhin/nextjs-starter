import { useActions } from '@/store-toolkit/hooks/useActions';
import styles from './ReduxToolkitCouter.module.scss';
import { useTypedSelector } from '@/store-toolkit/hooks/useTypedSelectors';

const ReduxToolkitCouter = () => {
  // redux selector (counter)
  const { counter } = useTypedSelector(state => state);

  // redux actions
  const { changeCounter, clear } = useActions();

  return (
    <section className={styles.ReduxToolkitCouter}>
      <h3>Counter: {counter}</h3>

      <div>
        <button onClick={() => changeCounter(-10)}>-10</button>
        <button onClick={() => changeCounter(-1)}>-1</button>
        <button onClick={() => clear()}>X</button>
        <button onClick={() => changeCounter(1)}>+1</button>
        <button onClick={() => changeCounter(10)}>+10</button>
      </div>
    </section>
  );
};

export default ReduxToolkitCouter;
