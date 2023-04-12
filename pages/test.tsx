import { Container } from '@/components/layout';
import {
  CustomStatuses,
  Dashboard,
  EditDrugstore,
  EditMultiDrugstore,
  Login,
} from '@/components/pages/test';
import { PickUpScreens } from '@/types/test/common';
import Head from 'next/head';
import { useState } from 'react';
// import { Provider } from 'react-redux';

const PickUpPoints = () => {
  const [screen, setScreen] = useState<PickUpScreens>(PickUpScreens.LOGIN);

  return (
    <>
      <Head>
        <title>Login | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <Container>
        <h2>Pick-up-points clone</h2>

        {screen === PickUpScreens.LOGIN && <Login setScreen={setScreen} />}

        {screen === PickUpScreens.DASHBOARD && (
          <Dashboard setScreen={setScreen} />
        )}

        {screen === PickUpScreens.EDIT_DRUGSTORE && (
          <EditDrugstore setScreen={setScreen} />
        )}

        {screen === PickUpScreens.EDIT_MULTI_DRUGSTORE && (
          <EditMultiDrugstore setScreen={setScreen} />
        )}

        {screen === PickUpScreens.CUSTOM_STATUSES && (
          <CustomStatuses setScreen={setScreen} />
        )}
      </Container>
    </>
  );
};

export default PickUpPoints;
