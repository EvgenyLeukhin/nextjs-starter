import styles from './ReactDatepicker.module.scss';

type TProps = {
  someProp?: string;
};

const ReactDatepicker = ({ someProp }: TProps) => {
  return (
    <section className={styles.ReactDatepicker}>
      <h2>ReactDatepicker TODO</h2>
    </section>
  );
};

export default ReactDatepicker;
