import classNames from 'classnames/bind';
import styles from './FileWrapper.module.scss';

type TProps = {
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

const FileWrapper = ({ error, isSuccess, disabled, children }: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.FileWrapper,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {children}
    </div>
  );
};

export default FileWrapper;
