import { ChangeEvent, useRef } from 'react';
import classNames from 'classnames/bind';
import { textColors } from '@/consts/colors';
import { Delete, Clip } from '@/components/icons';
import styles from './File.module.scss';

type Props = {
  id: string;
  name: string;
  label?: string;
  value: string;
  error?: string | false;
  placeholder?: string;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (
    v: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const File = ({
  id,
  name,
  label,
  value,
  error = '',
  placeholder = 'Upload file',
  isSuccess = false,
  disabled = false,
  onBlur,
  onChange,
  setFieldValue,
}: Props) => {
  const cnb = classNames.bind(styles);
  const { primary, secondary } = textColors;

  // input ref
  const fileInput = useRef<HTMLInputElement | null>(null);

  // div click --> hidden input ref click
  const onChooseFileClick = () => {
    fileInput.current?.click();
  };

  const onDeleteFile = () => {
    setFieldValue(name, '');
  };

  return (
    <div
      className={cnb(
        styles.File,
        error && styles.isError,
        (isSuccess || value) && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && (
        <label htmlFor={id} className={styles.File__label}>
          {label}
        </label>
      )}

      {/* native input with ref */}
      <input
        id={id}
        name={name}
        type='file'
        value={value}
        ref={fileInput}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
      />

      {/* FILE-INPUT CUSTOM */}
      <div
        className={styles.File__customInput}
        onClick={!value ? onChooseFileClick : () => null}
      >
        {/* selected value and placeholder */}
        {value ? (
          <span style={{ color: primary }}>{value}</span>
        ) : (
          <span style={{ color: secondary }}>{placeholder}</span>
        )}

        {/* clip icon */}
        {value ? (
          <i className={styles.delete}>
            <Delete fill={secondary} onClick={onDeleteFile} />
          </i>
        ) : (
          <i className={styles.clip}>
            <Clip fill={secondary} />
          </i>
        )}
      </div>

      {/* validation error message */}
      {error && <span className={styles.File__error}>{error}</span>}
    </div>
  );
};

export default File;
