// store
import { useAlert } from 'react-alert';
import { useTypedSelector } from './store';
import { useActions } from './store/actions';
import { AppScreens, TAlertMessage } from './store/app/app.types';

// components
import { Container } from '@/components/layout';
import {
  CustomStatuses,
  Dashboard,
  EditDrugstore,
  EditMultiDrugstore,
  Login,
} from '@/components/pages/test-redux-classic/screens';
import { useEffect } from 'react';

type TAlertProps = {
  alertMessage: TAlertMessage;
};

// alert component
const AlertMessage = ({ alertMessage }: TAlertProps) => {
  const alert = useAlert();
  const { type, message } = alertMessage;

  useEffect(() => {
    if (message) {
      type === 'error' && alert.error(message);
      type === 'success' && alert.success(message);
      type === 'info' && alert.info(message);
    }
  }, [message]);

  return null;
};

const PickUpPoints = () => {
  // state
  const {
    app: { screen, alertMessage },
  } = useTypedSelector(state => state);

  // actions
  const { setScreen } = useActions();

  return (
    <Container>
      <AlertMessage alertMessage={alertMessage} />

      <h1
        className='bg-success'
        style={{
          color: 'white',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Pick-up-points clone
      </h1>

      {/* LOGIN screen */}
      {screen === AppScreens.LOGIN && <Login setScreen={setScreen} />}

      {/* DASHBOARD screen */}
      {screen === AppScreens.DASHBOARD && <Dashboard setScreen={setScreen} />}

      {/* EDIT_DRUGSTORE screen */}
      {screen === AppScreens.EDIT_DRUGSTORE && (
        <EditDrugstore setScreen={setScreen} />
      )}

      {/* EDIT_MULTI_DRUGSTORE screen */}
      {screen === AppScreens.EDIT_MULTI_DRUGSTORE && (
        <EditMultiDrugstore setScreen={setScreen} />
      )}

      {/* CUSTOM_STATUSES screen */}
      {screen === AppScreens.CUSTOM_STATUSES && (
        <CustomStatuses setScreen={setScreen} />
      )}

      <h3>TODO:</h3>
      <ul>
        <li>Login Form +++</li>
        <li>Dashboard +++</li>
        <li>Save token +++</li>
        <li>Edit form ---</li>
        <li>Alert message +++</li>
        <li>Redirects +++</li>
        <li>Protected routes +++</li>
        <li>
          Login / Logout - написать на redux-classic, а потом добавить на
          toolkit
        </li>
        <li>Переписать запросы в async-await, try-catch +++</li>
      </ul>
    </Container>
  );
};

export default PickUpPoints;
