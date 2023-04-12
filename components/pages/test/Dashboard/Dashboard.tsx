import { PickUpScreens } from '@/types/test/common';
import styles from './Dashboard.module.scss';

type TProps = {
  setScreen: (screen: PickUpScreens) => void;
};

const Dashboard = ({ setScreen }: TProps) => {
  return (
    <section className={styles.Dashboard}>
      <h2>Dashboard</h2>

      <div
        style={{ cursor: 'pointer' }}
        className='text-success'
        onClick={() => setScreen(PickUpScreens.LOGIN)}
      >
        to Login page
      </div>
    </section>
  );
};

export default Dashboard;
