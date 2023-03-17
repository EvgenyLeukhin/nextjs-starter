import InputRange from 'react-input-range';
import classNames from 'classnames/bind';
import { TRangeDualValue } from '@/types/common';
import styles from './ReactRange.module.scss';

type TProps = {
  name?: string;
  step?: number;
  label?: string;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  minValue?: number;
  maxValue?: number;
  value: number | TRangeDualValue;
  onChange: (value: unknown) => void;
};

const ReactRange = ({
  name,
  step = 100,
  label,
  error,
  isSuccess = false,
  disabled = false,
  minValue = 0,
  maxValue = 1000,
  value,
  onChange,
}: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.ReactRange,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && <h3 className={styles.ReactRange__label}>{label}</h3>}

      {/* range container */}
      <div className={styles.ReactRange__container}>
        <InputRange
          name={name}
          step={step}
          disabled={disabled}
          minValue={minValue}
          maxValue={maxValue}
          value={value}
          onChange={onChange}
        />

        {/* validation error message */}
        {error && <span className={styles.ReactRange__error}>{error}</span>}
      </div>
    </div>
  );
};

export default ReactRange;
