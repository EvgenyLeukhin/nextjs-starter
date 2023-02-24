import classNames from 'classnames/bind';
import styles from './CustomDropdown.module.scss';

type TOption = {
  value: string;
  label: string;
};

type Props = {
  options: TOption[];
  onOptionClick: () => void;
};

const CustomDropdown = ({ options, onOptionClick }: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div className={styles.CustomDropdown}>
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
                styles.__option,
                //  value === item && 'isSelected',
              )}
            >
              {label}
            </span>
          );
        })
      ) : (
        // No data indicator
        <span className={styles.__option}>Нет данных</span>
      )}
    </div>
  );
};

export default CustomDropdown;
