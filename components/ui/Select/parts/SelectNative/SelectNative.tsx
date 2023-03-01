import { ChangeEvent, FocusEventHandler, MutableRefObject } from 'react';
import { TOption } from '@/types/common';
import styles from './SelectNative.module.scss';

type TProps = {
  id?: string;
  name: string;
  selectRef: MutableRefObject<HTMLSelectElement | null>;
  options: TOption[];
  value: string | string[];
  placeholder?: string;
  isMulti?: boolean;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectNative = ({
  id,
  name,
  selectRef,
  value,
  onBlur,
  onChange,
  isMulti,
  placeholder,
  options,
}: TProps) => {
  return (
    <select
      id={id}
      name={name}
      ref={selectRef}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      multiple={isMulti}
      className={styles.SelectNative}
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
  );
};

export default SelectNative;
