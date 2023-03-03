import styles from './Accordion.module.scss';

type TProps = {
  someProp?: string;
};

const Accordion = ({ someProp }: TProps) => {
  return (
    <section className={styles.Accordion}>
      <h2>Accordion TODO</h2>
    </section>
  );
};

export default Accordion;
