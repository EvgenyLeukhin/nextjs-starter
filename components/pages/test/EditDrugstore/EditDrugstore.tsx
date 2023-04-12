import { AppScreens } from '@/store-test/app/app.types';
import Head from 'next/head';
import styles from './EditDrugstore.module.scss';

type TProps = {
  setScreen: (screen: AppScreens) => void;
};

const EditDrugstore = ({ setScreen }: TProps) => {
  return (
    <section className={styles.EditDrugstore}>
      <Head>
        <title>EditDrugstore | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <h2>EditDrugstore</h2>

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

export default EditDrugstore;
