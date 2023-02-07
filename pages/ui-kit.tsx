import { NextPage } from 'next/types';
import Head from 'next/head';
import { Container, SeoBlock } from '@/components/layout';
import {
  Images,
  Buttons,
  Statuses,
  Typography,
} from '@/components/pages/ui-kit';

const UIKit: NextPage = () => {
  return (
    <>
      <Head>
        <SeoBlock
          title='UI page | NextJS Starter'
          description='UI page description'
          poster='https://raw.githubusercontent.com/EvgenyLeukhin/nextjs-starter/main/public/images/poster2.png'
        />
      </Head>

      <Container>
        <h1 className='text-primary'>UI-kit</h1>
        <Typography />
        <hr />
        <Images />
        <hr />
        <Statuses />
        <hr />
        <Buttons />
        <hr />
      </Container>
    </>
  );
};

export default UIKit;
