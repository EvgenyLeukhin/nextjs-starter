import { ChangeEvent, FocusEventHandler, useRef } from 'react';
import { TOption } from '@/types/common';
import styles from './SelectNew.module.scss';

type TProps = {
  id?: string;
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  options: TOption[];
  error?: string | false;
  isSuccess?: boolean;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectNew = ({
  id,
  name,
  label,
  value,
  placeholder,
  options,
  error,
  isSuccess,
  onBlur,
  onChange,
}: TProps) => {
  const selectRef = useRef(null);

  return (
    <div className={styles.SelectNew}>
      {/* label */}
      <label htmlFor={id} className={styles.SelectNew__label}>
        {label}
      </label>

      {/* native select */}
      <select
        id={id}
        name={name}
        ref={selectRef}
        onBlur={onBlur}
        onChange={onChange}
        className={styles.Select__native}
        value={value}
      >
        {/* placeholder */}
        <option value=''>{placeholder}</option>

        {/* options */}
        {options.map((option: TOption, index) => {
          return (
            <option key={`${option}__${index}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>

      {/* custom select */}
      <div className={styles.SelectNew__select} />

      {/* error */}
      {error && <span className={styles.SelectNew__error}>{error}</span>}
    </div>
  );
};

export default SelectNew;
