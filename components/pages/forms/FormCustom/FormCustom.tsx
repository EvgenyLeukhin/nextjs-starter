import * as Yup from 'yup';
import { useFormik } from 'formik';
import { InputList, Statuses, TFile } from '@/types/common';
import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import {
  Checkbox,
  Input,
  RadioGroup,
  Select,
  File,
  Datepicker,
} from '@/components/forms';
import { Button } from '@/components/buttons';
import { addMonths, converToIsoString } from '@/utils/date';
import styles from './FormCustom.module.scss';

export type TInitialValues2 = {
  name2: string;
  password2: string;
  passwordRepeat2: string;
  contry2: string;
  skills2: string[] | [];
  email2: string;
  phone2: string;
  website2: string;
  date2: string | number | string[];
  comment2: string;
  // date: string;
  file2?: TFile;
  gender2: '' | 'male' | 'female' | 'other';
  agree2: boolean;
};

const FormCustom = () => {
  // initial values
  const initialValues: TInitialValues2 = {
    name2: '',
    password2: '',
    passwordRepeat2: '',
    contry2: '',
    skills2: [],
    email2: '',
    phone2: '',
    website2: '',
    date2: '',
    comment2: '',
    file2: undefined,
    gender2: '',
    agree2: false,
  };

  const MAX_FILE_SIZE = 5000 * 1024; // 5 MB
  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
    'image/svg',
    'image/svg+xml',
    'application/pdf',
  ];

  const todayDate = new Date();
  const todayDatePlusMonth = addMonths(new Date(), 1);

  const formik = useFormik({
    // initial values
    initialValues,

    validationSchema: Yup.object({
      // name2
      name2: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(20, 'must be max 20 characters')
        .required('name2 is required'),

      // password
      password2: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('password2 is required'),

      // passwordRepeat
      passwordRepeat2: Yup.string()
        .oneOf([Yup.ref('password2'), ''], 'Passwords must match')
        .required('passwordRepeat2 is required'),

      // contry2
      contry2: Yup.string()
        .oneOf(contryOptions.map(item => item.value))
        .required('contry2 is required'),

      // skills2
      skills2: Yup.array()
        .of(Yup.string())
        .min(1, 'skills2 is required')
        .required('skills2 is required'),

      // email2
      email2: Yup.string()
        .email('Enter a valid email')
        .required('email2 is required'),

      // phone2
      phone2: Yup.string()
        .length(16, 'must be 16 characters')
        .required('phone2 is required'),

      // website2
      website2: Yup.string()
        .url('not valid url')
        .required('website2 is required'),

      // comment2
      comment2: Yup.string().required('comment2 is required'),

      // date
      date2: Yup.date()
        .min(converToIsoString(todayDate), 'Must not before today')
        .max(converToIsoString(todayDatePlusMonth), 'Must not month longer')
        .required('date2 is required'),

      // file2
      file2: Yup.mixed()
        .required('A file2 is required')
        .test(
          'fileSize',
          'File too large',
          (value: Record<string, never>) =>
            value && value.size <= MAX_FILE_SIZE,
        )
        .test(
          'fileFormat',
          'Unsupported Format',
          (value: Record<string, never>) =>
            value && SUPPORTED_FORMATS.includes(value.type),
        ),

      // gender2
      gender2: Yup.string().required('gender2 is required'),

      // agree2
      agree2: Yup.bool().oneOf([true], 'agree2 is required'),
    }),

    // formik handleSubmit
    onSubmit: (values: TInitialValues2) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    setFieldValue,
    values: {
      name2,
      password2,
      passwordRepeat2,
      contry2,
      skills2,
      email2,
      phone2,
      website2,
      date2,
      comment2,
      file2,
      // agree2,
    },
  } = formik;

  // console.log('formik.values', formik.values);
  // console.log('formik.touched', formik.touched);
  // console.log('formik.errors', formik.errors);

  // validation errors
  const notValid: Record<string, string | false | undefined> = {
    name2: formik.touched.name2 && formik.errors.name2,
    password2: formik.touched.password2 && formik.errors.password2,
    passwordRepeat2:
      formik.touched.passwordRepeat2 && formik.errors.passwordRepeat2,
    email2: formik.touched.email2 && formik.errors.email2,
    phone2: formik.touched.phone2 && formik.errors.phone2,
    website2: formik.touched.website2 && formik.errors.website2,
    date2: formik.touched.date2 && formik.errors.date2,
    comment2: formik.touched.comment2 && formik.errors.comment2,
    file2: formik.touched.file2 && formik.errors.file2,
    gender2: formik.touched.gender2 && formik.errors.gender2,
    agree2: formik.touched.agree2 && formik.errors.agree2,
    contry2: formik.touched.contry2 && formik.errors.contry2,

    // @ts-ignore
    skills2: formik.touched.skills2 && formik.errors.skills2,
  };

  // validation success
  const valid: Record<string, boolean | undefined> = {
    name2: formik.touched.name2 && !formik.errors.name2,
    password2: formik.touched.password2 && !formik.errors.password2,
    passwordRepeat2:
      formik.touched.passwordRepeat2 && !formik.errors.passwordRepeat2,
    email2: formik.touched.email2 && !formik.errors.email2,
    phone2: formik.touched.phone2 && !formik.errors.phone2,
    website2: formik.touched.website2 && !formik.errors.website2,
    date2: formik.touched.date2 && !formik.errors.date2,
    comment2: formik.touched.comment2 && !formik.errors.comment2,
    file2: formik.touched.file2 && !formik.errors.file2,
    gender2: formik.touched.gender2 && !formik.errors.gender2,
    agree2: formik.touched.agree2 && !formik.errors.agree2,
    contry2: formik.touched.contry2 && !formik.errors.contry2,
    skills2: formik.touched.skills2 && !formik.errors.skills2,
  };

  return (
    <section>
      <h2>Form Custom Example (with validation)</h2>

      <form
        action=''
        method='post'
        onSubmit={handleSubmit}
        className={styles.FormCustom}
      >
        {/* LEFT */}
        <div className={styles.FormCustom__left}>
          {/* name2 */}
          <Input
            id='name2'
            label='Name'
            type={InputList.text}
            name='name2'
            placeholder='Enter name'
            onBlur={handleBlur}
            onChange={handleChange}
            value={name2}
            error={notValid.name2}
            isSuccess={valid.name2}
          />

          {/* password2 */}
          <Input
            id='password2'
            label='Password'
            type={InputList.password}
            name='password2'
            placeholder='Enter password'
            onBlur={handleBlur}
            onChange={handleChange}
            value={password2}
            error={notValid.password2}
            isSuccess={valid.password2}
          />

          {/* passwordRepeat2 */}
          <Input
            id='passwordRepeat2'
            label='Password repeat'
            type={InputList.password}
            name='passwordRepeat2'
            placeholder='Enter password'
            onBlur={handleBlur}
            onChange={handleChange}
            value={passwordRepeat2}
            error={notValid.passwordRepeat2}
            isSuccess={valid.passwordRepeat2}
          />

          {/* country2 */}
          <Select
            // variant='buttons'
            id='contry2'
            name='contry2'
            label='Contry'
            value={contry2}
            options={contryOptions}
            error={notValid.contry2}
            isSuccess={valid.contry2}
            placeholder='Choose contry'
            onBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />

          {/* skills2 */}
          <Select
            // variant='buttons'
            isMulti
            id='skills2'
            name='skills2'
            label='Skills'
            value={skills2}
            options={skillsOptions}
            error={notValid.skills2}
            isSuccess={valid.skills2}
            placeholder='Choose skills'
            onBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />

          {/* comment2 */}
          <Input
            id='comment2'
            label='Comment'
            type={InputList.textarea}
            name='comment2'
            placeholder='Enter comment'
            onBlur={handleBlur}
            onChange={handleChange}
            value={comment2}
            error={notValid.comment2}
            isSuccess={valid.comment2}
          />
        </div>

        {/* RIGHT */}
        <div className={styles.FormCustom__right}>
          {/* email2 */}
          <Input
            id='email2'
            label='Email'
            type={InputList.email}
            name='email2'
            placeholder='Enter email'
            onBlur={handleBlur}
            onChange={handleChange}
            value={email2}
            error={notValid.email2}
            isSuccess={valid.email2}
          />

          {/* phone2 */}
          <Input
            id='phone2'
            label='Phone'
            type={InputList.tel}
            name='phone2'
            placeholder='Enter phone'
            onBlur={handleBlur}
            onChange={handleChange}
            value={phone2}
            error={notValid.phone2}
            isSuccess={valid.phone2}
          />

          {/* website2 */}
          <Input
            id='website2'
            label='Website'
            type={InputList.url}
            name='website2'
            placeholder='Enter website'
            onBlur={handleBlur}
            onChange={handleChange}
            value={website2}
            error={notValid.website2}
            isSuccess={valid.website2}
          />

          <Datepicker
            id='date2'
            label='Date'
            name='date2'
            min={converToIsoString(todayDate)}
            max={converToIsoString(todayDatePlusMonth)}
            placeholder='Choose date'
            onBlur={handleBlur}
            onChange={handleChange}
            value={date2}
            error={notValid.date2}
            isSuccess={valid.date2}
            setFieldValue={setFieldValue}
          />

          {/* file2 */}
          <File
            id='file2'
            label='File'
            name='file2'
            value={file2}
            error={notValid.file2}
            isSuccess={valid.file2}
            onBlur={handleBlur}
            placeholder='Choose file'
            setFieldValue={setFieldValue}
          />
        </div>

        {/* BOTTOM */}
        <div className={styles.FormCustom__bottom}>
          <Checkbox
            id='agree2'
            name='agree2'
            label='Agree to post my data'
            onBlur={handleBlur}
            onChange={handleChange}
            error={notValid.agree2}
            isSuccess={valid.agree2}
            // value={agree2} // not needed (will be ts error), determs by name
          />

          <RadioGroup
            name='gender2'
            onBlur={handleBlur}
            onChange={handleChange}
            error={notValid.gender2}
            isSuccess={valid.gender2}
            values={['male', 'female', 'other']}
            labels={['Man', 'Woman', 'Other']}
            // checked determs automaticly by name
          />

          {/* buttons */}
          <div className={styles.FormCustom__buttons}>
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
        </div>
      </form>
    </section>
  );
};

export default FormCustom;
