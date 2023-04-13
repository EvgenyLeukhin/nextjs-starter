import { AppScreens } from '../../store-redux-classic/app/app.types';
import Head from 'next/head';
import styles from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';

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

      <LoginForm />

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
