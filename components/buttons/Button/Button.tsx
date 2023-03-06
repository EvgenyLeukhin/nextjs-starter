import { Statuses } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

type Props = {
  href?: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  status?: Statuses;
  disabled?: boolean;
  download?: boolean;
  outlined?: boolean;
  children: string | React.ReactNode;
  onClick?: (val: never) => void;
};

const Button = ({
  href = '',
  type = 'submit',
  status = Statuses.primary,
  disabled = false,
  download = false,
  outlined = false,
  children,
  onClick,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  if (href) {
    return (
      <a
        href={href}
        rel='nofollow'
        target='_black'
        download={download}
        className={cnb(
          styles.Button,
          outlined ? styles.ButtonOutlined : styles.ButtonSolid,
          status,
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cnb(
        styles.Button,
        outlined ? styles.ButtonOutlined : styles.ButtonSolid,
        status,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
