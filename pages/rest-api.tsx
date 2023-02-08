import Head from 'next/head';
import { Container } from '@/components/layout';

const RestApiPage = () => {
  return (
    <>
      <Head>
        <title>REST-API | NextJS Starter</title>
        <meta name='description' content='REST-API page description' />
      </Head>

      <Container>
        <h1 className='text-primary'>REST-API</h1>
        TODO
      </Container>
    </>
  );
};

export default RestApiPage;
