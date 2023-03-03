import classNames from 'classnames/bind';
import { ArrowRight } from '@/components/icons';
import { textColors } from '@/consts/colors';
import styles from './ButtonNext.module.scss';

type Props = {
  className?: string;
};

const ButtonNext = ({ className }: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  return (
    <button className={cnb(styles.ButtonNext, className)}>
      <ArrowRight color={textColors.primary} />
    </button>
  );
};

export default ButtonNext;
