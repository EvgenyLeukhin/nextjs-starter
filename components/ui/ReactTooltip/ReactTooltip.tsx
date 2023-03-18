import { Tooltip, VariantType } from 'react-tooltip';
import classNames from 'classnames/bind';
import styles from './ReactTooltip.module.scss';

type TProps = {
  variant?: VariantType;
  text: string;
  anchor: string;
  children: React.ReactNode;
};

const ReactTooltip = ({ text, variant = 'info', anchor, children }: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <>
      <span data-tooltip-content={text} className={cnb(styles.Tooltip, anchor)}>
        {children}
      </span>

      <Tooltip anchorSelect={`.${anchor}`} variant={variant} />
    </>
  );
};

export default ReactTooltip;
