import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Checkbox, Select } from '@/components/forms';
import { useEffect, useState } from 'react';
import { Button, Loader } from '@/components/ui';
import { Statuses } from '@/types/common';
import { contryOptions } from '@/consts/selectOptions';
import {
  TFormSelectsValues,
  formSelectsEmptyValues,
  formSelectsServerValues,
} from '@/api/mock/formSelects';
import styles from './FormSelects.module.scss';

const FormSelects = () => {
  // values state
  const [formValues, setFormValues] = useState<TFormSelectsValues>(
    formSelectsEmptyValues,
  );

  // loading state
  const [formLoading, setFormLoading] = useState<boolean>(true);

  // request immitation
  useEffect(() => {
    setTimeout(() => {
      setFormValues(formSelectsServerValues);
      setFormLoading(false);
    }, 1000);
  }, []);

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formValues,

    validationSchema: Yup.object({
      // contryButtonsSelect
      contryButtonsSelect: Yup.string()
        .oneOf(contryOptions.map(item => item.value))
        .required('contryButtonsSelect is required'),

      // contryButtonsMultiselect
      contryButtonsMultiselect: Yup.array()
        .of(Yup.string())
        .min(1, 'contryButtonsMultiselect is required')
        .required('contryButtonsMultiselect is required'),

      // contryCheckboxSelect
      contryCheckboxSelect: Yup.string()
        .oneOf(contryOptions.map(item => item.value))
        .required('contryCheckboxSelect is required'),

      // contryCheckboxMultiselect
      contryCheckboxMultiselect: Yup.array()
        .of(Yup.string())
        .min(1, 'contryCheckboxMultiselect is required')
        .required('contryCheckboxMultiselect is required'),

      // switchs
      check1: Yup.bool().oneOf([true], 'check1 is required'),
      check2: Yup.bool(),
      check3: Yup.bool(),

      // counter
      counter: Yup.number(),
    }),

    // formik handleSubmit
    onSubmit: (values: TFormSelectsValues) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    handleSubmit,
    values: {
      contryButtonsSelect,
      contryButtonsMultiselect,
      contryCheckboxSelect,
      contryCheckboxMultiselect,
      check1,
      check2,
      check3,
    },
    handleBlur,
    handleChange,
    setFieldValue,
    resetForm,
  } = formik;

  // onResetForm
  const onResetForm = () => {
    resetForm({
      values: formSelectsEmptyValues,
    });
  };

  return (
    <section>
      <h2>Form Selects and Switches</h2>

      <form
        action=''
        method='post'
        onSubmit={handleSubmit}
        className={styles.FormSelects}
      >
        {/* loader */}
        {formLoading && (
          <div className={styles.FormSelects__loader}>
            <Loader />
          </div>
        )}

        {/* contryButtonsSelect */}
        <div className={styles.FormSelects__contryButtonsSelect}>
          <Select
            variant='buttons'
            id='contryButtonsSelect'
            name='contryButtonsSelect'
            label='Buttons Select'
            value={contryButtonsSelect}
            options={contryOptions}
            error={
              formik.touched.contryButtonsSelect &&
              formik.errors.contryButtonsSelect
            }
            isSuccess={
              formik.touched.contryButtonsSelect &&
              !formik.errors.contryButtonsSelect
            }
            placeholder='Choose contry'
            onBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />
        </div>

        {/* contryButtonsMultiselect */}
        <div className={styles.FormSelects__contryButtonsMultiselect}>
          <Select
            isMulti
            variant='buttons'
            id='contryButtonsMultiselect'
            name='contryButtonsMultiselect'
            label='Buttons MultiSelect'
            value={contryButtonsMultiselect}
            options={contryOptions}
            // @ts-ignore
            error={
              formik.touched.contryButtonsMultiselect &&
              formik.errors.contryButtonsMultiselect
            }
            isSuccess={
              formik.touched.contryButtonsMultiselect &&
              !formik.errors.contryButtonsMultiselect
            }
            placeholder='Choose contry'
            onBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />
        </div>

        {/* contryCheckboxSelect */}
        <div className={styles.FormSelects__contryCheckboxSelect}>
          <Select
            variant='checkboxes'
            id='contryCheckboxSelect'
            name='contryCheckboxSelect'
            label='Checkboxes Select'
            value={contryCheckboxSelect}
            options={contryOptions}
            error={
              formik.touched.contryCheckboxSelect &&
              formik.errors.contryCheckboxSelect
            }
            isSuccess={
              formik.touched.contryCheckboxSelect &&
              !formik.errors.contryCheckboxSelect
            }
            placeholder='Choose contry'
            onBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />
        </div>

        {/* contryCheckboxMultiselect */}
        <div className={styles.FormSelects__contryCheckboxMultiselect}>
          <Select
            isMulti
            variant='checkboxes'
            id='contryCheckboxMultiselect'
            name='contryCheckboxMultiselect'
            label='Checkboxes Multiselect'
            value={contryCheckboxMultiselect}
            options={contryOptions}
            // @ts-ignore
            error={
              formik.touched.contryCheckboxMultiselect &&
              formik.errors.contryCheckboxMultiselect
            }
            isSuccess={
              formik.touched.contryCheckboxMultiselect &&
              !formik.errors.contryCheckboxMultiselect
            }
            placeholder='Choose contry'
            onBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />
        </div>

        {/* switchs */}
        <div className={styles.FormSelects__item}>
          <h3>Custom Switchs</h3>

          <div className={styles.FormSelects__switchs}>
            {/* check1 */}
            <Checkbox
              variant='switch'
              id='check1'
              name='check1'
              label='Check-1'
              value={check1}
              onBlur={handleBlur}
              onChange={handleChange}
              error={formik.touched.check1 && formik.errors.check1}
              isSuccess={formik.touched.check1 && !formik.errors.check1}
            />

            {/* check2 */}
            <Checkbox
              variant='switch'
              id='check2'
              name='check2'
              label='Check-2'
              value={check2}
              onBlur={handleBlur}
              onChange={handleChange}
              error={formik.touched.check2 && formik.errors.check2}
              isSuccess={formik.touched.check2 && !formik.errors.check2}
            />

            {/* check3 */}
            <Checkbox
              variant='switch'
              id='check3'
              name='check3'
              label='Check-3'
              value={check3}
              onBlur={handleBlur}
              onChange={handleChange}
              error={formik.touched.check3 && formik.errors.check3}
              isSuccess={formik.touched.check3 && !formik.errors.check3}
            />
          </div>
        </div>

        {/* buttons */}
        <div className={styles.FormSelects__buttons}>
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

export default FormSelects;
