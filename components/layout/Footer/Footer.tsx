import Container from '../Container/Container';
import styles from './Footer.module.scss';
import { Contacts, Sharing } from './parts';

const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.Footer}>
      <Container>
        <span className={styles.Footer__copyright}>
          &copy;{date.getFullYear()}
        </span>

        <Contacts />

        <Sharing />
      </Container>
    </footer>
  );
};

export default Footer;
