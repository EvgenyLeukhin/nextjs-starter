import { ChangeEvent, FocusEventHandler, useRef, useState } from 'react';
import { isIOS } from 'react-device-detect';
import { TOption } from '@/types/common';
import {
  SelectCustom,
  SelectDropdown,
  SelectError,
  SelectLabel,
  SelectNative,
  SelectWrapper,
} from './parts';
import { Button } from '@/components/buttons';
import Checkbox from '../Checkbox/Checkbox';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';

type TProps = {
  variant?: 'select' | 'buttons' | 'checkboxes';
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
  variant = 'select',
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
  const cnb = classNames.bind(styles);

  // ref to native select
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // dropdown trigger
  const onSelectClick = () => {
    if (!disabled) {
      selectRef.current?.focus(); // for formik touched work

      // show custom dropdowns on Desktop and Android (iOS native)
      !isIOS && setDropdownOpen(!isDropdownOpen);
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

      {/* select */}
      {variant === 'select' && (
        <div className={styles.Select__select}>
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
      )}

      {/* buttons */}
      {variant === 'buttons' && (
        <ul className={styles.Select__buttons}>
          {options.map((option, index) => {
            const { label } = option;
            const isSelected = isMulti
              ? value.includes(option.value)
              : value === option.value;

            return (
              <li key={index}>
                <Button
                  disabled={disabled}
                  outlined={!isSelected}
                  onClick={(e: Event) => {
                    e.preventDefault(); // disable submit
                    // onSelectClick(); // native select focus (open native selects)
                    onOptionClick(option); // change field value
                  }}
                >
                  {label}
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      {/* checkboxes */}
      {variant === 'checkboxes' && (
        <ul
          className={cnb(
            styles.Select__checkboxes,
            !isMulti && styles.isRadios,
          )}
        >
          {options.map((option, index) => {
            const { label } = option;
            const isSelected = isMulti
              ? value.includes(option.value)
              : value === option.value;

            return (
              <li key={index}>
                <Checkbox
                  variant='checkbox'
                  disabled={disabled}
                  label={label}
                  id={`${label}__${index}`}
                  name={`${label}__${index}`}
                  checked={isSelected}
                  onChange={() => null} // change by click
                  onClick={(e: Event) => {
                    e.preventDefault(); // disable default
                    // onSelectClick(); // native select focus (open native selects)
                    onOptionClick(option); // change field value
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}

      {error && <SelectError error={error} />}
    </SelectWrapper>
  );
};

export default Select;
