import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import { statusesColors } from '@/consts/colors';
import styles from './Range.module.scss';

type TProps = {
  step?: number;
  label?: string;
  minId: string;
  maxId: string;
  minStop: number;
  maxStop: number;
  minValue: number;
  maxValue: number;
  disabled?: boolean;
  errorMin?: string | false;
  errorMax?: string | false;
  isSuccessMin?: boolean;
  isSuccessMax?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (v: ChangeEvent<HTMLInputElement>) => void;
};

const Range = ({
  step = 1,
  label,
  minId,
  maxId,
  minStop,
  maxStop,
  minValue,
  maxValue,
  disabled = false,
  errorMin = '',
  errorMax = '',
  isSuccessMin = false,
  isSuccessMax = false,
  onBlur,
  onChange,
}: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.Range,
        (errorMin || errorMax) && styles.isError,
        isSuccessMin && isSuccessMax && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && (
        <label htmlFor={minId} className={styles.Range__label}>
          {label}
        </label>
      )}

      <div className={styles.Range__inputs}>
        <span>{minStop}</span>

        {/* min range */}
        <input
          id={minId}
          name={minId}
          type='range'
          step={step}
          min={minStop}
          max={maxStop}
          value={minValue}
          onBlur={onBlur}
          onChange={!disabled ? onChange : () => null}
        />

        {/* max range */}
        <input
          id={maxId}
          name={maxId}
          type='range'
          step={step}
          min={minStop}
          max={maxStop}
          value={maxValue}
          onBlur={onBlur}
          style={{
            backgroundImage: `linear-gradient(to right,
            gray 0,
            gray ${minValue}%,
            ${statusesColors.primary} ${minValue}%,
            ${statusesColors.primary} ${maxValue}%,
            gray ${maxValue}%,
            gray 100%)`,
            backgroundSize: '100% 2px',
          }}
          onChange={!disabled ? onChange : () => null}
        />

        <span>{maxStop}</span>
      </div>

      <div className={styles.Range__output}>
        {/* output */}
        <span>
          {minValue} &ndash; {maxValue}
        </span>
      </div>

      {/* validation error message */}
      {errorMin && <span className={styles.Range__error}>{errorMin}</span>}
      {errorMax && <span className={styles.Range__error}>{errorMax}</span>}
    </div>
  );
};

export default Range;
