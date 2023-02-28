import { TOption } from '@/types/common';
import { ChangeEvent, FocusEventHandler, useRef, useState } from 'react';
import { SelectError, SelectLabel, SelectWrapper } from '../Select/parts';
import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import classNames from 'classnames/bind';
import styles from './SelectMulti.module.scss';

type TProps = {
  id?: string;
  name: string;
  label?: string;
  value: string[];
  placeholder?: string;
  options: TOption[];
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const SelectMulti = ({
  id,
  name,
  label,
  value,
  placeholder,
  options,
  error,
  isSuccess = false,
  disabled = false,
  onBlur,
  onChange,
  setFieldValue,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const { primary, secondary } = textColors;

  // ref to native select
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // onSelectClick
  const onSelectClick = () => {
    if (!disabled) {
      selectRef.current?.focus(); // for formik touched work
      setDropdownOpen(!isDropdownOpen);
    }
  };

  const onOptionClick = (option: TOption): void => {
    setFieldValue(name, option.value);
  };

  return (
    <SelectWrapper
      error={error}
      disabled={disabled}
      isSuccess={isSuccess}
      setDropdownOpen={setDropdownOpen}
    >
      {label && (
        <SelectLabel
          id={id}
          label={label}
          disabled={disabled}
          isDropdownOpen={isDropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      )}

      {/* native select */}
      <select
        id={id}
        name={name}
        ref={selectRef}
        onBlur={onBlur}
        onChange={onChange}
        className={styles.SelectMulti__native}
        value={value}
        multiple
      >
        {/* placeholder */}
        <option value=''>{placeholder}</option>

        {/* options */}
        {options?.map((option: TOption, index) => {
          return (
            <option key={`${option}__${index}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>

      {/* custom select */}

      {/* error */}
      {error && <SelectError error={error} />}
    </SelectWrapper>
  );
};

export default SelectMulti;
