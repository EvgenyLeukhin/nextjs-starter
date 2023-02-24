import styles from './Label.module.scss';

type Props = {
  label?: string;
};

const Label = ({ label }: Props) => {
  return <label className={styles.Label}>{label}</label>;
};

export default Label;
