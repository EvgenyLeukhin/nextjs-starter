import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

type Props = {
  variant?: 'checkbox' | 'switch';
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  error?: string | false;
  isSuccess?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onClick?: (val: never) => void;
};

const Checkbox = ({
  variant = 'checkbox',
  id,
  name,
  label,
  checked,
  disabled,
  error = '',
  isSuccess = false,
  onBlur,
  onChange,
  onClick,
}: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.Checkbox,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      <div className={styles.Checkbox__wrapper} onClick={onClick}>
        <input
          id={id}
          name={name}
          type='checkbox'
          onBlur={onBlur}
          checked={checked}
          disabled={disabled}
          onChange={!disabled ? onChange : () => null}
        />

        <label
          htmlFor={id}
          className={
            variant === 'checkbox'
              ? styles.Checkbox__checkbox
              : styles.Checkbox__switch
          }
        >
          {label}
        </label>
      </div>

      {/* validation error message */}
      {error && <p className={styles.Checkbox__error}>{error}</p>}
    </div>
  );
};

export default Checkbox;
