import { ChangeEvent } from 'react';
import { TOption } from '@/types/common';
import styles from './NativeSelect.module.scss';

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  options: TOption[];
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const NativeSelect = ({
  id,
  name,
  value,
  placeholder,
  onBlur,
  onChange,
  options,
}: Props) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className={styles.NativeSelect}
    >
      {/* no data option */}
      <option value='' disabled>
        {placeholder}
      </option>

      {options.map((option, index) => {
        const { value, label } = option;

        return (
          <option key={`${label}__${index}`} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default NativeSelect;
