import { Provider } from 'react-redux';
import { testStore } from '@/components/pages/test-redux-classic/store';
import PickUpPoints from '@/components/pages/test-redux-classic';
import { AlertProvider } from '@/components/ui';

const TestReduxClassic = () => (
  <Provider store={testStore}>
    <AlertProvider>
      <PickUpPoints />
    </AlertProvider>
  </Provider>
);

export default TestReduxClassic;
