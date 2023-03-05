import { Burger, GitHub } from '@/components/icons';
import Navbar from '../Navbar/Navbar';
import classNames from 'classnames';
import styles from './MobileMenu.module.scss';

type TProps = {
  isOpen: boolean;
  setMobileMenu: (val: boolean) => void;
};

const MobileMenu = ({ isOpen, setMobileMenu }: TProps) => {
  const cnb = classNames.bind(styles);

  // toggle menu
  const onToggleMenu = () => {
    setMobileMenu(!isOpen);
  };

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

          {/* nav link click --> menu close */}
          <Navbar onLinkClick={() => setMobileMenu(false)} />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
