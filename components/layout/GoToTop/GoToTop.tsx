import { ArrowRight } from '@/components/icons';
import useScrollDirection from '@/utils/hooks/useScrollDirection';
import { useEffect, useState } from 'react';
import styles from './GoToTop.module.scss';

const GoToTop = () => {
  // positions
  const SHOW_POSITION = 30;
  const HIDE_POSITION = -100;

  // scroll hook
  const scrollDirection = useScrollDirection();

  // button state
  const [bottomPosition, setBottomPosition] = useState(HIDE_POSITION);

  // go to top click
  const onGoToTopClick = () => {
    setBottomPosition(HIDE_POSITION);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setBottomPosition(scrollDirection === 'up' ? SHOW_POSITION : HIDE_POSITION);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDirection]);

  return (
    <div
      onClick={onGoToTopClick}
      className={styles.GoToTop}
      style={{ bottom: bottomPosition }}
    >
      <ArrowRight />
    </div>
  );
};

export default GoToTop;
