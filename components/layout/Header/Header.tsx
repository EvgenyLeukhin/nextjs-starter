import { Container } from '../';
import { Logo, Navbar } from './parts';
import styles from './Header.module.scss';
import { GitHub } from '@/components/icons';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <Logo />
        <Navbar />

        <a
          className={styles.Header__github}
          href='https://github.com/EvgenyLeukhin/nextjs-starter'
          target='_blank'
          rel='noreferrer'
        >
          <GitHub fill='white' />
        </a>
      </Container>
    </header>
  );
};

export default Header;
