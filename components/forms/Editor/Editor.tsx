import styles from './Editor.module.scss';

type TProps = {
  someProp?: string;
};

const Editor = ({ someProp }: TProps) => {
  return (
    <section className={styles.Editor}>
      <h2>Editor TODO</h2>
    </section>
  );
};

export default Editor;
