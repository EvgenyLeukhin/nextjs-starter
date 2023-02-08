import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/layout';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 | NextJS Starter</title>
        <meta name='description' content='404 page description' />
      </Head>

      <Container styles={{ height: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}
        >
          <h1 className='text-primary'>404</h1>
          <h2>This page is does not exist!</h2>
          <Link href='/'>Go to homepage</Link>
        </div>
      </Container>
    </>
  );
};

export default NotFoundPage;
