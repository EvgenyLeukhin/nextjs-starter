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
import { getLocations } from '@/api/servicies';
import {
  TFormReactValues,
  formReactEmptyValues,
  formReactServerValues,
} from '@/api/mock/formReact';
import { Loader } from '@/components/ui';
import { TODAY_DATE, TODAY_PLUS_MONTH, converToIsoString } from '@/utils/date';
import { removeHtmlTagsFromString } from '@/utils/common';
import styles from './FormReact.module.scss';

const FormReact = () => {
  // values state
  const [formInitialValues, setFormInitialValues] =
    useState<TFormReactValues>(formReactEmptyValues);

  // loading state
  const [formLoading, setFormLoading] = useState<boolean>(true);

  // request immitation
  useEffect(() => {
    setTimeout(() => {
      setFormInitialValues(formReactServerValues);
      setFormLoading(false);
    }, 1000);
  }, []);

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formInitialValues,

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
        .min(converToIsoString(TODAY_DATE), 'min today')
        .max(converToIsoString(TODAY_PLUS_MONTH), 'max 1 month')
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
    resetForm,
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
  } = formik;

  // onResetForm
  const onResetForm = () => {
    resetForm({
      values: formReactEmptyValues,
      touched: {},
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
          {/* rangeSingle */}
          <ReactRange
            name='rangeSingle'
            label='react-input-range'
            value={rangeSingle}
            onChange={value => {
              formik.touched.rangeSingle = true;
              setFieldValue('rangeSingle', value);
            }}
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
            onChange={value => {
              formik.touched.contry3 = true;
              setFieldValue('contry3', value);
            }}
          />

          {/* location - async select */}
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
            onChange={location => {
              formik.touched.location = true;
              setFieldValue('location', location);
            }}
            error={formik.touched.location && formik.errors.location}
            isSuccess={formik.touched.location && !formik.errors.location}
          />

          {/* date3 */}
          <ReactDatepicker
            name='date3'
            value={date3 ? new Date(date3) : null}
            min={TODAY_DATE}
            max={TODAY_PLUS_MONTH}
            label='react-datepicker'
            onChange={date => {
              formik.touched.date3 = true;
              setFieldValue('date3', converToIsoString(date)); // converToIsoString --> to pass date without time
            }}
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
            onChange={value => {
              // @ts-ignore
              formik.touched.rangeDual = true;
              setFieldValue('rangeDual', value);
            }}
            error={
              (formik.touched.rangeDual && formik.errors.rangeDual?.min) ||
              (formik.touched.rangeDual && formik.errors.rangeDual?.max)
            }
            isSuccess={
              formik.touched.rangeDual &&
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
            onChange={value => {
              // @ts-ignore
              formik.touched.skills3 = true;
              setFieldValue('skills3', value);
            }}
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
            onChange={location => {
              formik.touched.locations = true;
              setFieldValue('locations', location);
            }}
            error={formik.touched.locations && formik.errors.locations}
            isSuccess={formik.touched.locations && !formik.errors.locations}
          />
        </div>

        {/* comments */}
        <ReactEditor
          label='react-quill'
          value={comments}
          onChange={htmlText => {
            formik.touched.comments = true;
            setFieldValue('comments', htmlText);
          }}
          error={
            formik.touched.comments &&
            Boolean(!removeHtmlTagsFromString(formik.values.comments)) &&
            'comments is required'
          }
          isSuccess={
            formik.touched.comments &&
            Boolean(removeHtmlTagsFromString(formik.values.comments))
          }
          //
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
