import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputRange from 'react-input-range';
import styles from './FormReact.module.scss';
import { Button } from '@/components/buttons';
import { Statuses } from '@/types/common';

type TInitialValues = {
  rangeSingle: number;
  rangeDual: {
    min: number;
    max: number;
  };
};

const FormReact = () => {
  const initialValues: TInitialValues = {
    rangeSingle: 0,
    rangeDual: {
      min: 100,
      max: 500,
    },
  };

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      // rangeSingle
      rangeSingle: Yup.number()
        .min(0, 'min 100')
        .max(1000, 'max 1000')
        .required('rangeSingle is required'),

      // rangeDual
      rangeDual: Yup.object({
        min: Yup.number().min(0, 'min 0'),
        max: Yup.number().max(1000, 'max 1000'),
      }).required('rangeDual is required'),
    }),

    onSubmit: (values: TInitialValues) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    resetForm,
    handleSubmit,
    values: { rangeSingle, rangeDual },
    setFieldValue,
  } = formik;

  return (
    <section className={styles.FormReact}>
      <h2>FormReact</h2>
      <h3>TODO:</h3>
      <ul>
        <li>
          <code>react-input-range</code> (Single and Dual) +++
        </li>
        <li>
          <code>react-select</code> ---
        </li>
        <li>
          <code>react-datepicker</code> ---
        </li>
        <li>
          <code>react-editor</code> ---
        </li>
      </ul>

      <form action='' onSubmit={handleSubmit} className={styles.FormReact}>
        <h3>Range single</h3>

        <div className={styles.FormReact__range}>
          {/* rangeSingle */}
          <InputRange
            step={100}
            minValue={0}
            maxValue={1000}
            value={rangeSingle}
            onChange={value => setFieldValue('rangeSingle', value)}
          />
        </div>

        <hr />

        <h3>Range dual</h3>

        <div className={styles.FormReact__range}>
          {/* rangeDual */}
          <InputRange
            step={100}
            minValue={0}
            maxValue={1000}
            value={rangeDual}
            onChange={value => setFieldValue('rangeDual', value)}
          />
        </div>

        <div className={styles.FormReact__buttons}>
          <Button type='submit'>Send</Button>
          &nbsp;
          <Button
            outlined
            type='reset'
            onClick={resetForm}
            status={Statuses.secondary}
          >
            Reset
          </Button>
        </div>
      </form>

      <hr />
    </section>
  );
};

export default FormReact;
