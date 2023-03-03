import styles from './GoToTop.module.scss';

type TProps = {
  someProp?: string;
};

const GoToTop = ({ someProp }: TProps) => {
  return (
    <section className={styles.GoToTop}>
      <h2>GoToTop</h2>
    </section>
  );
};

export default GoToTop;
