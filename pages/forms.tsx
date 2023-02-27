import { Container } from '@/components/layout';
import { FormNative, FormCustom } from '@/components/pages/ui-kit';

const UiKitPage = () => {
  return (
    <Container>
      <h1 className='text-primary'>Forms</h1>
      <FormNative />
      <hr />
      <FormCustom />
    </Container>
  );
};

export default UiKitPage;
