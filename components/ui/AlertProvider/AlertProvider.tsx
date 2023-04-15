import { positions, Provider, AlertTemplateProps } from 'react-alert';

type TProps = {
  children?: React.ReactNode;
};

const AlertTemplate = ({ message }: AlertTemplateProps) => {
  return <div>{message}</div>;
};

const AlertProvider = ({ children }: TProps) => {
  return (
    <Provider
      template={AlertTemplate}
      position={positions.TOP_CENTER}
      timeout={4000}
      containerStyle={{ zIndex: 10000 }}
    >
      {children}
    </Provider>
  );
};

export default AlertProvider;
