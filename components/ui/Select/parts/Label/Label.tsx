import styles from './Label.module.scss';

type Props = {
  id?: string;
  label?: string;
};

const Label = ({ id, label }: Props) => {
  return (
    <label htmlFor={id} className={styles.Label}>
      {label}
    </label>
  );
};

export default Label;
