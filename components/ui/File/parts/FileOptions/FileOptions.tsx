import { TFile } from '@/types/common';
import Image from 'next/image';
import { textColors } from '@/consts/colors';
import { Clip, Delete } from '@/components/icons';
import { useState } from 'react';
import styles from './FileOptions.module.scss';
import ModalWrapper from '@/components/ui/ModalWrapper/ModalWrapper';

type TProps = {
  value?: TFile;
  fileStringPreview?: string;
  placeholder?: string;
  onDeleteFile: () => void;
};

const FileOptions = ({
  value,
  fileStringPreview,
  placeholder,
  onDeleteFile,
}: TProps) => {
  const { primary, secondary } = textColors;
  const isImage = value?.type.includes('image/');
  const isPdf = value?.type.includes('/pdf');
  const [isPreviewModalOpen, setPreviewModal] = useState<boolean>(false);

  return (
    <div className={styles.FileOptions}>
      {/* selected value and placeholder */}
      {value?.name ? (
        <span style={{ color: primary }}>{value?.name}</span>
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
          className={styles.FileOptions__preview}
          onClick={() => setPreviewModal(true)}
          style={{
            cursor: 'pointer',
            backgroundImage: `url(${fileStringPreview})`,
          }}
        />
      )}

      {isPdf && (
        <div
          className={styles.FileOptions__preview}
          style={{ backgroundImage: `url(/icons/pdf.svg)` }}
        />
      )}

      {/* image preview modal */}
      <ModalWrapper
        isOpen={isPreviewModalOpen}
        onCloseModal={() => setPreviewModal(false)}
      >
        <div className={styles.FileOptions__previewContainer}>
          <Image src={fileStringPreview || ''} alt='preview' fill />
        </div>
      </ModalWrapper>
    </div>
  );
};

export default FileOptions;
