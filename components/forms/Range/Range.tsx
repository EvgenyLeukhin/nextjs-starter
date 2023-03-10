import {
  useCallback,
  useEffect,
  useState,
  useRef,
  FocusEventHandler,
} from 'react';
import classNames from 'classnames/bind';
import styles from './Range.module.scss';

type TProps = {
  id?: string;
  label?: string;
  name?: string;
  min: number;
  max: number;
  step?: number;
  disabled?: boolean;
  error?: string | false;
  isSuccess?: boolean;
  onChange: (min: number, max: number) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

const MultiRangeSlider = ({
  id,
  label,
  name,
  min,
  max,
  step = 100,
  disabled = false,
  isSuccess = false,
  error,
  onChange,
  onBlur,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const range = useRef<HTMLInputElement | null>(null);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    // @ts-ignore
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

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
      <label htmlFor={`${id}__min`} className={styles.Range__label}>
        {label}
      </label>

      <div className={styles.Range__container}>
        {/* native min range input  - LEFT THUMB */}
        <input
          disabled={disabled}
          id={`${id}__min`}
          name={name}
          type='range'
          step={step}
          min={0}
          max={1000}
          value={minVal}
          onBlur={onBlur}
          onChange={event => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className={cnb(styles.Range__thumb, styles.left)}
        />

        {/* native max range input - RIGHT THUMB */}
        <input
          disabled={disabled}
          id={`${id}__max`}
          name={`${name}__max`}
          type='range'
          step={step}
          min={0}
          max={1000}
          value={maxVal}
          onBlur={onBlur}
          onChange={event => {
            const value = Math.max(Number(event.target.value), minVal + step);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className={cnb(styles.Range__thumb, styles.right)}
        />

        {/* TRACK and VALUES */}
        <div className={styles.Range__slider}>
          <div className={styles.Range__track} />
          <div ref={range} className={styles.Range__range} />

          {/* output values */}
          <div className={styles.Range__leftValue}>{minVal}</div>
          <div className={styles.Range__rightValue}>{maxVal}</div>
        </div>
      </div>

      {/* error validation text */}
      <span className={styles.Range__error}>{error}</span>
    </div>
  );
};

export default MultiRangeSlider;
