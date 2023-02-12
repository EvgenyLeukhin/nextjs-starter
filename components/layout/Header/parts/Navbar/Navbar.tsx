import Link from 'next/link';
import navLinks from '@/consts/navLinks';
import { TNavLink } from '@/types/common';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

type Props = {
  onLinkClick?: () => void;
};

const Navbar = ({ onLinkClick }: Props) => {
  const cnb = classNames.bind(styles);
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className={styles.Navbar}>
      {navLinks.map((link: TNavLink, index) => {
        const { title, href } = link;
        const isCurrentPath = pathname === href;

        return (
          <Link
            onClick={onLinkClick}
            href={href}
            key={href + index}
            className={cnb(
              styles.Navbar__link,
              isCurrentPath ? styles.Navbar__activeLink : null,
            )}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
