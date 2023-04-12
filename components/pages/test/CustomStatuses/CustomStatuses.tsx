import { PickUpScreens } from '@/types/test/common';
import styles from './CustomStatuses.module.scss';

type TProps = {
  setScreen: (screen: PickUpScreens) => void;
};

const CustomStatuses = ({ setScreen }: TProps) => {
  return (
    <section className={styles.CustomStatuses}>
      <h2>CustomStatuses</h2>
    </section>
  );
};

export default CustomStatuses;
