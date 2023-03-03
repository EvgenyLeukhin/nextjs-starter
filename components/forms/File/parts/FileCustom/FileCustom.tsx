import { TFile } from '@/types/common';
import FileOptions from '../FileOptions/FileOptions';
import styles from './FileCustom.module.scss';

type TProps = {
  value?: TFile;
  placeholder?: string;
  fileStringPreview: string;
  onChooseFileClick: () => void;
  onDeleteFile: () => void;
};

const FileCustom = ({
  value,
  placeholder,
  fileStringPreview,
  onChooseFileClick,
  onDeleteFile,
}: TProps) => {
  return (
    <div
      className={styles.FileCustom}
      onClick={!value ? onChooseFileClick : () => null}
    >
      <FileOptions
        value={value}
        placeholder={placeholder}
        fileStringPreview={fileStringPreview}
        onDeleteFile={onDeleteFile}
      />
    </div>
  );
};

export default FileCustom;
