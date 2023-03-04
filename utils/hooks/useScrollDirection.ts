import { useEffect, useState } from 'react';

type TReturnType = string | null;

const useScrollDirection = (): TReturnType => {
  const [scrollDirection, setScrollDirection] = useState<TReturnType>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;

      // add new state if scroll on the top
      if (lastScrollY === 0) {
        setScrollDirection('up-zero');
      }
    };

    window.addEventListener('scroll', updateScrollDirection); // add event listener

    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
