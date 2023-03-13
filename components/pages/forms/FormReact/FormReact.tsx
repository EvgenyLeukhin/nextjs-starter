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
        .min(100, 'min 100')
        .max(900, 'max 900')
        .required('rangeSingle is required'),

      // rangeDual
      rangeDual: Yup.object({
        min: Yup.number().min(100, 'min 100'),
        max: Yup.number().max(900, 'max 900'),
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
    touched,
    errors,
  } = formik;

  console.log('touched', touched);
  console.log('errors', errors);

  return (
    <section>
      <h2>Form React packages</h2>

      <form action='' onSubmit={handleSubmit} className={styles.FormReact}>
        <div className={styles.FormReact__range}>
          {/* rangeSingle */}
          <Range
            label='Range single'
            name='rangeSingle'
            value={rangeSingle}
            setFieldValue={setFieldValue}
            error={formik.touched.rangeSingle && formik.errors.rangeSingle}
            isSuccess={formik.touched.rangeSingle && !formik.errors.rangeSingle}
          />
        </div>

        <div className={styles.FormReact__range}>
          {/* rangeDual */}
          <Range
            label='Range dual'
            name='rangeDual'
            value={rangeDual}
            setFieldValue={setFieldValue}
            error={
              (formik.touched.rangeDual?.min && formik.errors.rangeDual?.min) ||
              (formik.touched.rangeDual?.max && formik.errors.rangeDual?.max)
            }
            isSuccess={
              (formik.touched.rangeDual?.min ||
                formik.touched.rangeDual?.max) &&
              !formik.errors.rangeDual?.min &&
              !formik.errors.rangeDual?.max
            }
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
    </section>
  );
};

export default FormReact;
