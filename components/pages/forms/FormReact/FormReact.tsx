import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Range } from '@/components/forms';
import { Button } from '@/components/buttons';
import { Statuses, TRangeDualValue } from '@/types/common';
import styles from './FormReact.module.scss';

type TInitialValues = {
  rangeSingle: number;
  rangeDual: TRangeDualValue;
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
    <section>
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

      <h2>FormReact</h2>

      <form action='' onSubmit={handleSubmit} className={styles.FormReact}>
        <div className={styles.FormReact__range}>
          {/* rangeSingle */}
          <Range
            label='Range single'
            name='rangeSingle'
            value={rangeSingle}
            setFieldValue={setFieldValue}
          />
        </div>

        <div className={styles.FormReact__range}>
          {/* rangeDual */}
          <Range
            label='Range dual'
            name='rangeDual'
            value={rangeDual}
            setFieldValue={setFieldValue}
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
