import Head from 'next/head';
import { ToDoList } from '@/components/pages/home';
import { Container } from '@/components/layout';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Index page | NextJS Starter</title>
        <meta name='description' content='Index page description' />
      </Head>

      <Container>
        <h1 className='text-primary'>Home page - Starter progress</h1>

        <ToDoList />
      </Container>
    </>
  );
};

export default HomePage;
