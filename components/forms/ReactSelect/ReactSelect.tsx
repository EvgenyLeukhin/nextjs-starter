import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select';
import { statusesColors, textColors } from '@/consts/colors';
import { TOption } from '@/types/common';
import classNames from 'classnames';
import styles from './ReactSelect.module.scss';

type TProps = {
  value: TOption | TOption[];
  options: TOption[];
  onChange: (
    newValue: MultiValue<TOption> | SingleValue<TOption>,
    actionMeta: ActionMeta<TOption>,
  ) => void;
  label?: string;
  placeholder?: string;
  error?: string | false;
  name?: string;
  isSuccess?: boolean;
  disabled?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
};

const ReactSelect = ({
  value,
  options,
  onChange,
  label,
  placeholder,
  error,
  name,
  isSuccess = false,
  disabled = false,
  isMulti = false,
  isClearable = true,
  isSearchable = true,
}: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.ReactSelect,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && <h3 className={styles.ReactSelect__label}>{label}</h3>}

      {/* react-select */}
      <Select
        isMulti={isMulti}
        name={name}
        value={value}
        options={options}
        onChange={onChange}
        isDisabled={disabled}
        isClearable={isClearable}
        isSearchable={isSearchable}
        placeholder={placeholder}
        // custome styling
        styles={{
          // control
          control: (baseStyles, state) => {
            return {
              ...baseStyles,
              borderColor: state.isFocused
                ? statusesColors.primary
                : textColors.secondary,
              borderRadius: 8,
              borderWidth: 2,
              minHeight: 52,
              paddingLeft: 14,
              paddingRight: 4,
              boxShadow: 'none',
            };
          },

          // option
          option: (baseStyles, state) => {
            return {
              ...baseStyles,
              background: state.isFocused ? statusesColors.primary : 'white',
              color: state.isFocused ? 'white' : textColors.primary,
            };
          },

          // placeholder
          placeholder: baseStyles => {
            return {
              ...baseStyles,
              color: textColors.secondary,
            };
          },

          // multiValue
          // multiValue: styles => {
          //   return {
          //     ...styles,
          //     backgroundColor: statusesColors.primary,
          //   };
          // },
        }}
      />

      {/* validation error message */}
      {error && <span className={styles.ReactSelect__error}>{error}</span>}
    </div>
  );
};

export default ReactSelect;
