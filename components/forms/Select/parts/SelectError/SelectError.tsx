import styles from './SelectError.module.scss';

type TProps = {
  error?: string | false;
};

const SelectError = ({ error }: TProps) => {
  return <span className={styles.SelectError}>{error}</span>;
};

export default SelectError;
