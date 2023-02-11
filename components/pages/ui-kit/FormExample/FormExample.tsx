import { Button } from '@/components/ui';
import { Statuses } from '@/types/common';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import styles from './FormExample.module.scss';

type InitialValues = {
  name: string;
  password: string;
  passwordRepeat: string;
  contry: string;
  email: string;
  phone: string;
  website: string;
  date: string;
  agree: boolean;
};

const FormExample = () => {
  const cnb = classNames.bind(styles);

  // initial values
  const initialValues: InitialValues = {
    name: '',
    password: '',
    passwordRepeat: '',
    contry: '',
    email: '',
    phone: '',
    website: '',
    date: '',
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
    values: {
      name,
      password,
      passwordRepeat,
      contry,
      email,
      phone,
      website,
      date,
      agree,
    },
  } = formik;

  // validation errors
  const notValid = {
    name: formik.touched.name && formik.errors.name,
    password: formik.touched.password && formik.errors.password,
    passwordRepeat:
      formik.touched.passwordRepeat && formik.errors.passwordRepeat,
    contry: formik.touched.contry && formik.errors.contry,
    email: formik.touched.email && formik.errors.email,
    phone: formik.touched.phone && formik.errors.phone,
    website: formik.touched.website && formik.errors.website,
    date: formik.touched.date && formik.errors.date,
    agree: formik.touched.agree && formik.errors.agree,
  };

  return (
    <section>
      <h2>Simple Form Example (with validation)</h2>

      <h3>TODO:</h3>

      <ul>
        <li>Multiply select</li>
        <li>Phone mask input</li>
        <li>Upload file</li>
        <li>Radio buttons</li>
      </ul>

      <form
        className={styles.FormExample}
        action=''
        method='post'
        onSubmit={handleSubmit}
      >
        {/* LEFT */}
        <div className={styles.FormExample__left}>
          {/* name */}
          <div
            className={cnb(
              styles.FormExample__formGroupInput,
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
              styles.FormExample__formGroupInput,
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
              styles.FormExample__formGroupInput,
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
              styles.FormExample__formGroupInput,
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
        </div>

        {/* RIGHT */}
        <div className={styles.FormExample__right}>
          {/* email */}
          <div
            className={cnb(
              styles.FormExample__formGroupInput,
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
              styles.FormExample__formGroupInput,
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
              styles.FormExample__formGroupInput,
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
              styles.FormExample__formGroupInput,
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
        </div>

        {/* BOTTOM */}
        <div className={styles.FormExample__bottom}>
          {/* agree */}
          <div
            className={cnb(
              styles.FormExample__formGroupCheckbox,
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
              // @ts-ignore
              value={agree}
            />
            &nbsp;
            {/* agree label */}
            <label htmlFor='agree'>Agree to post my data</label>
            &nbsp;
            {/* agree validation */}
            {notValid.agree ? <p>{formik.errors.agree}</p> : null}
          </div>
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

export default FormExample;
