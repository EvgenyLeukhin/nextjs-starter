import { Button, Checkbox, Input, RadioGroup } from '@/components/ui';
import { InputList, Statuses } from '@/types/common';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// import classNames from 'classnames';
// import Select, { GroupBase } from 'react-select';
import styles from './FormCustom.module.scss';

export type TInitialValues2 = {
  name2: string;
  password2: string;
  passwordRepeat2: string;
  // contry2: string;
  // skills: string | false | undefined;
  email2: string;
  phone2: string;
  website2: string;
  comment2: string;
  // date: string;
  // file: string;
  gender2: '' | 'male' | 'female' | 'other';
  agree2: boolean;
};

const FormCustom = () => {
  // const cnb = classNames.bind(styles);

  // initial values
  const initialValues: TInitialValues2 = {
    name2: '',
    password2: '',
    passwordRepeat2: '',
    // contry2: '',
    email2: '',
    phone2: '',
    website2: '',
    comment2: '',
    gender2: '',
    agree2: false,
  };

  const formik = useFormik({
    // initial values
    initialValues,

    validationSchema: Yup.object({
      // name2
      name2: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(20, 'must be max 20 characters')
        .required('name is required'),

      // password
      password2: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('password is required'),

      // passwordRepeat
      passwordRepeat2: Yup.string()
        .oneOf([Yup.ref('password2'), ''], 'Passwords must match')
        .required('passwordRepeat is required'),

      // contry2
      // contry2: Yup.string().required('contry is required'),

      // email2
      email2: Yup.string()
        .email('Enter a valid email')
        .required('email is required'),

      // phone2
      phone2: Yup.string()
        .length(16, 'must be 16 characters')
        .required('phone is required'),

      // website2
      website2: Yup.string()
        .url('not valid url')
        .required('website is required'),

      // comment2
      comment2: Yup.string().required('comment is required'),

      // gender2
      gender2: Yup.string().required('gender is required'),

      // agree2
      agree2: Yup.bool().oneOf([true], 'agree is required'),
    }),

    // formik handleSubmit
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
      name2,
      password2,
      passwordRepeat2,
      // contry2,
      email2,
      phone2,
      website2,
      comment2,
      // agree2,
    },
  } = formik;

  // validation errors
  const notValid: Record<string, string | false | undefined> = {
    name2: formik.touched.name2 && formik.errors.name2,
    password2: formik.touched.password2 && formik.errors.password2,
    passwordRepeat2:
      formik.touched.passwordRepeat2 && formik.errors.passwordRepeat2,
    // contry2: formik.touched.contry2 && formik.errors.contry2,
    email2: formik.touched.email2 && formik.errors.email2,
    phone2: formik.touched.phone2 && formik.errors.phone2,
    website2: formik.touched.website2 && formik.errors.website2,
    comment2: formik.touched.comment2 && formik.errors.comment2,
    gender2: formik.touched.gender2 && formik.errors.gender2,
    agree2: formik.touched.agree2 && formik.errors.agree2,
  };

  // validation success
  const valid: Record<string, boolean | undefined> = {
    name2: formik.touched.name2 && !formik.errors.name2,
    password2: formik.touched.password2 && !formik.errors.password2,
    passwordRepeat2:
      formik.touched.passwordRepeat2 && !formik.errors.passwordRepeat2,
    // contry2: formik.touched.contry2 && !formik.errors.contry2,
    email2: formik.touched.email2 && !formik.errors.email2,
    phone2: formik.touched.phone2 && !formik.errors.phone2,
    website2: formik.touched.website2 && !formik.errors.website2,
    comment2: formik.touched.comment2 && !formik.errors.comment2,
    gender2: formik.touched.gender2 && !formik.errors.gender2,
    agree2: formik.touched.agree2 && !formik.errors.agree2,
  };

  // type TContryOption = {
  //   value: string;
  //   label: string;
  // };

  // const contryOptions: TContryOption[] = [
  //   { value: 'ru', label: 'Russia' },
  //   { value: 'be', label: 'Belarus' },
  //   { value: 'kz', label: 'Kazahstan' },
  //   { value: 'am', label: 'Armenia' },
  //   { value: 'ul', label: 'Uzbekistan' },
  // ];

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

          {/* country */}
          {/* <Select
            instanceId='contry2'
            isClearable
            id='contry2'
            name='contry2'
            onBlur={handleBlur}
            onChange={val => alert(val?.value)}
            placeholder='Choose contry'
            // value={contry2} // not needed
            options={contryOptions}
          /> */}
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
            labels={['Мужчина', 'Женщина', 'Другое']}
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
