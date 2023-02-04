import { Container } from '../';
import { Logo, Navbar } from './parts';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
