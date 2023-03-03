import styles from './FileLabel.module.scss';

type TProps = {
  id: string;
  label?: string;
};

const FileLabel = ({ id, label }: TProps) => {
  return (
    <label htmlFor={id} className={styles.FileLabel}>
      {label}
    </label>
  );
};

export default FileLabel;
