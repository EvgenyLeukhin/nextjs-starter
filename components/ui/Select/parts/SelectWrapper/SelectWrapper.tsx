import { useRef } from 'react';
import useClickOutside from '@/utils/hooks/useClickOutside';
import classNames from 'classnames/bind';
import styles from './SelectWrapper.module.scss';

type Props = {
  error?: string | false;
  isSuccess: boolean;
  disabled?: boolean;
  setDropdownOpen: (val: boolean) => void;
  children: React.ReactNode;
};

const SelectWrapper = ({
  error,
  isSuccess,
  disabled,
  setDropdownOpen,
  children,
}: Props) => {
  const cnb = classNames.bind(styles);

  // outside click to close dropdown
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setDropdownOpen(false));

  return (
    <div
      ref={ref}
      className={cnb(
        styles.SelectWrapper,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {children}
    </div>
  );
};

export default SelectWrapper;
