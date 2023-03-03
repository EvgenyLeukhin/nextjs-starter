import styles from './Counter.module.scss';

type TProps = {
  someProp?: string;
};

const Counter = ({ someProp }: TProps) => {
  return (
    <section className={styles.Counter}>
      <h2>Counter TODO</h2>
    </section>
  );
};

export default Counter;
