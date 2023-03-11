import InputRange from 'react-input-range';
import classNames from 'classnames/bind';
import { TRangeDualValue } from '@/types/common';
import styles from './Range.module.scss';

type TProps = {
  name: string;
  step?: number;
  label?: string;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  minValue?: number;
  maxValue?: number;
  value: number | TRangeDualValue;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const Range = ({
  name,
  step = 100,
  label,
  error,
  isSuccess = false,
  disabled = false,
  minValue = 0,
  maxValue = 1000,
  value,
  setFieldValue,
}: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.Range,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && <div className={styles.Range__label}>{label}</div>}

      {/* range container */}
      <div className={styles.Range__container}>
        <InputRange
          step={step}
          disabled={disabled}
          minValue={minValue}
          maxValue={maxValue}
          value={value}
          onChange={value => setFieldValue(name, value)}
        />

        {/* validation error message */}
        {error && <span className={styles.Range__error}>{error}</span>}
      </div>
    </div>
  );
};

export default Range;
