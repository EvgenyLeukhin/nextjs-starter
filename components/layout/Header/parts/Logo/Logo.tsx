import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href='/' className={styles.Logo}>
      <b className={styles.Logo__link}>
        NEXTJS STARTER
      </b>
    </Link>
  );
};

export default Logo;
