import styles from './Error.module.scss';

type Props = {
  error?: string;
};

const Error = ({ error }: Props) => {
  return <span className={styles.Error}>{error}</span>;
};

export default Error;
