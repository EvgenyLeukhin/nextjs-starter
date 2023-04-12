// store
import { useTypedSelector } from './store';
import { useActions } from './store/actions';
import { AppScreens } from './store/app/app.types';

// components
import { Container } from '@/components/layout';
import {
  CustomStatuses,
  Dashboard,
  EditDrugstore,
  EditMultiDrugstore,
  Login,
} from '@/components/pages/test/screens';

const PickUpPoints = () => {
  // state
  const {
    app: { screen },
  } = useTypedSelector(state => state);

  // actions
  const { setScreen } = useActions();

  return (
    <Container>
      <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Pick-up-points clone
      </h2>

      {/* LOGIN */}
      {screen === AppScreens.LOGIN && <Login setScreen={setScreen} />}

      {/* DASHBOARD */}
      {screen === AppScreens.DASHBOARD && <Dashboard setScreen={setScreen} />}

      {/* EDIT_DRUGSTORE */}
      {screen === AppScreens.EDIT_DRUGSTORE && (
        <EditDrugstore setScreen={setScreen} />
      )}

      {/* EDIT_MULTI_DRUGSTORE */}
      {screen === AppScreens.EDIT_MULTI_DRUGSTORE && (
        <EditMultiDrugstore setScreen={setScreen} />
      )}

      {/* CUSTOM_STATUSES */}
      {screen === AppScreens.CUSTOM_STATUSES && (
        <CustomStatuses setScreen={setScreen} />
      )}

      <h3>TODO:</h3>
      <ul>
        <li>Login / Logout</li>
        <li>Save token</li>
        <li>Redirects</li>
        <li>Protected routes</li>
        <li>No legacy createStore</li>
        <li>Alert message</li>
        <li>Dashboard</li>
      </ul>
    </Container>
  );
};

export default PickUpPoints;
