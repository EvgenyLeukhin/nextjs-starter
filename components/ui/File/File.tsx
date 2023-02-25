import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './File.module.scss';

type Props = {
  id: string;
  name: string;
  label?: string;
  value: string;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

const File = ({
  id,
  name,
  label,
  value,
  error = '',
  isSuccess = false,
  disabled = false,
  onBlur,
  onChange,
}: Props) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.File,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && (
        <label htmlFor={id} className={styles.File__label}>
          {label}
        </label>
      )}

      {/* native input */}
      <input
        id={id}
        name={name}
        type='file'
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />

      {/* validation error message */}
      {error && <span className={styles.File__error}>{error}</span>}
    </div>
  );
};

export default File;
