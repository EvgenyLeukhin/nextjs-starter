import {Container, NavBar } from '../';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <b>LOGO</b>

        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
