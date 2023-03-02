import { useState } from 'react';
import { TFile } from '@/types/common';
import Image from 'next/image';
import { textColors } from '@/consts/colors';
import { Clip, Delete } from '@/components/icons';
import { ModalWrapper } from '@/components/ui';
import classNames from 'classnames/bind';
import styles from '../FileCustom/FileCustom.module.scss';

type TProps = {
  value?: TFile;
  fileStringPreview: string;
  placeholder?: string;
  onDeleteFile: () => void;
};

const FileOptions = ({
  value,
  fileStringPreview,
  placeholder,
  onDeleteFile,
}: TProps) => {
  const cnb = classNames.bind(styles);
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
        <i className={cnb(styles.clip, 'clip')}>
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
          <Image src={fileStringPreview} alt='preview' fill />
        </div>
      </ModalWrapper>
    </div>
  );
};

export default FileOptions;
