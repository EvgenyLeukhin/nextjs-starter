import styles from './SelectLabel.module.scss';

type TProps = {
  id: string;
  label: string;
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
      className={styles.SelectLabel}
      onClick={() => !disabled && setDropdownOpen(!isDropdownOpen)}
    >
      {label}
    </label>
  );
};

export default SelectLabel;
