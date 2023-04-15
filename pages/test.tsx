import { Provider } from 'react-redux';
import { testStore } from '@/components/pages/test/store-redux-classic';
import PickUpPoints from '@/components/pages/test';
import { AlertProvider } from '@/components/ui';

const Test = () => (
  <Provider store={testStore}>
    <AlertProvider>
      <PickUpPoints />
    </AlertProvider>
  </Provider>
);

export default Test;
