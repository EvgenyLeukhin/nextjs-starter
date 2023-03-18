import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ReactDatepicker } from '@/components/forms';
import { Button } from '@/components/buttons';
import { Statuses } from '@/types/common';
import {
  TFormDatepickersValues,
  formDatepickersEmptyValues,
  formDatepickersServerValues,
} from '@/api/mock/formDatepickers';
import { Loader } from '@/components/ui';
import { TODAY_DATE, TODAY_PLUS_MONTH, converToIsoString } from '@/utils/date';
import styles from '../FormReact/FormReact.module.scss';

const FormReact = () => {
  // values state
  const [formInitialValues, setFormInitialValues] =
    useState<TFormDatepickersValues>(formDatepickersEmptyValues);

  // loading state
  const [formLoading, setFormLoading] = useState<boolean>(true);

  // request immitation
  useEffect(() => {
    setTimeout(() => {
      setFormInitialValues(formDatepickersServerValues);
      setFormLoading(false);
    }, 1000);
  }, []);

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formInitialValues,

    validationSchema: Yup.object({
      // date_from
      date_from: Yup.date()
        .min(converToIsoString(TODAY_DATE), 'min today')
        .max(converToIsoString(TODAY_PLUS_MONTH), 'max 1 month')
        .required('date_from is required'),
    }),

    onSubmit: (values: TFormDatepickersValues) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    resetForm,
    handleSubmit,
    values: { date_from },
    setFieldValue,
  } = formik;

  // onResetForm
  const onResetForm = () => {
    resetForm({
      values: formDatepickersEmptyValues,
      touched: {},
      errors: {},
    });
  };

  return (
    <section>
      <h2>Form React packages</h2>

      <form action='' onSubmit={handleSubmit} className={styles.FormReact}>
        {/* loader */}
        {formLoading && (
          <div className={styles.FormReact__loader}>
            <Loader />
          </div>
        )}

        <div className={styles.FormReact__left}>
          {/* date_from */}
          <ReactDatepicker
            name='date_from'
            value={date_from ? new Date(date_from) : null}
            min={TODAY_DATE}
            max={TODAY_PLUS_MONTH}
            label='react-datepicker'
            onChange={date => {
              formik.touched.date_from = true;
              setFieldValue('date_from', converToIsoString(date)); // converToIsoString --> to pass date without time
            }}
            error={
              formik.touched.date_from && (formik.errors.date_from as string)
            }
            isSuccess={formik.touched.date_from && !formik.errors.date_from}
          />
        </div>

        <div className={styles.FormReact__right}></div>

        {/* buttons */}
        <div className={styles.FormReact__buttons}>
          <Button type='submit'>Send</Button>
          &nbsp;
          <Button
            outlined
            type='reset'
            onClick={onResetForm}
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
