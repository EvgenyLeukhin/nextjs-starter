import { Button } from '@/components/ui';
import { Statuses } from '@/types/common';
import styles from './FormCustom.module.scss';

const FormCustom = () => {
  return (
    <section className={styles.FormCustom}>
      <h2>FormCustom</h2>
      {/* buttons */}
      <div className={styles.FormCustom__buttons}>
        <Button type='submit'>Send</Button>
        &nbsp;
        <Button
          outlined
          type='reset'
          // onClick={resetForm}
          status={Statuses.secondary}
        >
          Reset
        </Button>
      </div>
    </section>
  );
};

export default FormCustom;
