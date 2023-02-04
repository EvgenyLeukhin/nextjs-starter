import Link from 'next/link';
import navLinks from '@/consts/navLinks';
import { TNavLink } from '@/types/common';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      {navLinks.map((link: TNavLink, index) => {
        const { title, href } = link;

        return (
          <Link className={styles.Navbar__link} href={href} key={href + index}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
