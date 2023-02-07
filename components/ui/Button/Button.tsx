import { Statuses } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

type Props = {
  href?: string;
  type?: Statuses;
  disabled?: boolean;
  download?: boolean;
  outlined?: boolean;
  children: string | React.ReactNode;
};

const Button = ({
  href = '',
  type = Statuses.primary,
  disabled = false,
  download = false,
  outlined = false,
  children,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  if (href) {
    return (
      <a
        href={href}
        type={type}
        rel='nofollow'
        target='_black'
        download={download}
        className={cnb(
          styles.Button,
          outlined ? styles.ButtonOutlined : styles.ButtonSolid,
          type,
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cnb(
        styles.Button,
        outlined ? styles.ButtonOutlined : styles.ButtonSolid,
        type,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
