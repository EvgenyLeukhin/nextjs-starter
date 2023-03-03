import styles from './Tooltip.module.scss';

type TProps = {
  someProp?: string;
};

const Tooltip = ({ someProp }: TProps) => {
  return (
    <section className={styles.Tooltip}>
      <h2>Tooltip</h2>
    </section>
  );
};

export default Tooltip;
