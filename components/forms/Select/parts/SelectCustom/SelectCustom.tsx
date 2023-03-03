import { Delete, SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import { TOption } from '@/types/common';
import classNames from 'classnames/bind';
import styles from './SelectCustom.module.scss';

type TProps = {
  isMulti?: boolean;
  value: string | string[];
  options: TOption[];
  placeholder?: string;
  isDropdownOpen: boolean;
  onSelectClick: () => void;
  onResetClick: () => void;
};

const SelectCustom = ({
  isMulti,
  value,
  options,
  placeholder,
  isDropdownOpen,
  onSelectClick,
  onResetClick,
}: TProps) => {
  const cnb = classNames.bind(styles);
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
    <div
      className={cnb(
        styles.SelectCustom,
        isMulti && 'isMulti',
        isDropdownOpen && 'isDropdownOpen',
      )}
      onClick={onSelectClick}
    >
      {/* selected value and placeholder */}
      {!isMulti ? returnSingleLabel() : returnMultiLabel()}

      {/* delete icon */}
      {value.length > 0 && (
        <i
          className={styles.SelectCustom__delete}
          onClick={e => {
            e.stopPropagation();
            onResetClick();
          }}
        >
          <Delete fill={secondary} />
        </i>
      )}

      {/* toggle arrow icon */}
      <i className={styles.SelectCustom__arrow}>
        <SelectArrow
          isOpen={isDropdownOpen}
          fill={isDropdownOpen ? primary : secondary}
        />
      </i>
    </div>
  );
};

export default SelectCustom;
