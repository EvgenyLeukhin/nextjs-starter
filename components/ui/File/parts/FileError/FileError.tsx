import styles from './FileError.module.scss';

type TProps = {
  error?: string;
};

const FileError = ({ error }: TProps) => {
  return <span className={styles.FileError}>{error}</span>;
};

export default FileError;
