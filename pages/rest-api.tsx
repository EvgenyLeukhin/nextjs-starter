import Head from 'next/head';
import { Container } from '@/components/layout';
import { API_URL, isDev } from '@/api/apiUrl';

const RestApiPage = () => {
  return (
    <>
      <Head>
        <title>REST-API | NextJS Starter</title>
        <meta name='description' content='REST-API page description' />
      </Head>

      <Container>
        <h1 className='text-primary'>REST-API</h1>

        <h2>Enviroment mode:</h2>
        <code>{isDev ? 'development' : 'production'}</code>

        <hr />

        <h2>API URL:</h2>

        <code>{`${API_URL}`}</code>
      </Container>
    </>
  );
};

export default RestApiPage;
