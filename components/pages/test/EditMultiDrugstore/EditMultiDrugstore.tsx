import { PickUpScreens } from '@/types/test/common';
import styles from './EditMultiDrugstore.module.scss';

type TProps = {
  setScreen: (screen: PickUpScreens) => void;
};

const EditMultiDrugstore = ({ setScreen }: TProps) => {
  return (
    <section className={styles.EditMultiDrugstore}>
      <h2>EditMultiDrugstore</h2>
    </section>
  );
};

export default EditMultiDrugstore;
