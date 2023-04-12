import { AppScreens } from '@/store-test/app/app.types';
import Head from 'next/head';
import styles from './CustomStatuses.module.scss';

type TProps = {
  setScreen: (screen: AppScreens) => void;
};

const CustomStatuses = ({ setScreen }: TProps) => {
  return (
    <section className={styles.CustomStatuses}>
      <Head>
        <title>CustomStatuses | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <h2>CustomStatuses</h2>

      <div
        style={{ cursor: 'pointer' }}
        className='text-success'
        onClick={() => setScreen(AppScreens.LOGIN)}
      >
        to Login page
      </div>
    </section>
  );
};

export default CustomStatuses;
