import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ReactRange,
  ReactSelect,
  ReactDatepicker,
  ReactSelectAsync,
} from '@/components/forms';
import { Button } from '@/components/buttons';
import {
  Statuses,
  TAsyncOption,
  TOption,
  TRangeDualValue,
} from '@/types/common';
import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import { addMonths, converToIsoString } from '@/utils/date';
import { getLocations } from '@/api/servicies';
import styles from './FormReact.module.scss';

type TInitialValues = {
  rangeSingle: number;
  rangeDual: TRangeDualValue;
  contry3: TOption;
  skills3: TOption[];
  date3: Date;
  location: TAsyncOption | null;
  locations?: TAsyncOption[];
};

const FormReact = () => {
  const todayDate = new Date();
  const todayDatePlusMonth = addMonths(new Date(), 1);

  // if need initialValues by request (useEffect -> request -> setState -> initialValues -> useState)
  const initialValues: TInitialValues = {
    rangeSingle: 0,
    rangeDual: {
      min: 100,
      max: 500,
    },
    contry3: contryOptions[0],
    skills3: [skillsOptions[0], skillsOptions[1]],
    date3: todayDate,
    location: null,
    locations: [],
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
    }),

    onSubmit: (values: TInitialValues) => {
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
    },
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
            getOptionValue={(o: TAsyncOption) => o.id}
            // @ts-ignore
            getOptionLabel={(o: TAsyncOption) => (
              <div>
                <span>{`${o.name}, `}</span>
                <small>{o.country}</small>
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
            label='react-select (async select multi)'
            placeholder='Choose locations'
            loadOptions={inputValue => getLocations(inputValue)}
            getOptionValue={(o: TAsyncOption) => o.id}
            // @ts-ignore
            getOptionLabel={(o: TAsyncOption) => (
              <div>
                <span>{`${o.name}, `}</span>
                <small>{o.country}</small>
              </div>
            )}
            onChange={location => setFieldValue('locations', location)}
            error={formik.touched.locations && formik.errors.locations}
            isSuccess={formik.touched.locations && !formik.errors.locations}
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
