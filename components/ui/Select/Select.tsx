import { ChangeEvent, FocusEventHandler, useRef, useState } from 'react';
import { TOption } from '@/types/common';
import { textColors } from '@/consts/colors';
import { SelectArrow } from '@/components/icons';
import SelectWrapper from './SelectWrapper/SelectWrapper';
import SelectDropdown from './SelectDropdown/SelectDropdown';
import styles from './Select.module.scss';

type TProps = {
  id?: string;
  name: string;
  label?: string;
  value: string;
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

const Select = ({
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
  const selectRef = useRef<HTMLSelectElement>(null);
  const { primary, secondary } = textColors;

  // dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const onOptionClick = (option: TOption): void => {
    setFieldValue(name, option.value);
  };

  // onSelectClick
  const onSelectClick = () => {
    if (!disabled) {
      selectRef.current?.focus(); // for formik touched work
      setDropdownOpen(!isDropdownOpen);
    }
  };

  // find optionObj by value
  const labelValue = options.find((option: TOption) => option.value === value);

  return (
    <SelectWrapper
      error={error}
      disabled={disabled}
      isSuccess={isSuccess}
      setDropdownOpen={setDropdownOpen}
    >
      {/* label */}
      <label
        htmlFor={id}
        className={styles.Select__label}
        onClick={() => !disabled && setDropdownOpen(!isDropdownOpen)}
      >
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

      {/* SELECT CUSTOM */}
      <div className={styles.Select__select} onClick={onSelectClick}>
        {/* selected value and placeholder */}
        <span style={{ color: value ? primary : secondary }}>
          {/* option label */}
          {labelValue?.label || placeholder}
        </span>

        {/* DROPDOWN */}
        {isDropdownOpen && (
          <SelectDropdown
            options={options}
            value={value}
            onOptionClick={onOptionClick}
          />
        )}

        {/* toggle arrow icon */}
        <SelectArrow
          isOpen={isDropdownOpen}
          fill={isDropdownOpen ? primary : secondary}
        />
      </div>

      {/* error */}
      {error && <span className={styles.Select__error}>{error}</span>}
    </SelectWrapper>
  );
};

export default Select;
