import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './SelectDropdown.module.scss';

type Props = {
  isMulti?: boolean;
  options: TOption[];
  value: string | string[];
  onOptionClick: (option: TOption) => void;
};

const SelectDropdown = ({ isMulti, value, options, onOptionClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div className={styles.SelectDropdown}>
      {options?.length ? (
        options?.map((option, index) => {
          // selected condition
          const isSelected = isMulti
            ? value.includes(option.value)
            : value === option.value;

          return (
            <span
              key={`${option.label}__${index}`}
              onClick={() => onOptionClick(option)}
              className={cnb(
                styles.SelectDropdown__option,
                isSelected && 'isSelected',
              )}
            >
              {option.label}
            </span>
          );
        })
      ) : (
        // No data indicator
        <span className={styles.SelectDropdown__option}>No options</span>
      )}
    </div>
  );
};

export default SelectDropdown;
