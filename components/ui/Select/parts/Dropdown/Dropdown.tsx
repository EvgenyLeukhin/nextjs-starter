import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

type Props = {
  options: TOption[];
  valueObj: TOption | undefined;
  onOptionClick: (option: TOption) => void;
};

const Dropdown = ({ valueObj, options, onOptionClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div className={styles.Dropdown}>
      {options?.length ? (
        options?.map((option, index) => {
          return (
            <span
              key={`${option.label}__${index}`}
              onClick={() => onOptionClick(option)}
              className={cnb(
                styles.Dropdown__option,
                valueObj?.value === option.value && 'isSelected',
              )}
            >
              {option.label}
            </span>
          );
        })
      ) : (
        // No data indicator
        <span className={styles.Dropdown__option}>No options</span>
      )}
    </div>
  );
};

export default Dropdown;
