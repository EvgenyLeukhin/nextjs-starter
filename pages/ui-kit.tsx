import { NextPage } from 'next';
import { Container, PageBaseLayout, SeoBlock } from '@/components/layout';
import { Images, Comp2, Comp3 } from '@/components/pages/ui-kit';

const UIKit: NextPage = () => {
  return (
    <PageBaseLayout>
      <SeoBlock
        title='UI page | NextJS Starter'
        description='UI page description'
        poster='https://raw.githubusercontent.com/EvgenyLeukhin/nextjs-starter/main/public/images/poster2.png'
      />

      <Container>
        <h1 className='text-primary'>UI-kit</h1>
        <Images />
        <Comp2 />
        <Comp3 />
      </Container>
    </PageBaseLayout>
  );
};

export default UIKit;
