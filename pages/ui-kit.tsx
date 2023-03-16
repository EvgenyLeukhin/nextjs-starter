import Head from 'next/head';
import { Container, SeoBlock } from '@/components/layout';
import {
  Typography,
  Images,
  Statuses,
  Buttons,
  Alerts,
  Loaders,
  AccordionExample,
  TabsExample,
  Tooltips,
  //   Inputs,
  //   ModalExample,
  //   Slider,
  //   VideoExample,
} from '@/components/pages/ui-kit';

// animation
import Reveal from 'react-awesome-reveal';
import { customAnimation } from '@/utils/customAnimation';

const UiKitPage = () => {
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
          <Alerts />
          <hr />
          <Loaders />
          <hr />
          <AccordionExample />
          <hr />
          <hr />
          <TabsExample />
          <hr />
          <Tooltips />
          {/* <VideoExample /> */}
          <hr />
          {/* <Inputs /> */}
        </Reveal>
        <hr />
        {/* <ModalExample /> */}
        <hr />
      </Container>

      {/* <Slider /> */}
    </>
  );
};

export default UiKitPage;
