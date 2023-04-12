import { PickUpScreens } from '@/types/test/common';
import styles from './EditDrugstore.module.scss';

type TProps = {
  setScreen: (screen: PickUpScreens) => void;
};

const EditDrugstore = ({ setScreen }: TProps) => {
  return (
    <section className={styles.EditDrugstore}>
      <h2>EditDrugstore</h2>
    </section>
  );
};

export default EditDrugstore;
