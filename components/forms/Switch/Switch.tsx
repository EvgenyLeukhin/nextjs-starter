import styles from './Switch.module.scss';

type TProps = {
  someProp?: string;
};

const Switch = ({ someProp }: TProps) => {
  return (
    <section className={styles.Switch}>
      <h2>Switch TODO</h2>
    </section>
  );
};

export default Switch;
