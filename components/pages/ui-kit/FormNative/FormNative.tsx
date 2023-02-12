import { Button } from '@/components/ui';
import { Statuses } from '@/types/common';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import styles from './FormNative.module.scss';

type TInitialValues = {
  name: string;
  password: string;
  passwordRepeat: string;
  contry: string;
  skills: string | false | undefined;
  email: string;
  phone: string;
  website: string;
  date: string;
  file: string;
  gender: '' | 'male' | 'female' | 'other';
  agree: boolean;
};

const multipleSelectOptions = [
  {
    label: 'Can walk',
    value: 'walk',
  },
  {
    label: 'Can run',
    value: 'run',
  },
  {
    label: 'Can jump',
    value: 'jump',
  },
  {
    label: 'Can swim',
    value: 'swim',
  },
  {
    label: 'Can fight',
    value: 'fight',
  },
  {
    label: 'Can fly',
    value: 'fly',
  },
];

const FormNative = () => {
  const cnb = classNames.bind(styles);

  // initial values
  const initialValues: TInitialValues = {
    name: '',
    password: '',
    passwordRepeat: '',
    contry: '',
    skills: '', // must be [], but will be error (formik auto generate array)
    email: '',
    phone: '',
    website: '',
    date: '',
    file: '',
    gender: '',
    agree: false,
  };

  const formik = useFormik({
    // initial values
    initialValues,

    validationSchema: Yup.object({
      // name
      name: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('name is required'),

      // password
      password: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('password is required'),

      // passwordRepeat
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('passwordRepeat is required'),

      // contry
      contry: Yup.string().required('contry is required'),

      // skills
      skills: Yup.array(Yup.string()).required('skills are required'),

      // email
      email: Yup.string()
        .email('Enter a valid email')
        .required('email is required'),

      // phone
      phone: Yup.string()
        .length(12, 'must be 12 characters')
        .required('phone is required'),

      // website
      website: Yup.string()
        .url('not valid url')
        .required('website is required'),

      // date
      date: Yup.date()
        .max(new Date(), 'Must not be longer then today')
        .required('date is required'),

      // file
      file: Yup.string().required('file is required'),

      // gender
      gender: Yup.string().required('gender is required'),

      // agree
      agree: Yup.boolean().oneOf([true], 'agree is required'),
    }),

    // form submit
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    // setFieldValue,
    values: {
      name,
      password,
      passwordRepeat,
      contry,
      // skills,
      email,
      phone,
      website,
      date,
      file,
      // gender,
      // agree,
    },
  } = formik;

  // validation errors
  const notValid: Record<keyof TInitialValues, string | false | undefined> = {
    name: formik.touched.name && formik.errors.name,
    password: formik.touched.password && formik.errors.password,
    passwordRepeat:
      formik.touched.passwordRepeat && formik.errors.passwordRepeat,
    contry: formik.touched.contry && formik.errors.contry,
    skills: formik.touched.skills && formik.errors.skills,
    email: formik.touched.email && formik.errors.email,
    phone: formik.touched.phone && formik.errors.phone,
    website: formik.touched.website && formik.errors.website,
    date: formik.touched.date && formik.errors.date,
    file: formik.touched.file && formik.errors.file,
    gender: formik.touched.gender && formik.errors.gender,
    agree: formik.touched.agree && formik.errors.agree,
  };

  return (
    <section>
      <h3>TODO:</h3>

      <ul>
        <li>Searchble select ---</li>
        <li>Searchble multiply select ---</li>
        <li>Phone mask input ---</li>
        <li>Upload file ---</li>
        <li>
          <s>Radio buttons</s>
        </li>
        <li>
          <s>Fix ts checkbox error</s>
        </li>
      </ul>

      <hr />

      <h2>Native Form Example (with validation)</h2>

      <form
        className={styles.FormNative}
        action=''
        method='post'
        onSubmit={handleSubmit}
      >
        {/* LEFT */}
        <div className={styles.FormNative__left}>
          {/* name */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.name && styles.isError,
            )}
          >
            {/* name label */}
            <label htmlFor='name'>Name</label>

            {/* name input */}
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Enter name'
              onBlur={handleBlur}
              onChange={handleChange}
              value={name}
            />

            {/* name validation message*/}
            {notValid.name ? <p>{formik.errors.name}</p> : null}
          </div>

          {/* password */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.password && styles.isError,
            )}
          >
            {/* password label */}
            <label htmlFor='password'>Password</label>

            {/* password input */}
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Enter password'
              onBlur={handleBlur}
              onChange={handleChange}
              value={password}
            />

            {/* password validation message */}
            {notValid.password ? <p>{formik.errors.password}</p> : null}
          </div>

          {/* password repeat */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.passwordRepeat && styles.isError,
            )}
          >
            {/* passwordRepeat label */}
            <label htmlFor='passwordRepeat'>Repeat password</label>

            {/* passwordRepeat input */}
            <input
              id='passwordRepeat'
              type='password'
              name='passwordRepeat'
              placeholder='Repeat password'
              onBlur={handleBlur}
              onChange={handleChange}
              value={passwordRepeat}
            />

            {/* passwordRepeat validation message */}
            {notValid.passwordRepeat ? (
              <p>{formik.errors.passwordRepeat}</p>
            ) : null}
          </div>

          {/* contry */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.contry && styles.isError,
            )}
          >
            {/* contry label */}
            <label htmlFor='contry'>Contry</label>

            {/* contry input */}
            <select
              id='contry'
              name='contry'
              placeholder='Enter contry'
              onBlur={handleBlur}
              onChange={handleChange}
              value={contry}
            >
              <option value=''>Choose contry</option>
              <option value='ru'>Russia</option>
              <option value='be'>Belarus</option>
              <option value='kz'>Kazahstan</option>
              <option value='am'>Armenia</option>
              <option value='uz'>Uzbekistan</option>
            </select>

            {/* contry validation message */}
            {notValid.contry ? <p>{formik.errors.contry}</p> : null}
          </div>

          {/* skills */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.skills && styles.isError,
            )}
          >
            {/* skills label */}
            <label htmlFor='skills'>Skills</label>

            {/* skills input */}
            <select
              multiple
              id='skills'
              name='skills'
              placeholder='Choose skills'
              onBlur={handleBlur}
              onChange={handleChange}
              // value={skills} // not needed (formik find by name)
            >
              <option value='' disabled>
                Choose skills
              </option>

              {/* options */}
              {multipleSelectOptions.map((option, index) => {
                const { label, value } = option;

                return (
                  <option value={value} key={index + label}>
                    {label}
                  </option>
                );
              })}
            </select>

            {/* skills validation message */}
            {notValid.skills ? <p>{formik.errors.skills}</p> : null}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.FormNative__right}>
          {/* email */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.email && styles.isError,
            )}
          >
            {/* email label */}
            <label htmlFor='email'>Email</label>

            {/* email input */}
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Enter email'
              onBlur={handleBlur}
              onChange={handleChange}
              value={email}
            />

            {/* email validation message*/}
            {notValid.email ? <p>{formik.errors.email}</p> : null}
          </div>

          {/* phone */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.phone && styles.isError,
            )}
          >
            {/* phone label */}
            <label htmlFor='phone'>Phone</label>

            {/* phone input */}
            <input
              id='phone'
              type='tel'
              name='phone'
              placeholder='+X-XXX-XXX-XXXX'
              onBlur={handleBlur}
              onChange={handleChange}
              value={phone}
            />

            {/* phone validation message*/}
            {notValid.phone ? <p>{formik.errors.phone}</p> : null}
          </div>

          {/* website */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.website && styles.isError,
            )}
          >
            {/* website label */}
            <label htmlFor='website'>Website</label>

            {/* website input */}
            <input
              id='website'
              type='url'
              name='website'
              placeholder='Enter url'
              onBlur={handleBlur}
              onChange={handleChange}
              value={website}
            />

            {/* website validation message*/}
            {notValid.website ? <p>{formik.errors.website}</p> : null}
          </div>

          {/* date */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.date && styles.isError,
            )}
          >
            {/* date label */}
            <label htmlFor='date'>Date</label>

            {/* date input */}
            <input
              id='date'
              type='date'
              name='date'
              placeholder='Enter date'
              onBlur={handleBlur}
              onChange={handleChange}
              value={date}
            />

            {/* date validation message*/}
            {notValid.date ? <p>{formik.errors.date}</p> : null}
          </div>

          {/* file */}
          <div
            className={cnb(
              styles.FormNative__formGroupInput,
              notValid.file && styles.isError,
            )}
          >
            {/* file label */}
            <label htmlFor='file'>File</label>

            {/* file input */}
            <input
              id='file'
              type='file'
              name='file'
              placeholder='Upload file'
              onBlur={handleBlur}
              onChange={handleChange}
              value={file}
            />

            {/* file validation message*/}
            {notValid.file ? <p>{formik.errors.file}</p> : null}
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.FormNative__bottom}>
          {/* gender */}
          <div
            className={cnb(
              styles.FormNative__formGroupRadio,
              notValid.gender && styles.isError,
            )}
          >
            <div className={styles.radioList}>
              {/* gender-male */}
              <div>
                {/* gender-male input */}
                <input
                  id='gender-male'
                  type='radio'
                  name='gender'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value='male'
                  // checked determs automaticly by name
                />
                &nbsp;
                {/* agree-male label */}
                <label htmlFor='gender-male'>Male</label>
              </div>

              {/* gender-female */}
              <div>
                {/* gender-female input */}
                <input
                  id='gender-female'
                  type='radio'
                  name='gender'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value='female'
                  // checked determs automaticly by name
                />
                &nbsp;
                {/* gender-female label */}
                <label htmlFor='gender-female'>Female</label>
              </div>

              {/* gender-other */}
              <div>
                {/* gender-other input */}
                <input
                  id='gender-other'
                  type='radio'
                  name='gender'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value='other'
                  // checked determs automaticly by name
                />
                &nbsp;
                {/* gender-other label */}
                <label htmlFor='gender-other'>Other</label>
              </div>
            </div>

            {/* gender validation */}
            {notValid.gender ? <p>{formik.errors.gender}</p> : null}
          </div>

          {/* agree */}
          <div
            className={cnb(
              styles.FormNative__formGroupCheckbox,
              notValid.agree && styles.isError,
            )}
          >
            {/* agree input */}
            <input
              id='agree'
              type='checkbox'
              name='agree'
              onBlur={handleBlur}
              onChange={handleChange}
              // value={agree} // not needed (will be ts error), determs by name
            />
            &nbsp;
            {/* agree label */}
            <label htmlFor='agree'>Agree to post my data</label>
            &nbsp;
            {/* agree validation */}
            {notValid.agree ? <p>{formik.errors.agree}</p> : null}
          </div>

          {/* buttons */}
          <div className={styles.FormNative__buttons}>
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

export default FormNative;
