import classNames from 'classnames/bind';
import { Statuses } from '@/types/common';
import styles from './ButtonLink.module.scss';

type Props = {
  href: string;
  type?: Statuses;
  download?: boolean;
  children: React.ReactNode;
};

const ButtonLink = ({
  href,
  download = false,
  type = Statuses.primary,
  children,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  return (
    <a
      href={href}
      type={type}
      rel='nofollow'
      target='_black'
      download={download}
      className={cnb(styles.ButtonLink, type)}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
