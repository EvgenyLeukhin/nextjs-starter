import { ChangeEvent, FocusEventHandler, useRef, useState } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import { TOption } from '@/types/common';
import {
  SelectCustom,
  SelectDropdown,
  SelectError,
  SelectLabel,
  SelectNative,
  SelectWrapper,
} from './parts';

type TProps = {
  isMulti?: boolean;
  id: string;
  name: string;
  label: string;
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
  const labelRef = useRef<HTMLLabelElement | null>(null);

  // dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // dropdown trigger
  const onSelectClick = () => {
    if (!disabled) {
      selectRef.current?.focus(); // for formik touched work

      // show custom dropdowns on Desktop
      !(isIOS || isAndroid) && setDropdownOpen(!isDropdownOpen);

      // show native dropdown on Android (iOS work)
      isAndroid && labelRef.current.click();
    }
  };

  // click to dropdown option
  const onOptionClick = (option: TOption): void => {
    // is not Multi click
    if (!isMulti) {
      if (value === option.value) {
        setFieldValue(name, '');
      } else {
        setFieldValue(name, option.value);
      }
      setDropdownOpen(false);

      // isMulti click
    } else {
      if (value?.includes(option?.value)) {
        // delete option to value if it exist
        const filteredOptions = (value as Array<string>)?.filter(
          (item: string) => item !== option.value,
        );
        setFieldValue(name, filteredOptions);
      } else {
        // add option to value if it doesn't exist
        setFieldValue(name, [...(value as Array<string>), option.value]);
      }
    }
  };

  // reset select
  const onResetClick = () => {
    setFieldValue(name, !isMulti ? '' : []);
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
          labelRef={labelRef}
          disabled={disabled}
          isDropdownOpen={isDropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      )}

      <SelectNative
        id={id}
        name={name}
        selectRef={selectRef}
        options={options}
        value={value}
        isMulti={isMulti}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
      />

      <div style={{ position: 'relative' }}>
        <SelectCustom
          isMulti={isMulti}
          value={value}
          options={options}
          placeholder={placeholder}
          isDropdownOpen={isDropdownOpen}
          onSelectClick={onSelectClick}
          onResetClick={onResetClick}
        />

        {/* DROPDOWN */}
        {isDropdownOpen && (
          <SelectDropdown
            isMulti={isMulti}
            options={options}
            value={value}
            onOptionClick={onOptionClick}
          />
        )}
      </div>

      {error && <SelectError error={error} />}
    </SelectWrapper>
  );
};

export default Select;
