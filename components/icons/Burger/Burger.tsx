import classNames from 'classnames/bind';
import styles from './Burger.module.scss';

type Props = {
  isOpen: boolean;
  onClick?: () => void;
};

const Burger = ({ isOpen, onClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      onClick={onClick}
      className={cnb(styles.Burger, isOpen && styles.Burger__isOpen)}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;
