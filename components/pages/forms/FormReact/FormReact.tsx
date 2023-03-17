import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ReactRange,
  ReactSelect,
  ReactDatepicker,
  ReactSelectAsync,
  ReactEditor,
} from '@/components/forms';
import { Button } from '@/components/buttons';
import { Statuses } from '@/types/common';
import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import { converToIsoString } from '@/utils/date';
import { getLocations } from '@/api/servicies';
import {
  TFormReactValues,
  formReactEmptyValues,
  formReactServerValues,
} from '@/api/mock/formReact';
import { Loader } from '@/components/ui';
import { todayDate, todayDatePlusMonth } from '@/api/mock/date';
import styles from './FormReact.module.scss';

const FormReact = () => {
  // values state
  const [formValues, setFormValues] =
    useState<TFormReactValues>(formReactEmptyValues);

  // loading state
  const [formLoading, setFormLoading] = useState<boolean>(true);

  // request immitation
  useEffect(() => {
    setTimeout(() => {
      setFormValues(formReactServerValues);
      setFormLoading(false);
    }, 1000);
  }, []);

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formValues,

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

      // skills3
      skills3: Yup.array()
        .of(
          Yup.object({
            label: Yup.string(),
            value: Yup.string(),
          }),
        )
        .min(1, 'min 1 skill')
        .required('contry3 is required'),

      // date3
      date3: Yup.date()
        .min(converToIsoString(todayDate), 'Must not before today')
        .max(converToIsoString(todayDatePlusMonth), 'Must not month longer')
        .required('date3 is required'),

      // location
      location: Yup.object().required('location is required'),

      // locations
      locations: Yup.array()
        .of(Yup.object())
        .min(1, 'min 1 location')
        .required('locations is required'),

      // comments
      comments: Yup.string().required('comments is required'),
    }),

    onSubmit: (values: TFormReactValues) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    // resetForm,
    handleSubmit,
    values: {
      rangeSingle,
      rangeDual,
      contry3,
      skills3,
      date3,
      location,
      locations,
      comments,
    },
    setFieldValue,
    // touched,
    // errors,
    // values,
  } = formik;

  // onResetForm
  const onResetForm = () => {
    setFormValues(formReactEmptyValues);
  };

  // console.log('touched', touched);
  // console.log('errors', errors);
  // console.log('values', values);

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
          {/* rangeSingle */}
          <ReactRange
            label='react-input-range'
            name='rangeSingle'
            value={rangeSingle}
            setFieldValue={setFieldValue}
            error={formik.touched.rangeSingle && formik.errors.rangeSingle}
            isSuccess={formik.touched.rangeSingle && !formik.errors.rangeSingle}
          />

          {/* contry3 - single select*/}
          <ReactSelect
            name='contry3'
            value={contry3}
            label='react-select'
            options={contryOptions}
            placeholder='Choose contry'
            error={formik.touched.contry3 && (formik.errors.contry3 as string)}
            isSuccess={formik.touched.contry3 && !formik.errors.contry3}
            onChange={value => setFieldValue('contry3', value)}
          />

          {/* location - async select*/}
          <ReactSelectAsync
            name='location'
            value={location}
            label='react-select (async select)'
            placeholder='Choose location'
            loadOptions={inputValue => getLocations(inputValue)}
            getOptionValue={option => option.id}
            getOptionLabel={option => (
              <div>
                <span>{`${option?.name}, `}</span>
                <small>{option?.country}</small>
              </div>
            )}
            onChange={location => setFieldValue('location', location)}
            error={formik.touched.location && formik.errors.location}
            isSuccess={formik.touched.location && !formik.errors.location}
          />

          {/* date3 */}
          <ReactDatepicker
            name='date3'
            value={date3}
            min={todayDate}
            max={todayDatePlusMonth}
            label='react-datepicker'
            onChange={date => setFieldValue('date3', date)}
            error={formik.touched.date3 && (formik.errors.date3 as string)}
            isSuccess={formik.touched.date3 && !formik.errors.date3}
          />
        </div>

        <div className={styles.FormReact__right}>
          {/* rangeDual */}
          <ReactRange
            label='react-input-range (dual)'
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

          {/* skills3 - multi select */}
          <ReactSelect
            isMulti
            name='skills3'
            value={skills3}
            options={skillsOptions}
            label='react-select (multi)'
            placeholder='Choose skills'
            error={formik.touched.skills3 && (formik.errors.skills3 as string)}
            isSuccess={formik.touched.skills3 && !formik.errors.skills3?.length}
            onChange={value => setFieldValue('skills3', value)}
          />

          {/* locations - async select multi */}
          <ReactSelectAsync
            isMulti
            name='locations'
            value={locations}
            label='react-select (async multiselect)'
            placeholder='Choose locations'
            loadOptions={inputValue => getLocations(inputValue)}
            getOptionValue={option => option?.id}
            getOptionLabel={option => (
              <div>
                <span>{`${option?.name}, `}</span>
                <small>{option?.country}</small>
              </div>
            )}
            onChange={location => setFieldValue('locations', location)}
            error={formik.touched.locations && formik.errors.locations}
            isSuccess={formik.touched.locations && !formik.errors.locations}
          />
        </div>

        {/* comments */}
        <ReactEditor
          label='react-quill'
          value={comments}
          onChange={htmlText => setFieldValue('comments', htmlText)}
          error={
            (formik.touched.comments && formik.errors.comments) ||
            (formik.values.comments === '<p><br></p>' && 'comments is required')
          }
          isSuccess={
            formik.touched.comments &&
            !formik.errors.comments &&
            formik.values.comments !== '<p><br></p>'
          }
        />

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
