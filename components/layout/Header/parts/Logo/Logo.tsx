import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Logo.module.scss';

const Logo = () => {
  const router = useRouter();
  const { pathname } = router;
  const isHomePage = pathname === '/';

  return (
    <Link
      href='/'
      className={styles.Logo}
      style={{ pointerEvents: isHomePage ? 'none' : 'auto' }}
    >
      <b className={styles.Logo__link}>NEXTJS STARTER</b>
    </Link>
  );
};

export default Logo;
