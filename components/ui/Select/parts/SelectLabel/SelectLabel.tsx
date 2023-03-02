import styles from './SelectLabel.module.scss';

type TProps = {
  id: string;
  label: string;
  labelRef: string;
  disabled?: boolean;
  isDropdownOpen: boolean;
  setDropdownOpen: (val: boolean) => void;
};

const SelectLabel = ({
  id,
  label,
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
