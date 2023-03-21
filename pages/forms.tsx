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
    </Container>
  );
};

export default UiKitPage;
