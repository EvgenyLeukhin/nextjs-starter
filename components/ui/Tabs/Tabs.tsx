import styles from './Tabs.module.scss';

type TProps = {
  someProp?: string;
};

const Tabs = ({ someProp }: TProps) => {
  return (
    <section className={styles.Tabs}>
      <h2>Tabs TODO</h2>
    </section>
  );
};

export default Tabs;
