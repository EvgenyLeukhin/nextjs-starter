import { Tooltip as ReactTooltip, VariantType } from 'react-tooltip';
import classNames from 'classnames/bind';
import styles from './Tooltip.module.scss';

type TProps = {
  variant?: VariantType;
  text: string;
  children: React.ReactNode;
};

const Tooltip = ({ text, variant = 'info', children }: TProps) => {
  const cnb = classNames.bind(styles);

  // generate random classname
  const randomNumber = Math.floor(Math.random() * 100000);
  const randomClassName = `tooltip-random-classname-${randomNumber}`;

  return (
    <>
      <span
        className={cnb(styles.Tooltip, randomClassName)}
        data-tooltip-content={text}
      >
        {children}
      </span>

      <ReactTooltip anchorSelect={`.${randomClassName}`} variant={variant} />
    </>
  );
};

export default Tooltip;
