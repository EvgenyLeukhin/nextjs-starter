import { Container } from '@/components/layout';

import { useTypedSelector } from '@/store-test';
import {
  CustomStatuses,
  Dashboard,
  EditDrugstore,
  EditMultiDrugstore,
  Login,
} from '@/components/pages/test';
import { useActions } from '@/store-test/actions';
import { AppScreens } from '@/store-test/app/app.types';

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
    </Container>
  );
};

export default PickUpPoints;
