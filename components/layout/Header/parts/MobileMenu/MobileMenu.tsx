import { useState } from 'react';
import { Burger, GitHub } from '@/components/icons';
import Navbar from '../Navbar/Navbar';
import classNames from 'classnames';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const onToggleMenu = () => {
    setOpen(!isOpen);
  };
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.MobileMenu,
        isOpen && 'animate__animated animate__fadeIn',
      )}
    >
      <Burger isOpen={isOpen} onClick={onToggleMenu} />

      {isOpen && (
        <div className={styles.MobileMenu__menu}>
          <a
            className={styles.MobileMenu__github}
            href='https://github.com/EvgenyLeukhin/nextjs-starter'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub fill='white' />
          </a>

          <Navbar onLinkClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
