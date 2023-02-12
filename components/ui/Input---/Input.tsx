import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import InputMask from 'react-input-mask';
import { InputList } from '@/types/common';
import styles from './Input.module.scss';

type Props = {
  id: string;
  type?: InputList;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string | false;
  isSuccess?: boolean;
  value?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

const Input = ({
  id,
  type = InputList.text,
  name,
  label,
  placeholder,
  error = '',
  isSuccess = false,
  value,
  onBlur,
  onChange,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  // texts inputs condition
  const textInputs =
    type === InputList.text ||
    type === InputList.number ||
    type === InputList.email ||
    type === InputList.password ||
    type === InputList.search ||
    type === InputList.url;

  return (
    <div
      className={cnb(
        styles.Input,
        error && styles.isError,
        isSuccess && styles.isSuccess,
      )}
    >
      {/* label */}
      {label && (
        <label htmlFor={id} className={styles.Input__label}>
          {label}
        </label>
      )}

      {/* TEXT INPUTS */}
      {textInputs && (
        <input
          id={id}
          name={name}
          type={type}
          className={styles.Input__input}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}

      {/* PHONE */}
      {type === InputList.tel && (
        <InputMask
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          mask='+7(999)999-99-99'
        >
          {/* @ts-ignore */}
          {() => (
            <input
              id={id}
              name={name}
              type='tel'
              className={styles.Input__input}
              placeholder={placeholder}
              // no onChange
            />
          )}
        </InputMask>
      )}

      {/* TEXTAREA */}
      {type === InputList.textarea && (
        <textarea
          id={id}
          name={name}
          className={cnb(styles.Input__input, styles.Input__textarea)}
          placeholder={placeholder}
          value={value}
          // @ts-ignore
          onBlur={onBlur}
          onChange={onChange}
        />
      )}

      {/* validation error message */}
      {error && <span className={styles.Input__error}>{error}</span>}
    </div>
  );
};

export default Input;
