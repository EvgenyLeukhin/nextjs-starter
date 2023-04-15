import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { InputList, Statuses } from '@/types/common';
import { Button, Loader } from '@/components/ui';
import { Input } from '@/components/forms';
import { useActions } from '../../../store-redux-classic/actions';
import { useTypedSelector } from '../../../store-redux-classic';
import styles from './LoginForm.module.scss';
import { USER_TOKEN_LS, USER_TOKEN_STORE } from '../../../api/userToken';

type TLoginFormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  // local state
  const [formValues, setFormValues] = useState<TLoginFormValues>({
    username: '',
    password: '',
  });
  const [formLoading, setFormLoading] = useState<boolean>(true);

  // sideeffect immitation
  useEffect(() => {
    setTimeout(() => {
      setFormValues({
        username: 't.testov01',
        password: 'aethe5ooth1Doqu',
      });
      setFormLoading(false);
    }, 1000);
  }, []);

  // store state and actions
  const { isLoginLoading } = useTypedSelector(state => state.login);
  const {
    // loginThunk,
    loginThunk2,
  } = useActions();

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formValues,

    // validationSchema
    validationSchema: Yup.object({
      // name2
      username: Yup.string()
        .min(6, 'must be min 6 characters')
        .required('username is required'),

      // password
      password: Yup.string()
        .min(6, 'must be min 6 characters')
        .required('password is required'),
    }),

    // formik handleSubmit
    onSubmit: (values: TLoginFormValues) => {
      const { username, password } = values;

      loginThunk2({ username, password });

      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    // setFieldValue,
    values: { username, password },
  } = formik;

  // validation errors
  const notValid: Record<string, string | false | undefined> = {
    username: formik.touched.username && formik.errors.username,
    password: formik.touched.password && formik.errors.password,
  };

  // validation success
  const valid: Record<string, boolean | undefined> = {
    username: formik.touched.username && !formik.errors.username,
    password: formik.touched.password && !formik.errors.password,
  };

  // onResetForm
  const onResetForm = () => {
    resetForm({
      values: {
        username: '',
        password: '',
      },
      touched: {},
      errors: {},
    });
  };

  console.log('USER_TOKEN_LS', USER_TOKEN_LS);
  console.log('USER_TOKEN_STORE', USER_TOKEN_STORE);

  return (
    <section className={styles.LoginForm}>
      <h2>Войти в систему</h2>
      <form
        action=''
        method='post'
        onSubmit={handleSubmit}
        className={styles.LoginForm__form}
      >
        {/* loader */}
        {(formLoading || isLoginLoading) && (
          <div className={styles.LoginForm__loader}>
            <Loader />
          </div>
        )}

        <Input
          id='username'
          label='E-mail'
          type={InputList.text}
          name='username'
          placeholder='Username or email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={username}
          error={notValid.username}
          isSuccess={valid.username}
        />

        <Input
          id='password'
          label='Пароль'
          type={InputList.password}
          name='password'
          placeholder='Enter password'
          onBlur={handleBlur}
          onChange={handleChange}
          value={password}
          error={notValid.password}
          isSuccess={valid.password}
        />

        {/* buttons */}
        <div className={styles.LoginForm__buttons}>
          <Button type='submit'>Войти</Button>
          &nbsp;
          <Button
            outlined
            type='reset'
            onClick={onResetForm}
            status={Statuses.secondary}
          >
            Сброс
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
