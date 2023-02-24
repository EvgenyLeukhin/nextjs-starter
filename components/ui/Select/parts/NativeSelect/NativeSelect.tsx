import { ChangeEvent } from 'react';
import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './NativeSelect.module.scss';

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  options: TOption[];
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const NativeSelect = ({
  id,
  name,
  value,
  placeholder,
  options,
  onBlur,
  onChange,
}: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <select
      id={id}
      name={name}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      className={cnb(styles.NativeSelect, 'native-select')}
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
