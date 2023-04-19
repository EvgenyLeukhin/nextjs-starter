import { useActions, useAppSelector } from '@/store/redux-toolkit2';
import styles from './ReduxToolkit2.module.scss';

const ReduxToolkit2 = () => {
  // get state from store by useAppSelector
  const {
    counterStore: { counter },
    usersStore: { users },
  } = useAppSelector(state => state);

  // get actions
  const { change } = useActions();

  return (
    <section className={styles.ReduxToolkit2}>
      <h2>
        <mark>ReduxToolkit 2</mark>
      </h2>

      {/* count */}
      <div>
        <b>count</b>: {counter}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => change(10)}>Change count</button>
      </div>

      {/* users */}
      <div>
        <b>users</b>: {users.length}
      </div>
    </section>
  );
};

export default ReduxToolkit2;
