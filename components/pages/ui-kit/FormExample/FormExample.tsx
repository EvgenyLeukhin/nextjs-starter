import { Button } from '@/components/ui';
import { Statuses } from '@/types/common';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import styles from './FormExample.module.scss';

type InitialValues = {
  userName: string;
  userPassword: string;
  userPasswordRepeat: string;
  userAgree: boolean;
};

const FormExample = () => {
  const cnb = classNames.bind(styles);

  // initial values
  const initialValues: InitialValues = {
    userName: '',
    userPassword: '',
    userPasswordRepeat: '',
    userAgree: false,
  };

  const formik = useFormik({
    // initial values
    initialValues,

    validationSchema: Yup.object({
      // userName
      userName: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('userName is required'),

      // userPassword
      userPassword: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('userPassword is required'),

      // userPasswordRepeat
      userPasswordRepeat: Yup.string().oneOf(
        [Yup.ref('userPassword'), ''],
        'Passwords must match',
      ),

      // userAgree
      userAgree: Yup.boolean().oneOf([true], 'userAgree is required'),
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
    values: { userName, userPassword, userPasswordRepeat, userAgree },
  } = formik;

  // validation errors
  const isUserNameError = formik.touched.userName && formik.errors.userName;
  const isUserPasswordError =
    formik.touched.userPassword && formik.errors.userPassword;
  const isUserPasswordRepeatError =
    formik.touched.userPasswordRepeat && formik.errors.userPasswordRepeat;
  const isUserAgreeError = formik.touched.userAgree && formik.errors.userAgree;

  return (
    <section>
      <h2>Simple Form Example (with validation)</h2>

      <form
        className={styles.FormExample}
        action=''
        method='post'
        onSubmit={handleSubmit}
      >
        {/* userName */}
        <div
          className={cnb(
            styles.FormExample__formGroupInput,
            isUserNameError && styles.isError,
          )}
        >
          {/* userName label */}
          <label htmlFor='userName'>User name</label>

          {/* userName input */}
          <input
            id='userName'
            type='text'
            name='userName'
            placeholder='Enter username'
            onBlur={handleBlur}
            onChange={handleChange}
            value={userName}
          />

          {/* userName validation */}
          {isUserNameError ? <p>{formik.errors.userName}</p> : null}
        </div>

        {/* userPassword */}
        <div
          className={cnb(
            styles.FormExample__formGroupInput,
            isUserPasswordError && styles.isError,
          )}
        >
          {/* userPassword label */}
          <label htmlFor='userPassword'>User password</label>

          {/* userPassword input */}
          <input
            id='userPassword'
            type='password'
            name='userPassword'
            placeholder='Enter password'
            onBlur={handleBlur}
            onChange={handleChange}
            value={userPassword}
          />

          {/* userPassword validation */}
          {isUserPasswordError ? <p>{formik.errors.userPassword}</p> : null}
        </div>

        {/* userPassword repeat */}
        <div
          className={cnb(
            styles.FormExample__formGroupInput,
            isUserPasswordRepeatError && styles.isError,
          )}
        >
          {/* userPasswordRepeat label */}
          <label htmlFor='userPasswordRepeat'>Repeat password</label>

          {/* userPasswordRepeat input */}
          <input
            id='userPasswordRepeat'
            type='password'
            name='userPasswordRepeat'
            placeholder='Repeat password'
            onBlur={handleBlur}
            onChange={handleChange}
            value={userPasswordRepeat}
          />

          {/* userPasswordRepeat validation */}
          {isUserPasswordRepeatError ? (
            <p>{formik.errors.userPasswordRepeat}</p>
          ) : null}
        </div>

        {/* userAgree */}
        <div
          className={cnb(
            styles.FormExample__formGroupCheckbox,
            isUserAgreeError && styles.isError,
          )}
        >
          {/* userAgree input */}
          <input
            id='userAgree'
            type='checkbox'
            name='userAgree'
            onBlur={handleBlur}
            onChange={handleChange}
            value={userAgree}
          />
          &nbsp;
          {/* userAgree label */}
          <label htmlFor='userAgree'>Agree to post my data</label>
          &nbsp;
          {/* userAgree validation */}
          {isUserAgreeError ? <p>{formik.errors.userAgree}</p> : null}
        </div>

        {/* buttons */}
        <div className={styles.FormExample__buttons}>
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
