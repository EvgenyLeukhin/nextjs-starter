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
        <li>Custom number counter +++</li>
        <li>
          Fix checkbox/radio validation and thier initial value (try with true
          value) ---
        </li>
        <li>Counter only positive values</li> +++
        <li>
          <code>react-input-range</code> (Single and Dual) +++
        </li>
        <li>
          <code>react-select</code> (Single, multi and async) ++-
        </li>
        <li>
          <code>react-datepicker</code> +++
        </li>
        <li>
          <code>react-editor</code> ---
        </li>
      </ul>
    </Container>
  );
};

export default UiKitPage;
