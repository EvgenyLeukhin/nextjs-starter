import { NextPage } from 'next';
import { Container, PageBaseLayout } from '@/components/layout';
import { Comp1, Comp2, Comp3 } from '@/components/pages/ui-kit';

const UIKit: NextPage= () => {
  return (
    <PageBaseLayout>
      <Container>
        <h1>UI-kit</h1>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </Container>
    </PageBaseLayout>
  );
};

export default UIKit;
