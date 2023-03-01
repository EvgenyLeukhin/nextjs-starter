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

  const returnSingleLabel = () => {
    const labelValue = options.find(
      (option: TOption) => option.value === value,
    );

    return (
      <span style={{ color: value ? primary : secondary }}>
        {labelValue?.label || placeholder}
      </span>
    );
  };

  const returnMultiLabel = () => {
    // find options by value
    // ['foo1', 'foo2', ...] ==> [{ value: 'foo1', label: 'bar1'}, {...}]
    const selectedOptions = value.length
      ? (value as Array<string>)?.map((val: string) =>
          options.find(option => option.value === val),
        )
      : [];

    // return labels from options
    // [{ value: 'foo1', label: 'bar1'}, {...}] ==> ['bar1', 'bar2', ...]
    const selectedLabels = selectedOptions.length
      ? selectedOptions.map(option => option?.label)
      : [];

    return (
      <span style={{ color: selectedLabels.length ? primary : secondary }}>
        {selectedLabels.length ? selectedLabels?.join(', ') : placeholder}
      </span>
    );
  };

  return (
    <div className={styles.SelectCustom} onClick={onSelectClick}>
      {/* selected value and placeholder */}
      {!isMulti ? returnSingleLabel() : returnMultiLabel()}

      {/* toggle arrow icon */}
      <SelectArrow
        isOpen={isDropdownOpen}
        fill={isDropdownOpen ? primary : secondary}
      />
    </div>
  );
};

export default SelectCustom;
