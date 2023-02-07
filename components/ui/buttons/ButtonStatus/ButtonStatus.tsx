import { Statuses } from '@/types/common';
import classNames from 'classnames/bind';
import btnStyles from '../ButtonCommonStyles.module.scss';
import styles from './ButtonStatus.module.scss';

type Props = {
  type?: Statuses;
  disabled?: boolean;
  children: string;
};

const ButtonStatus = ({
  type = Statuses.primary,
  disabled = false,
  children,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);
  return (
    <button
      className={cnb(btnStyles.ButtonStyles, styles.ButtonStatus, type)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonStatus;
