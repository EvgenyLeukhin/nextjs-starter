import { Statuses } from '@/types/common';
import classNames from 'classnames/bind';
import btnStyles from '../ButtonCommonStyles.module.scss';
import styles from './ButtonSimple.module.scss';

type Props = {
  type?: Statuses | 'without';
  download?: boolean;
  disabled?: boolean;
  children: string;
};

const ButtonSimple = ({
  disabled = false,
  type = 'without',
  children,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  return (
    <button
      className={cnb(btnStyles.ButtonStyles, styles.ButtonSimple, type)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSimple;
