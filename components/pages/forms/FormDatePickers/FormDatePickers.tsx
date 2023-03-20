import { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { Button } from '@/components/buttons';
import { Statuses } from '@/types/common';
import { Loader } from '@/components/ui';
import { TODAY_DATE, TODAY_PLUS_MONTH, fixDateFormat } from '@/utils/date';
import styles from '../FormReact/FormReact.module.scss';
import {
  TFormDatepickerValues,
  formDatepickerEmptyValues,
  formDatepickerServerValues,
} from '@/api/mock/formDatepicker';

registerLocale('ru', ru);

const FormReact = () => {
  // values state
  const [formInitialValues, setFormInitialValues] =
    useState<TFormDatepickerValues>(formDatepickerEmptyValues);

  // loading state
  const [formLoading, setFormLoading] = useState<boolean>(true);

  // request immitation
  useEffect(() => {
    setTimeout(() => {
      setFormInitialValues(formDatepickerServerValues);
      setFormLoading(false);
    }, 1000);
  }, []);

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formInitialValues,

    // validationSchema: Yup.object({
    //   // date_range
    //   date_range: Yup.date()
    //     .min(converToIsoString(TODAY_DATE), 'min today')
    //     .max(converToIsoString(TODAY_PLUS_MONTH), 'max 1 month')
    //     .required('date_range is required'),
    // }),

    onSubmit: (values: TFormDatepickerValues) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    resetForm,
    handleSubmit,
    values: { date_range },
    setFieldValue,
  } = formik;

  // onResetForm
  const onResetForm = () => {
    resetForm({
      values: formDatepickerEmptyValues,
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

        <DatePicker
          isClearable
          minDate={TODAY_DATE}
          maxDate={TODAY_PLUS_MONTH}
          locale='ru'
          autoComplete='off'
          dateFormat='dd.MM.yyyy'
          name='date_range'
          selectsRange={true}
          startDate={fixDateFormat(date_range[0])}
          selected={fixDateFormat(date_range[0])}
          endDate={fixDateFormat(date_range[1])}
          onChange={(dates: unknown[]) => {
            setFieldValue('date_range', dates);
          }}
        />

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
