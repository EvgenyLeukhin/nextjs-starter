import { PickUpScreens } from '@/types/test/common';
import styles from './Login.module.scss';

type TProps = {
  setScreen: (screen: PickUpScreens) => void;
};

const Login = ({ setScreen }: TProps) => {
  return (
    <section className={styles.Login}>
      <h2>Login</h2>

      <div
        style={{ cursor: 'pointer' }}
        className='text-success'
        onClick={() => setScreen(PickUpScreens.DASHBOARD)}
      >
        to Dashboard page
      </div>
    </section>
  );
};

export default Login;
