import { ChangeEvent, useRef } from 'react';
import { textColors } from '@/consts/colors';
import { Delete, Clip } from '@/components/icons';
import { TFile } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './File.module.scss';

type Props = {
  id: string;
  name: string;
  label?: string;
  value?: {
    fileData: TFile;
    fileString: string;
  };
  error?: string | false;
  placeholder?: string;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
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

  // clear field
  const onDeleteFile = () => {
    setFieldValue(name, undefined);
  };

  const isImage = value?.fileData.type.includes('image/');
  const isPdf = value?.fileData.type.includes('/pdf');
  // const isDoc = value?.fileData.type.includes('/doc');
  // const isExel = value?.fileData.type.includes('/exel');
  // const isArchive = value?.fileData.type.includes('/exel');

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
        // value={value} // don't needed (string only)
        ref={fileInput}
        onBlur={onBlur}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();

          if (!value?.fileData.name) {
            // get file data
            const fileDataObj = e.currentTarget.files?.[0];

            if (fileDataObj?.name) {
              // init file reader
              const reader = new FileReader();

              //  read file
              reader.readAsDataURL(fileDataObj);

              // post file data to formik after upload
              reader.onloadend = () => {
                setFieldValue(name, {
                  fileData: fileDataObj,
                  fileString: reader.result,
                });
              };
            }
          }
        }}
      />

      {/* FILE-INPUT CUSTOM */}
      <div
        className={styles.File__customInput}
        onClick={!value ? onChooseFileClick : () => null}
      >
        {/* selected value and placeholder */}
        {value?.fileData.name ? (
          <span style={{ color: primary }}>{value?.fileData.name}</span>
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

        {/* file preview */}
        {isImage && (
          <div
            className={styles.File__preview}
            onClick={() => alert(123)}
            style={{
              backgroundImage: `url(${value?.fileString})`,
            }}
          />
        )}

        {isPdf && (
          <div
            className={styles.File__preview}
            style={{
              backgroundImage: `url(/icons/pdf.svg)`,
            }}
          />
        )}
      </div>

      {/* validation error message */}
      {error && <span className={styles.File__error}>{error}</span>}
    </div>
  );
};

export default File;
