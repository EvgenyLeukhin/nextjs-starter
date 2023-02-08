import { CSSProperties } from 'react';
import containerStyles from './Container.module.scss';

type Props = {
  children: React.ReactNode;
  styles?: CSSProperties;
};

const Container = ({ children, styles }: Props) => {
  return (
    <div style={styles} className={containerStyles.Container}>
      {children}
    </div>
  );
};

export default Container;
