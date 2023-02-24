import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

type Props = {
  options: TOption[];
  onOptionClick: () => void;
};

const Dropdown = ({ options, onOptionClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div className={styles.Dropdown}>
      {options?.length ? (
        options?.map((option, index) => {
          const {
            // value,
            label,
          } = option;

          return (
            <span
              key={`${label}__${index}`}
              onClick={onOptionClick}
              className={cnb(
                styles.Dropdown__option,
                //  value === item && 'isSelected',
              )}
            >
              {label}
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
