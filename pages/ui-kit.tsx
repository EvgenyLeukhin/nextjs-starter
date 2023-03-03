import Head from 'next/head';
import { Container, SeoBlock } from '@/components/layout';
import {
  Images,
  Buttons,
  Statuses,
  Typography,
  Alerts,
  Inputs,
  ModalExample,
  Slider,
} from '@/components/pages/ui-kit';

// animation
import Reveal from 'react-awesome-reveal';
import { customAnimation } from '@/utils/customAnimation';
import { Accordion } from '@/components/ui';
import { TAccordionOption } from '@/types/common';

const accordionOptions: TAccordionOption[] = [
  {
    title: 'Title-1',
    content:
      '<b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Odit eius ad, adipisci pariatur minus ab illo nesciunt cum consequatur ut harum earum necessitatibus praesentium laborum cupiditate? Fugit, doloremque. Officiis, totam?',
  },
  {
    title: 'Title-2',
    content:
      '<u>Lorem ipsum dolor</u> sit amet consectetur adipisicing elit. Odit eius ad, adipisci pariatur minus ab illo nesciunt cum consequatur ut harum earum necessitatibus praesentium laborum cupiditate? Fugit, doloremque. Officiis, totam?',
  },
  {
    title: 'Title-3',
    content:
      '<mark>Lorem ipsum dolor</mark> sit amet consectetur adipisicing elit. Odit eius ad, adipisci pariatur minus ab illo nesciunt cum consequatur ut harum earum necessitatibus praesentium laborum cupiditate? Fugit, doloremque. Officiis, totam?',
  },
];

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
          <Inputs />
          <hr />
          <section>
            <h2>Accordion</h2>
            <Accordion options={accordionOptions} />
          </section>
        </Reveal>
        <hr />
        <ModalExample />
        <hr />
      </Container>

      <Slider />
    </>
  );
};

export default UiKitPage;
