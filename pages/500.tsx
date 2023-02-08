import Head from 'next/head';
import { Container } from '@/components/layout';
import Link from 'next/link';

const ServerErrorPage = () => {
  return (
    <>
      <Head>
        <title>500 | NextJS Starter</title>
        <meta name='description' content='500 page description' />
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
          <h1 className='text-primary'>500</h1>

          <h2>
            We having some problems on our server {`:(`} <br />
            We are doing all best to fix it ASAP!
          </h2>
          <Link href='/'>Go to homepage</Link>
        </div>
      </Container>
    </>
  );
};

export default ServerErrorPage;
