import { Container } from '@/components/layout';
import {
  FormNative,
  FormCustom,
  FormSelects,
  FormReact,
} from '@/components/pages/forms';

const UiKitPage = () => {
  return (
    <Container>
      <h1 className='text-primary'>Forms</h1>
      <FormNative />
      <hr />
      <FormCustom />
      <hr />
      <FormSelects />
      <hr />
      <FormReact />
      <hr />
      <h3>TODO:</h3>
      <ul>
        <li>From/to datepicker</li>
        <li>
          <code>react-select</code> Default options
        </li>
        <li>
          <code>react-table</code> example
        </li>
      </ul>
    </Container>
  );
};

export default UiKitPage;
