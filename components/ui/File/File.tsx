import { useRef, useState } from 'react';
import { TFile } from '@/types/common';
import {
  FileCustom,
  FileError,
  FileLabel,
  FileNative,
  FileWrapper,
} from './parts';

type Props = {
  id: string;
  name: string;
  label?: string;
  value?: TFile;
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
  // preview state
  const [fileStringPreview, setFileStringPreview] = useState<
    string | ArrayBuffer | null
  >('');

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

  return (
    <FileWrapper error={error} isSuccess={isSuccess} disabled={disabled}>
      {/* label */}
      {label && <FileLabel id={id} label={label} />}

      {/* native input with ref to custom */}
      <FileNative
        id={id}
        name={name}
        value={value}
        fileInput={fileInput}
        disabled={disabled}
        onBlur={onBlur}
        setFieldValue={setFieldValue}
        setFileStringPreview={setFileStringPreview}
      />

      {/* input custom */}
      <FileCustom
        value={value}
        placeholder={placeholder}
        fileStringPreview={fileStringPreview}
        onChooseFileClick={onChooseFileClick}
        onDeleteFile={onDeleteFile}
      />

      {/* validation error message */}
      {error && <FileError error={error} />}
    </FileWrapper>
  );
};

export default File;
