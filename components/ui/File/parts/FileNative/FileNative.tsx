import { ChangeEvent, MutableRefObject } from 'react';
import { TFile } from '@/types/common';
import styles from './FileNative.module.scss';

type TProps = {
  id: string;
  name: string;
  value?: TFile;
  fileInput: MutableRefObject<HTMLInputElement | null>;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
  setFileStringPreview: (val: string | ArrayBuffer | null) => void;
};

const FileNative = ({
  id,
  name,
  value,
  fileInput,
  disabled,
  onBlur,
  setFieldValue,
  setFileStringPreview,
}: TProps) => {
  return (
    <input
      id={id}
      name={name}
      type='file'
      // value={value} // don't needed (string only have native input)
      ref={fileInput}
      onBlur={onBlur}
      disabled={disabled}
      className={styles.FileNative}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (!value?.name) {
          // get file data
          const fileDataObj = e.currentTarget.files?.[0];

          if (fileDataObj?.name) {
            // init file reader
            const reader = new FileReader();

            //  read file
            reader.readAsDataURL(fileDataObj);

            reader.onloadend = () => {
              // post file data to formik after upload
              setFieldValue(name, fileDataObj);

              // save file-string to the state
              setFileStringPreview(reader.result);
            };
          }
        }
      }}
    />
  );
};

export default FileNative;
