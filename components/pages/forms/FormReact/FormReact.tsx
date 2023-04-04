import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ReactRange,
  ReactSelect,
  ReactDatepicker,
  ReactSelectAsync,
  ReactEditor,
  ReactDatepickerRange,
} from '@/components/forms';
import { Button } from '@/components/buttons';
import { Statuses } from '@/types/common';
import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import { getLocations } from '@/api/servicies/locations';
import {
  IRKUTSK_LOCATION,
  MOSCOW_LOCATION,
  TFormReactValues,
  formReactEmptyValues,
  formReactServerValues,
} from '@/api/mock/formReact';
import { Loader } from '@/components/ui';
import { TODAY_DATE, TODAY_PLUS_MONTH, converToIsoString } from '@/utils/date';
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
        .typeError('date3 is required')
        .min(converToIsoString(TODAY_DATE), 'min today')
        .max(TODAY_PLUS_MONTH, 'max 1 month')
        .required('date3 is required'),

      // date_range
      date_range: Yup.array()
        .of(
          Yup.date()
            .typeError(errorObj => {
              console.log('errorObj', errorObj);
              if (errorObj.path === 'date_range[0]') {
                return 'min date is required, ';
              }

              if (errorObj.path === 'date_range[1]') {
                return 'max date is required';
              }

              return true;
            })
            .min(converToIsoString(TODAY_DATE), 'min today, ')
            .max(TODAY_PLUS_MONTH, 'max 1 month'),
        )
        .required('date_range is required'),

      // location
      location: Yup.object().required('location is required'),

      // locations
      locations: Yup.array()
        .of(Yup.object())
        .min(1, 'min 1 location')
        .required('locations is required'),

      // comments
      comments: Yup.string().test((val, ctx) => {
        if (val === '') {
          return ctx.createError({ message: 'comments is required' });
        }
        if (val === '<p><br></p>') {
          return ctx.createError({ message: 'comments is required' });
        }
        return true;
      }),
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
      date_range,
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
            // defaultOptions
            defaultOptions={[MOSCOW_LOCATION, IRKUTSK_LOCATION]}
            // get options request
            loadOptions={inputValue => getLocations(inputValue)}
            // maping options
            getOptionValue={option => option.id}
            // maping labels with custom layout
            getOptionLabel={option => {
              return (
                <div>
                  <span>{`${option?.name}, `}</span>
                  <small>{option?.country}</small>
                </div>
              );
            }}
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
            value={date3}
            min={TODAY_DATE}
            max={TODAY_PLUS_MONTH}
            label='react-datepicker (single)'
            onChange={date => {
              formik.touched.date3 = true;
              setFieldValue('date3', date);
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
            defaultOptions={[MOSCOW_LOCATION, IRKUTSK_LOCATION]}
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

          {/* date_range */}
          <ReactDatepickerRange
            name='date_range'
            min={TODAY_DATE}
            max={TODAY_PLUS_MONTH}
            label='react-datepicker (dual)'
            startDate={date_range[0]}
            endDate={date_range[1]}
            onChange={(dates: (Date | null)[]) => {
              formik.touched.date_range = true;
              setFieldValue('date_range', dates);
            }}
            error={
              (formik.touched.date_range as boolean) &&
              (formik.errors.date_range as string[])
            }
            isSuccess={formik.touched.date_range && !formik.errors.date_range}
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
          error={formik.touched.comments && formik.errors.comments}
          isSuccess={formik.touched.comments && !formik.errors.comments}
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
