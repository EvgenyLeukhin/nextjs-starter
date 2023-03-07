import { Container } from '@/components/layout';
import {
  FormNative,
  FormCustom,
  FormCustomNew,
} from '@/components/pages/forms';

const UiKitPage = () => {
  return (
    <Container>
      <h1 className='text-primary'>Forms</h1>
      <FormNative />
      <hr />
      <FormCustom />
      <hr />
      <FormCustomNew />
    </Container>
  );
};

export default UiKitPage;
