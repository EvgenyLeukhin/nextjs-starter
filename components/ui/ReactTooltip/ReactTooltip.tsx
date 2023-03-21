import Tooltip from 'rc-tooltip';
import { JSXElementConstructor, ReactElement } from 'react';

type TProps = {
  placement?: string;
  tooltipText: string;
  children?: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
};

const ReactTooltip = ({ placement = 'top', tooltipText, children }: TProps) => {
  return (
    <Tooltip
      trigger={['hover']}
      placement={placement}
      overlay={<div>{tooltipText}</div>}
    >
      {children}
    </Tooltip>
  );
};

export default ReactTooltip;
