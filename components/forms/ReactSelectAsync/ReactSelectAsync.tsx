import styles from './ReactSelectAsync.module.scss';

type TProps = {
  someProp?: string;
};

const ReactSelectAsync = ({ someProp }: TProps) => {
  return (
    <section className={styles.ReactSelectAsync}>
      <h2>ReactSelectAsync TODO</h2>
    </section>
  );
};

export default ReactSelectAsync;
