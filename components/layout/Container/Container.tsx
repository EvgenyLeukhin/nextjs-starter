import styles from './Container.module.scss';

type Props = {
  children: any;
}

const Container = ({ children }: Props) => {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  );
};

export default Container;
