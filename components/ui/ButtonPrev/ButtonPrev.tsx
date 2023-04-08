import classNames from 'classnames/bind';
import { ArrowRight } from '@/components/icons';
import { textColors } from '@/consts/colors';
import styles from '../ButtonNext/ButtonNext.module.scss';

type Props = {
  className?: string;
  onClick?: () => void;
};

const ButtonPrev = ({ className, onClick }: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  return (
    <button className={cnb(styles.ButtonNext, className)} onClick={onClick}>
      <ArrowRight
        color={textColors.primary}
        style={{ transform: 'rotate(180deg)' }}
      />
    </button>
  );
};

export default ButtonPrev;
