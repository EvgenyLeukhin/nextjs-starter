import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

type Props = {
  value: string;
  options: TOption[];
  onOptionClick: (e: React.MouseEvent) => void;
};

const Dropdown = ({ value, options, onOptionClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div className={styles.Dropdown}>
      {options?.length ? (
        options?.map((option, index) => {
          return (
            <span
              key={`${option.label}__${index}`}
              onClick={onOptionClick}
              className={cnb(
                styles.Dropdown__option,
                value === option.value && 'isSelected',
              )}
            >
              {option.label}
            </span>
          );
        })
      ) : (
        // No data indicator
        <span className={styles.Dropdown__option}>Нет данных</span>
      )}
    </div>
  );
};

export default Dropdown;
