import { AppScreens } from '../../store/app/app.types';
import Head from 'next/head';
import styles from './EditMultiDrugstore.module.scss';

type TProps = {
  setScreen: (screen: AppScreens) => void;
};

const EditMultiDrugstore = ({ setScreen }: TProps) => {
  return (
    <section className={styles.EditMultiDrugstore}>
      <Head>
        <title>EditMultiDrugstore | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <h2>EditMultiDrugstore</h2>

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

export default EditMultiDrugstore;
