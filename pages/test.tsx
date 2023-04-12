import { Provider } from 'react-redux';
import { testStore } from '@/components/pages/test/store';
import PickUpPoints from '@/components/pages/test';

const Test = () => (
  <Provider store={testStore}>
    <PickUpPoints />
  </Provider>
);

export default Test;
