import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './RadioGroup.module.scss';

type Props = {
  name: string;
  labels: string[];
  values: string[];
  checkedValue?: string;
  disabled?: boolean;
  error?: string | false;
  isSuccess?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

const RadioGroup = ({
  name,
  labels,
  values,
  checkedValue,
  disabled = false,
  error = '',
  isSuccess = false,
  onBlur,
  onChange,
}: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.RadioGroup,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      <div className={styles.RadioGroup__wrapper}>
        {labels.map((label, index) => {
          return (
            <div key={index} className={styles.RadioGroup__item}>
              <input
                id={`${label}__${index}`}
                name={name}
                type='radio'
                onBlur={onBlur}
                value={values[index]}
                checked={values[index] === checkedValue}
                onChange={!disabled ? onChange : () => null}
              />

              <label htmlFor={`${label}__${index}`}>{label}</label>
            </div>
          );
        })}
      </div>

      {/* validation error message */}
      {error && <p className={styles.RadioGroup__error}>{error}</p>}
    </div>
  );
};

export default RadioGroup;
