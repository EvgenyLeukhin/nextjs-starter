import { Provider } from 'react-redux';
import { testStore } from '@/components/pages/test/store-redux-classic';
import PickUpPoints from '@/components/pages/test';

const Test = () => (
  <Provider store={testStore}>
    <PickUpPoints />
  </Provider>
);

export default Test;
