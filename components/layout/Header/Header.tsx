import { Container } from '../';
import { GitHub } from '@/components/icons';
import { DeviceList } from '@/types/common';
import { Logo, Navbar, MobileMenu } from './parts';
import useWindowSize from '@/utils/hooks/useWindowResize';
import useScrollDirection from '@/utils/hooks/useScrollDirection';
import styles from './Header.module.scss';

const Header = () => {
  const screenType = useWindowSize();
  const scrollDirection = useScrollDirection();
  const isMobile = screenType === DeviceList.MOBILE;
  const isScrollUp = scrollDirection === 'up';

  return (
    <header className={styles.Header} style={{ top: isScrollUp ? 0 : -45 }}>
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
