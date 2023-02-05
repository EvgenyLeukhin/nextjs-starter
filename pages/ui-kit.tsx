import Head from 'next/head';
import { NextPage } from 'next';
import { Container, PageBaseLayout } from '@/components/layout';
import { Images, Comp2, Comp3 } from '@/components/pages/ui-kit';

const UIKit: NextPage = () => {
  return (
    <PageBaseLayout>
      <Head>
        <title>UI page | NextJS Starter</title>
        <meta name='description' content='UI page description' />
      </Head>

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
