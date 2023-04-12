import { AppScreens } from '../../store/app/app.types';
import Head from 'next/head';
import styles from './Login.module.scss';

type TProps = {
  setScreen: (screen: AppScreens) => void;
};

const Login = ({ setScreen }: TProps) => {
  return (
    <section className={styles.Login}>
      <Head>
        <title>Login | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <h2>Login</h2>

      <div
        style={{ cursor: 'pointer' }}
        className='text-success'
        onClick={() => setScreen(AppScreens.DASHBOARD)}
      >
        to Dashboard page
      </div>
    </section>
  );
};

export default Login;
