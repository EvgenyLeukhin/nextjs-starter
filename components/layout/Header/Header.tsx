import { Container } from '../';
import { GitHub } from '@/components/icons';
import { DeviceList } from '@/types/common';
import { Logo, Navbar, MobileMenu } from './parts';
import useWindowSize from '@/utils/hooks/useWindowResize';
import useScrollDirection from '@/utils/hooks/useScrollDirection';
import { useRef, useState } from 'react';
import styles from './Header.module.scss';
import useClickOutside from '@/utils/hooks/useClickOutside';

const Header = () => {
  const HEADER_HEIGHT = 45;
  const screenType = useWindowSize();
  const scrollDirection = useScrollDirection();
  const isMobile = screenType === DeviceList.MOBILE;
  const isScrollDown = scrollDirection === 'down';
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  useClickOutside(headerRef, () => {
    setMobileMenu(false);
  });

  return (
    <header
      ref={headerRef}
      className={styles.Header}
      style={{ top: isScrollDown && !isMobileMenuOpen ? -HEADER_HEIGHT : 0 }}
    >
      <Container>
        <Logo />

        {/* desktop menu */}
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

        {/* mobile menu */}
        {isMobile && (
          <MobileMenu isOpen={isMobileMenuOpen} setMobileMenu={setMobileMenu} />
        )}
      </Container>
    </header>
  );
};

export default Header;
