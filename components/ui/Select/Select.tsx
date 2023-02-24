import { Dispatch, SetStateAction, useState } from 'react';
import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import { TOption } from '@/types/common';
import { Dropdown, Error, Label, SelectWrapper } from './parts';
import styles from './Select.module.scss';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  valueObj: TOption | undefined;
  options: TOption[];
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  selectsTouched?: string[];
  setSelectsTouched?: Dispatch<SetStateAction<string[]>>;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const Select = ({
  name,
  label,
  placeholder,
  valueObj,
  options,
  error = '',
  isSuccess = false,
  disabled = false,
  setFieldValue,
  selectsTouched,
  setSelectsTouched,
}: Props) => {
  const { primary, secondary } = textColors;

  // dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const isTouced = selectsTouched?.includes(name);

  // onSelectClick
  const onSelectClick = () => {
    if (!disabled) {
      setDropdownOpen(!isDropdownOpen);

      // add select to array
      if (!isTouced) {
        setSelectsTouched!(oldArray => [...oldArray, name]);
      }
    }
  };

  // pass optionObj
  const onOptionClick = (option: TOption): void => {
    setFieldValue(name, option);
  };

  const successCondition =
    isSuccess || (isTouced && Boolean(valueObj!.value) && !isDropdownOpen);

  const errorCondition =
    error || (isTouced && Boolean(!valueObj?.value) && !isDropdownOpen);

  return (
    <SelectWrapper
      disabled={disabled}
      error={errorCondition}
      isSuccess={successCondition}
      setDropdownOpen={setDropdownOpen}
    >
      {/* label */}
      {label && <Label label={label} />}

      {/* SELECT CUSTOM */}
      <div className={styles.Select} onClick={onSelectClick}>
        {/* selected value */}
        {valueObj?.value ? (
          <span style={{ color: primary }}>{valueObj?.label}</span>
        ) : (
          <span style={{ color: secondary }}>{placeholder}</span>
        )}

        {/* DROPDOWN */}
        {isDropdownOpen && (
          <Dropdown
            options={options}
            valueObj={valueObj}
            onOptionClick={onOptionClick}
          />
        )}

        {/* toggle arrow icon */}
        <SelectArrow
          isOpen={isDropdownOpen}
          fill={isDropdownOpen ? primary : secondary}
        />
      </div>

      {/* validation error message */}
      {errorCondition && (
        <Error error={error ? error : `${name} is required`} />
      )}
    </SelectWrapper>
  );
};

export default Select;
