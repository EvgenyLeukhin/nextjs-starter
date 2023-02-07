import Head from 'next/head';
import { NextPage } from 'next/types';
import { ToDoList } from '@/components/pages/home';
import { Container } from '@/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index page | NextJS Starter</title>
        <meta name='description' content='Index page description' />
      </Head>

      <Container>
        <h1 className='text-primary'>Home page</h1>

        <ToDoList />
      </Container>
    </>
  );
};

export default Home;
