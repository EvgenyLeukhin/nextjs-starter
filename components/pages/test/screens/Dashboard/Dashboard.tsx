import { AppScreens } from '../../store-redux-classic/app/app.types';
import Head from 'next/head';
import styles from './Dashboard.module.scss';

type TProps = {
  setScreen: (screen: AppScreens) => void;
};

const Dashboard = ({ setScreen }: TProps) => {
  return (
    <section className={styles.Dashboard}>
      <Head>
        <title>Dashboard | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <h2>Dashboard</h2>

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

export default Dashboard;
