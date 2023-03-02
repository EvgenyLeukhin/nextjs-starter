import { MutableRefObject } from 'react';
import styles from './SelectLabel.module.scss';

type TProps = {
  id: string;
  label: string;
  labelRef: MutableRefObject<HTMLLabelElement | null>;
  disabled?: boolean;
  isDropdownOpen: boolean;
  setDropdownOpen: (val: boolean) => void;
};

const SelectLabel = ({
  id,
  label,
  labelRef,
  disabled,
  isDropdownOpen,
  setDropdownOpen,
}: TProps) => {
  return (
    <label
      htmlFor={id}
      ref={labelRef}
      className={styles.SelectLabel}
      onClick={() => !disabled && setDropdownOpen(!isDropdownOpen)}
    >
      {label}
    </label>
  );
};

export default SelectLabel;
