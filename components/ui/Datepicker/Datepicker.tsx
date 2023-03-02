import { ChangeEvent, FocusEventHandler } from 'react';
import classNames from 'classnames/bind';
import styles from './Datepicker.module.scss';

type TProps = {
  id?: string;
  label?: string;
  name: string;
  placeholder?: string;
  value: string | number | readonly string[];
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (v: ChangeEvent<HTMLInputElement>) => void;
  // setFieldValue: (
  //   field: string,
  //   value: unknown,
  //   shouldValidate?: boolean | undefined,
  // ) => void;
};

const Datepicker = ({
  id,
  label,
  name,
  placeholder,
  value,
  error,
  isSuccess = false,
  disabled = false,
  min,
  max,
  onBlur,
  onChange,
}: // setFieldValue,
TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.Datepicker,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && (
        <label htmlFor={id} className={styles.Datepicker__label}>
          {label}
        </label>
      )}

      {/* native input */}
      <input
        id={id}
        min={min}
        max={max}
        name={name}
        type='date'
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={styles.Datepicker__input}
        onChange={!disabled ? onChange : () => null}
      />

      {/* custom input ??? */}

      {/* error */}
      {error && <span className={styles.Datepicker__error}>{error}</span>}
    </div>
  );
};

export default Datepicker;
