import { ChangeEvent, FocusEventHandler, useRef } from 'react';
import { isIOS } from 'react-device-detect';
import classNames from 'classnames/bind';
import { textColors } from '@/consts/colors';
import { Calendar, Delete } from '@/components/icons';
import styles from './Datepicker.module.scss';

type TProps = {
  id?: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (v: ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
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
  setFieldValue,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const { primary, secondary } = textColors;

  // ref to native input
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  // custom datepicker click
  const onInputClick = () => {
    inputRef.current?.focus();
    inputRef.current?.showPicker();
    isIOS && labelRef.current?.click(); // for iOs show native datepicker
  };

  // convert date '2023-03-14' --> `Tue Mar 14 2023 06:00:00 GMT+0600` --> `14.03.2023`
  const valueDate = value && new Date(`${value}`).toLocaleDateString();

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
        <label ref={labelRef} htmlFor={id} className={styles.Datepicker__label}>
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
        value={value}
        ref={inputRef}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        className={styles.Datepicker__input}
        onChange={!disabled ? onChange : () => null}
      />

      {/* custom input ??? */}
      <div className={styles.Datepicker__datepicker} onClick={onInputClick}>
        <span style={{ color: value ? primary : secondary }}>
          {valueDate || placeholder}
        </span>

        {/* delete value icon */}
        {value ? (
          <i
            className={styles.delete}
            onClick={e => {
              // delete value
              e.stopPropagation();
              setFieldValue(name, '');
            }}
          >
            <Delete fill={secondary} />
          </i>
        ) : (
          <i className={styles.calendar}>
            <Calendar fill={secondary} />
          </i>
        )}
      </div>

      {/* error */}
      {error && <span className={styles.Datepicker__error}>{error}</span>}
    </div>
  );
};

export default Datepicker;
