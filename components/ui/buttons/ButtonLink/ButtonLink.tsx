import { Statuses } from '@/types/common';
import classNames from 'classnames/bind';
import btnStyles from '../ButtonCommonStyles.module.scss';
import styles from './ButtonLink.module.scss';

type Props = {
  href: string;
  type?: Statuses;
  download?: boolean;
  children: string;
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
      className={cnb(btnStyles.ButtonStyles, styles.ButtonLink, type)}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
