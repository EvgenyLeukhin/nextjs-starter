import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Range, ReactSelect } from '@/components/forms';
import { Button } from '@/components/buttons';
import { Statuses, TOption, TRangeDualValue } from '@/types/common';
import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import styles from './FormReact.module.scss';

type TInitialValues = {
  rangeSingle: number;
  rangeDual: TRangeDualValue;
  contry3: TOption;
  skills3: TOption[];
};

const FormReact = () => {
  const initialValues: TInitialValues = {
    rangeSingle: 0,
    rangeDual: {
      min: 100,
      max: 500,
    },
    contry3: contryOptions[0],
    skills3: [skillsOptions[0], skillsOptions[1]],
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

      // contry3
      contry3: Yup.object({
        label: Yup.string(),
        value: Yup.string(),
      }).required('contry3 is required'),
    }),

    onSubmit: (values: TInitialValues) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    resetForm,
    handleSubmit,
    values: { rangeSingle, rangeDual, contry3, skills3 },
    setFieldValue,
    // touched,
    // errors,
  } = formik;

  // console.log('touched', touched);
  // console.log('errors', errors);

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

        <div className={styles.FormReact__select}>
          {/* contry3 */}
          <ReactSelect
            label='react-select'
            name='contry3'
            value={contry3}
            options={contryOptions}
            error={formik.touched.contry3 && (formik.errors.contry3 as string)}
            isSuccess={formik.touched.contry3 && !formik.errors.contry3}
            placeholder='Choose contry'
            onChange={value => setFieldValue('contry3', value)}
          />
        </div>

        <div className={styles.FormReact__select}>
          {/* skills3 */}
          <ReactSelect
            isMulti
            label='react-select-multi'
            name='skills3'
            value={skills3}
            options={skillsOptions}
            error={formik.touched.skills3 && (formik.errors.skills3 as string)}
            isSuccess={formik.touched.skills3 && !formik.errors.skills3?.length}
            placeholder='Choose skills'
            onChange={value => setFieldValue('skills3', value)}
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
