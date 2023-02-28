import { ChangeEvent, FocusEventHandler, MutableRefObject } from 'react';
import { TOption } from '@/types/common';
import styles from './SelectNative.module.scss';

type TProps = {
  id?: string;
  name: string;
  selectRef: MutableRefObject<HTMLSelectElement | null>;
  options: TOption[];
  value: string;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectNative = ({
  id,
  name,
  selectRef,
  onBlur,
  onChange,
  value,
  placeholder,
  options,
}: TProps) => {
  return (
    <select
      id={id}
      name={name}
      ref={selectRef}
      onBlur={onBlur}
      onChange={onChange}
      className={styles.SelectNative}
      value={value}
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
