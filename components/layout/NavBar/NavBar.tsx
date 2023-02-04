import navLinks from '@/consts/navLinks';
import { TNavLink } from '@/types/common';

const NavBar = () => {
  return (
    <nav>
      {navLinks.map((link: TNavLink) => {
        const { title, href } = link;

        return (
          <span key={href}>{title}</span>
        );
      })}
    </nav>
  );
};

export default NavBar;
