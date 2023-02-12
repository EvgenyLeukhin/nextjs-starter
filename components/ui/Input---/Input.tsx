import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import InputMask from 'react-input-mask';
import { InputList } from '@/types/common';
import styles from './Input.module.scss';

type Props = {
  id?: string;
  type?: InputList;
  name: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

const Input = ({
  id,
  type = InputList.text,
  name,
  placeholder,
  error = '',
  value,
  onChange,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);

  // texts inputs condition
  const textInputs =
    type === InputList.text ||
    type === InputList.number ||
    type === InputList.password ||
    type === InputList.search ||
    type === InputList.url;

  return (
    <div className={styles.Input}>
      {/* TEXT INPUTS */}
      {textInputs && (
        <input
          id={id}
          name={name}
          type={type}
          className={cnb(styles.Input__input, error && 'isError')}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {/* PHONE */}
      {type === InputList.tel && (
        <InputMask mask='+7(999)999-99-99' onChange={onChange} value={value}>
          {/* @ts-ignore */}
          {() => (
            <input
              id={id}
              name={name}
              type='tel'
              className={cnb(styles.Input__input, error && 'isError')}
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
          className={cnb(
            styles.Input__input,
            styles.Input__textarea,
            error && 'isError',
          )}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}

      {/* validation error message */}
      {error && <span className={styles.Input__error}>{error}</span>}
    </div>
  );
};

export default Input;
