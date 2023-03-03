import styles from './Range.module.scss';

type TProps = {
  someProp?: string;
};

const Range = ({ someProp }: TProps) => {
  return (
    <section className={styles.Range}>
      <h2>Range</h2>
    </section>
  );
};

export default Range;
