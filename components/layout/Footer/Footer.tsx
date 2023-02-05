import socialList from '@/consts/socialList';
import Container from '../Container/Container';
import { TSocial } from '@/types/common';
import styles from './Footer.module.scss';

const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.Footer}>
      <Container>
        <span className={styles.Footer__copyright}>&copy;{date.getFullYear()}</span>

        <ul className={styles.Footer__socials}>
          {socialList.map((social: TSocial, index) => {
            const { title, link } = social;

            return (
              <li key={index + link}>
                <a href={link} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
