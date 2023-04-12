import { Provider } from 'react-redux';
import { testStore } from '@/store-test';
import { TestIndex } from '@/components/pages/test';

const PickUpPoints = () => (
  <Provider store={testStore}>
    <TestIndex />
  </Provider>
);

export default PickUpPoints;
