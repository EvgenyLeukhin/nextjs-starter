import { ChangeEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import { InputList } from '@/types/common';
import { PassEye } from '@/components/icons';
import { textColors } from '@/consts/colors';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

type Props = {
  id?: string;
  type?: InputList;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  value?: string | number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  setFieldValue?: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
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
  disabled = false,
  value,
  onBlur,
  onChange,
  setFieldValue,
}: Props): JSX.Element => {
  const cnb = classNames.bind(styles);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { primary, secondary } = textColors;

  // texts inputs condition
  const textInputs =
    type === InputList.text ||
    type === InputList.email ||
    type === InputList.search ||
    type === InputList.url;

  return (
    <div
      className={cnb(
        styles.Input,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
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
          value={value}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          className={styles.Input__input}
          onChange={!disabled ? onChange : () => null}
        />
      )}

      {/* PASSWORD */}
      {type === InputList.password && (
        <div className={styles.Input__password}>
          <input
            id={id}
            name={name}
            value={value}
            onBlur={onBlur}
            disabled={disabled}
            placeholder={placeholder}
            className={styles.Input__input}
            type={showPassword ? 'text' : 'password'}
            onChange={!disabled ? onChange : () => null}
          />

          {/* password eye */}
          <i
            className={styles.Input__passEye}
            onClick={() => setShowPassword(!showPassword)}
          >
            <PassEye fill={showPassword ? primary : secondary} />
          </i>
        </div>
      )}

      {/* PHONE */}
      {type === InputList.tel && (
        <InputMask
          value={value}
          onBlur={onBlur}
          disabled={disabled}
          mask='+7(999)999-99-99'
          onChange={!disabled ? onChange : () => null}
        >
          {/* @ts-ignore */}
          {() => {
            return (
              <input
                id={id}
                type='tel'
                name={name}
                placeholder={placeholder}
                className={styles.Input__input}
              />
            );
          }}
        </InputMask>
      )}

      {/* TEXTAREA */}
      {type === InputList.textarea && (
        <textarea
          id={id}
          name={name}
          value={value}
          // @ts-ignore
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          onChange={!disabled ? onChange : () => null}
          className={cnb(styles.Input__input, styles.Input__textarea)}
        />
      )}

      {/* NUMBER */}
      {type === InputList.number && (
        <div className={styles.Input__number}>
          <i
            className={styles.minus}
            onClick={() =>
              // @ts-ignore
              setFieldValue ? setFieldValue(name, --value) : null
            }
          >
            &ndash;
          </i>

          <input
            id={id}
            name={name}
            type='number'
            value={value}
            onBlur={onBlur}
            disabled={disabled}
            placeholder={placeholder}
            className={styles.Input__number}
            onChange={!disabled ? onChange : () => null}
          />

          <i
            className={styles.plus}
            onClick={() =>
              // @ts-ignore
              setFieldValue ? setFieldValue(name, ++value) : null
            }
          >
            +
          </i>
        </div>
      )}

      {/* validation error message */}
      {error && <span className={styles.Input__error}>{error}</span>}
    </div>
  );
};

export default Input;
