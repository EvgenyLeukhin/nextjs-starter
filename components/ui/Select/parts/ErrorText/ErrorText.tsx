import styles from './ErrorText.module.scss';

type Props = {
  error?: string;
};

const ErrorText = ({ error }: Props) => {
  return <span className={styles.ErrorText}>{error}</span>;
};

export default ErrorText;
