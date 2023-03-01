import { ChangeEvent, FocusEventHandler, useRef, useState } from 'react';
import { TOption } from '@/types/common';
import {
  SelectCustom,
  SelectError,
  SelectLabel,
  SelectNative,
  SelectWrapper,
} from './parts';

type TProps = {
  isMulti?: boolean;
  id?: string;
  name: string;
  label?: string;
  value: string | string[];
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
  isMulti = false,
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

      <SelectNative
        isMulti={isMulti}
        id={id}
        name={name}
        selectRef={selectRef}
        options={options}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
      />

      <SelectCustom
        isMulti={isMulti}
        name={name}
        value={value}
        options={options}
        placeholder={placeholder}
        isDropdownOpen={isDropdownOpen}
        onSelectClick={onSelectClick}
        setFieldValue={setFieldValue}
      />

      {error && <SelectError error={error} />}
    </SelectWrapper>
  );
};

export default Select;
