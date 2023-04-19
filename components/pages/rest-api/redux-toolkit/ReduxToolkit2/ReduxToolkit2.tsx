import { RootState } from '@/store/redux-toolkit2/store';
import styles from './ReduxToolkit2.module.scss';
import { useSelector } from 'react-redux';

const ReduxToolkit2 = () => {
  const { counter } = useSelector((state: RootState) => state.users);

  return (
    <section className={styles.ReduxToolkit2}>
      <h2>
        <mark>ReduxToolkit 2</mark>
      </h2>

      <div>
        Counter: {counter}
        <div>{/* <button onClick={() => changeCounter(1)}>+1</button> */}</div>
      </div>
    </section>
  );
};

export default ReduxToolkit2;
