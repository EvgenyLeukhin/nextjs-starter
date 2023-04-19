// import { Provider } from 'react-redux';
// import { testStore } from '@/components/pages/test-redux-classic/store';
import { AlertProvider } from '@/components/ui';

const TestReduxToolkit = () => (
  // <Provider store={testStore}>
  <AlertProvider>
    {/* <PickUpPoints /> */}
    <h2>PickUpPoints</h2>
  </AlertProvider>
  // </Provider>
);

export default TestReduxToolkit;
