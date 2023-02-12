import Head from 'next/head';
import { Container, SeoBlock } from '@/components/layout';
import {
  Images,
  Buttons,
  Statuses,
  Typography,
  FormNative,
  FormCustom,
  FormSemanticUI,
  ModalExample,
} from '@/components/pages/ui-kit';

// animation
import Reveal from 'react-awesome-reveal';
import { customAnimation } from '@/utils/customAnimation';

const UiKitPage = () => {
  console.log('process.env', process.env.NODE_ENV);

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
        <Reveal keyframes={customAnimation} triggerOnce>
          <h1 className='text-primary'>UI-kit</h1>
          <Typography />
          <hr />
          <Images />
          <hr />
          <Statuses />
          <hr />
          <Buttons />
          <hr />
          <FormNative />
          <hr />
          <FormCustom />
          <hr />
          <FormSemanticUI />
          <hr />
        </Reveal>
        <hr />
        <ModalExample />
      </Container>
    </>
  );
};

export default UiKitPage;
