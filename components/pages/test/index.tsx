// store
import { useTypedSelector } from './store-redux-classic';
import { useActions } from './store-redux-classic/actions';
import { AppScreens } from './store-redux-classic/app/app.types';

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
        <li>Login Form</li>
        <li>Dashboard</li>
        <li>Save token</li>
        <li>Edit form</li>
        <li>Alert message</li>
        <li>Redirects</li>
        <li>Protected routes</li>
        <li>No legacy createStore</li>
        <li>
          Login / Logout - написать на redux-classic, а потом добавить на
          toolkit
        </li>
      </ul>
    </Container>
  );
};

export default PickUpPoints;
