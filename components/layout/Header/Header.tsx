import { Container } from '../';
import { GitHub } from '@/components/icons';
import { DeviceList } from '@/types/common';
import { Logo, Navbar, MobileMenu } from './parts';
import useWindowSize from '@/utils/hooks/useWindowResize';
import styles from './Header.module.scss';

const Header = () => {
  const screenType = useWindowSize();
  const isMobile = screenType === DeviceList.MOBILE;

  return (
    <header className={styles.Header}>
      <Container>
        <Logo />

        {!isMobile && (
          <>
            <Navbar />
            <a
              className={styles.Header__github}
              href='https://github.com/EvgenyLeukhin/nextjs-starter'
              target='_blank'
              rel='noreferrer'
            >
              <GitHub fill='white' />
            </a>
          </>
        )}

        {isMobile && <MobileMenu />}
      </Container>
    </header>
  );
};

export default Header;
