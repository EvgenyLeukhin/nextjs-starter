import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Checkbox, Select } from '@/components/forms';
// import { Range, getTrackBackground } from 'react-range';
import { Button } from '@/components/buttons';
import { Statuses } from '@/types/common';
import { contryOptions } from '@/consts/selectOptions';
import styles from './FormCustomNew.module.scss';

type TInitialValues = {
  contryButtonsSelect: string;
  contryButtonsMultiselect: string[] | [];
  contryCheckboxSelect: string;
  contryCheckboxMultiselect: string[] | [];
  check1: boolean;
  check2: boolean;
  check3: boolean;
  range: number[];
};

const FormCustomNew = () => {
  const STEP = 1;
  const MIN = 1;
  const MAX = 100;

  const initialValues: TInitialValues = {
    contryButtonsSelect: '',
    contryButtonsMultiselect: [],
    contryCheckboxSelect: '',
    contryCheckboxMultiselect: [],
    check1: true,
    check2: false,
    check3: false,
    range: [0],
  };

  const formik = useFormik({
    initialValues,

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

      range: Yup.array()
        .of(Yup.number())
        .min(MIN, 'range is required')
        .max(MAX, 'range is required')
        .required('range is required'),

      // range: Yup.number()
      //   .min(1, 'Must be not 0')
      //   .max(99, 'Must be not over 100')
      //   .required('rangeMin is required'),

      // rangeMax: Yup.number().required('rangeMax is required'),
    }),

    // formik handleSubmit
    onSubmit: (values: TInitialValues) => {
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
      // check1, check2, check3, // not needed
      range,
      // rangeMax,
    },
    handleBlur,
    handleChange,
    setFieldValue,
    resetForm,
  } = formik;

  return (
    <section className={styles.FormCustomNew}>
      <h3>TODO:</h3>
      <ul>
        <li>
          <code>react-select</code> ---
        </li>
        <li>
          <code>react-datepicker</code> ---
        </li>
        <li>
          <code>react-editor</code> ---
        </li>
        <li>Custom Range ---</li>
        <li>Custom Dual Range ---</li>
        <li>Custom Counter ---</li>
        <li>Custom Switch +++</li>
        <li>Custom Select +++</li>
      </ul>

      <h2>Form Custom New</h2>

      <form
        action=''
        method='post'
        onSubmit={handleSubmit}
        className={styles.FormCustomNew}
      >
        {/* contryButtonsSelect */}
        <div className={styles.FormCustomNew__contryButtonsSelect}>
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
        <div className={styles.FormCustomNew__contryButtonsMultiselect}>
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
        <div className={styles.FormCustomNew__contryCheckboxSelect}>
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
        <div className={styles.FormCustomNew__contryCheckboxMultiselect}>
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
        <div className={styles.FormCustomNew__item}>
          <h3>Custom Switchs</h3>

          <div className={styles.FormCustomNew__switchs}>
            {/* check1 */}
            <Checkbox
              variant='switch'
              id='check1'
              name='check1'
              label='Check-1'
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
              onBlur={handleBlur}
              onChange={handleChange}
              error={formik.touched.check3 && formik.errors.check3}
              isSuccess={formik.touched.check3 && !formik.errors.check3}
            />
          </div>
        </div>

        <div className={styles.FormCustomNew__range}>Range</div>

        {/* buttons */}
        <div className={styles.FormCustomNew__buttons}>
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

export default FormCustomNew;
