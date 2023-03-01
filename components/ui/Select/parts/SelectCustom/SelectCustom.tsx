import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import { TOption } from '@/types/common';
import styles from './SelectCustom.module.scss';

type TProps = {
  isMulti?: boolean;
  value: string | string[];
  options: TOption[];
  placeholder?: string;
  isDropdownOpen: boolean;
  onSelectClick: () => void;
};

const SelectCustom = ({
  isMulti,
  value,
  options,
  placeholder,
  isDropdownOpen,
  onSelectClick,
}: TProps) => {
  const { primary, secondary } = textColors;
  const labelValue = options.find((option: TOption) => option.value === value);

  return (
    <div className={styles.SelectCustom} onClick={onSelectClick}>
      {/* selected value and placeholder */}
      {!isMulti ? (
        <span style={{ color: value ? primary : secondary }}>
          {labelValue?.label || placeholder}
        </span>
      ) : (
        <span>
          {value.length ? (value as Array<string>)?.join(', ') : placeholder}
        </span>
      )}

      {/* toggle arrow icon */}
      <SelectArrow
        isOpen={isDropdownOpen}
        fill={isDropdownOpen ? primary : secondary}
      />
    </div>
  );
};

export default SelectCustom;
