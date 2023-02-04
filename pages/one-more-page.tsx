import { NextPage } from 'next';
import { Comp1, Comp2, Comp3 } from '@/components/pages/one-more-page';

const Home: NextPage= () => {
  return (
    <main>
      <h1>One more page</h1>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </main>
  );
};

export default Home;
