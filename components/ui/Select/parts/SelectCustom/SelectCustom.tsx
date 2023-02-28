import { SelectArrow } from '@/components/icons';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import { textColors } from '@/consts/colors';
import { TOption } from '@/types/common';
import styles from './SelectCustom.module.scss';

type TProps = {
  name: string;
  value: string;
  options: TOption[];
  placeholder?: string;
  isDropdownOpen: boolean;
  onSelectClick: () => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const SelectCustom = ({
  name,
  value,
  options,
  placeholder,
  isDropdownOpen,
  onSelectClick,
  setFieldValue,
}: TProps) => {
  const { primary, secondary } = textColors;
  const labelValue = options.find((option: TOption) => option.value === value);

  const onOptionClick = (option: TOption): void => {
    setFieldValue(name, option.value);
  };

  return (
    <div className={styles.SelectCustom} onClick={onSelectClick}>
      {/* selected value and placeholder */}
      <span style={{ color: value ? primary : secondary }}>
        {labelValue?.label || placeholder}
      </span>

      {/* DROPDOWN */}
      {isDropdownOpen && (
        <SelectDropdown
          options={options}
          value={value}
          onOptionClick={onOptionClick}
        />
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
