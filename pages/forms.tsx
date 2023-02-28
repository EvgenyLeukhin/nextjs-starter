import { Container } from '@/components/layout';
import { FormNative, FormCustom } from '@/components/pages/ui-kit';

const UiKitPage = () => {
  return (
    <Container>
      <h1 className='text-primary'>Forms</h1>
      <FormNative />
      <hr />
      <FormCustom />
      <hr />
      <h2>React-Select</h2>
      <hr />
      <h2>Rich text editor</h2>
    </Container>
  );
};

export default UiKitPage;
