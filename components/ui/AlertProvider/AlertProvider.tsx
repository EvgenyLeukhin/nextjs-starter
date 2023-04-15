import { positions, Provider, AlertTemplateProps } from 'react-alert';
import classNames from 'classnames';
import styles from './AlertTemplate.module.scss';

type TProps = {
  children?: React.ReactNode;
};

// AlertTemplate
const AlertTemplate = ({ message, options }: AlertTemplateProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.AlertTemplate,
        options.type === 'info' && styles.info,
        options.type === 'error' && styles.error,
        options.type === 'success' && styles.success,
      )}
    >
      <span>{message}</span>
    </div>
  );
};

// AlertProvider
const AlertProvider = ({ children }: TProps) => (
  <Provider
    timeout={4000}
    template={AlertTemplate}
    position={positions.TOP_CENTER}
    containerStyle={{ zIndex: 10000 }}
  >
    {children}
  </Provider>
);

export default AlertProvider;
