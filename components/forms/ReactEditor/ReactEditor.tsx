import styles from './ReactEditor.module.scss';

type TProps = {
  someProp?: string;
};

const ReactEditor = ({ someProp }: TProps) => {
  return (
    <section className={styles.ReactEditor}>
      <h2>ReactEditor TODO</h2>
    </section>
  );
};

export default ReactEditor;
