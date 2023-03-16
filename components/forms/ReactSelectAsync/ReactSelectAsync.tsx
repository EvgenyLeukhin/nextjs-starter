import AsyncSelect from 'react-select/async';
import {
  ActionMeta,
  GetOptionLabel,
  GetOptionValue,
  GroupBase,
  MultiValue,
  OptionsOrGroups,
  PropsValue,
  SingleValue,
} from 'react-select';
import { DeviceList, TAsyncOption } from '@/types/common';
import classNames from 'classnames';
import { statusesColors, textColors } from '@/consts/colors';
import useWindowSize from '@/utils/hooks/useWindowResize';
import styles from './../ReactSelect/ReactSelect.module.scss';

type TProps = {
  value?: PropsValue<unknown>;
  onChange: (
    newValue: MultiValue<unknown> | SingleValue<unknown>,
    actionMeta: ActionMeta<unknown>,
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
  loading?: boolean;
  loadOptions?: (
    inputValue: string,
    callback: (options: OptionsOrGroups<unknown, GroupBase<unknown>>) => void,
  ) => void;
  getOptionValue?: (option: TAsyncOption) => number | GetOptionValue<unknown>;
  getOptionLabel?: (
    option: TAsyncOption,
  ) => JSX.Element | GetOptionLabel<unknown>;
};

const ReactSelectAsync = ({
  value,
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
  loading = false,
  loadOptions,
  getOptionValue,
  getOptionLabel,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const screenType = useWindowSize();
  const isMobile = screenType === DeviceList.MOBILE;

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
      <AsyncSelect
        name={name}
        value={value}
        isMulti={isMulti}
        isLoading={loading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        placeholder={placeholder}
        loadOptions={loadOptions}
        // @ts-ignore
        getOptionValue={getOptionValue}
        // @ts-ignore
        getOptionLabel={getOptionLabel}
        onChange={onChange}
        cacheOptions
        defaultOptions
        menuPlacement='auto'
        classNamePrefix='react-select-async'
        // custome styling
        styles={{
          // container
          container: baseStyles => {
            return {
              ...baseStyles,
            };
          },

          // control
          control: (baseStyles, state) => {
            return {
              ...baseStyles,
              borderColor: state.isFocused
                ? statusesColors.primary
                : textColors.secondary,
              borderRadius: 8,
              borderWidth: 2,
              minHeight: isMobile ? 46 : 52,
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

export default ReactSelectAsync;
