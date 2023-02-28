import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './SelectDropdown.module.scss';

type Props = {
  options: TOption[];
  value: string;
  onOptionClick: (option: TOption) => void;
};

const SelectDropdown = ({ value, options, onOptionClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div className={styles.SelectDropdown}>
      {options?.length ? (
        options?.map((option, index) => {
          return (
            <span
              key={`${option.label}__${index}`}
              onClick={() => onOptionClick(option)}
              className={cnb(
                styles.SelectDropdown__option,
                value === option.value && 'isSelected',
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
