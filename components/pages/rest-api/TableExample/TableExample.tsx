import { useEffect } from 'react';
import styles from './TableExample.module.scss';

const TableExample = () => {
  useEffect(() => {
    alert(123);
  }, []);

  return (
    <section className={styles.TableExample}>
      <h2>TableExample</h2>
    </section>
  );
};

export default TableExample;
