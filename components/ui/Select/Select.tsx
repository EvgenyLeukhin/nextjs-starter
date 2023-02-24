import { ChangeEvent, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Dropdown, ErrorText, Label, NativeSelect } from './parts';
import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import useClickOutside from '@/utils/hooks/useClickOutside';
import styles from './Select.module.scss';

type TOption = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  options: TOption[];
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  id,
  name,
  label,
  placeholder,
  value,
  options,
  error = '',
  isSuccess = false,
  disabled = false,
  onBlur,
  onChange,
}: Props) => {
  const cnb = classNames.bind(styles);
  const { primary, secondary } = textColors;
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const onSelectClick = () => {
    if (!disabled) {
      setDropdownOpen(!isDropdownOpen);
    }
  };
  const onOptionClick = () => alert('onOptionClick');

  // outside click to close dropdown
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setDropdownOpen(false));

  return (
    <div
      ref={ref}
      className={cnb(
        styles.Select,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && <Label id={id} label={label} />}

      {/* SELECT CUSTOM REF */}
      <div className={styles.Select__selectRef} onClick={onSelectClick}>
        {/* selected value */}
        {value ? (
          <span style={{ color: primary }}>{value}</span>
        ) : (
          <span style={{ color: secondary }}>{placeholder}</span>
        )}

        {/* DROPDOWN */}
        {isDropdownOpen && (
          <Dropdown options={options} onOptionClick={onOptionClick} />
        )}

        {/* toggle arrow icon */}
        <SelectArrow
          isOpen={isDropdownOpen}
          fill={isDropdownOpen ? primary : secondary}
        />
      </div>

      {/* SELECT NATIVE */}
      <NativeSelect
        id={id}
        name={name}
        value={value}
        onBlur={onBlur}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
      />

      {/* validation error message */}
      {error && <ErrorText error={error} />}
    </div>
  );
};

export default Select;

// import React, { useRef, useState } from 'react';
// // import { SelectArrow } from 'components-new/icons';
// import classNames from 'classnames/bind';
// // import useClickOutside from 'utils/customHooks/useClickOutside';
// import styles from './SelectSimple.module.scss';

// type Props = {
//   id?: string;
//   name?: string;
//   error?: string;
//   isSuccess?: boolean;
//   value?: string;
//   options?: string[];
//   placeholder?: string;
//   onChange: (e: React.MouseEvent) => void;
// };

// // самописный селект
// const SelectSimple = ({
//   id,
//   name,
//   error = '',
//   value,
//   options,
//   placeholder,
//   onChange,
// }: Props): JSX.Element => {
//   const cnb = classNames.bind(styles);
//   const selectInput = useRef<HTMLSelectElement | null>(null);
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const onCloseDropdown = () => setIsOpen(false);

//   // click on option
//   const onOptionClick = (e: React.MouseEvent) => {
//     onChange(e);
//     onCloseDropdown();
//   };

//   // close dropdown by outside click
//   const ref = useRef<HTMLDivElement>(null);
//   // useClickOutside(ref, onCloseDropdown);

//   return (
//     <div ref={ref} className={styles.SelectSimple}>
//       {/* ref */}
//       <div
//         tabIndex={0}
//         onClick={() => setIsOpen(!isOpen)}
//         className={cnb(
//           styles.SelectSimple__selectRef,
//           !value && 'isEmpty',
//           error && 'isError',
//           isOpen && 'isOpen',
//         )}
//         // onKeyPress={e => {
//         //   if (e.key === 'Enter') setIsOpen(!isOpen);
//         // }}
//       >
//         {value || placeholder}

//         {/* dropdown icon */}
//         {/* <SelectArrow isOpen={isOpen} /> */}
//       </div>

//       {/* dropdown  */}
//       {isOpen && (
//         <div className={styles.SelectSimple__dropdown}>
//           {options?.length ? (
//             options?.map((item, i) => {
//               return (
//                 <span
//                   key={item + i}
//                   onClick={onOptionClick}
//                   className={cnb(
//                     styles.SelectSimple__option,
//                     value === item && 'isSelected',
//                   )}
//                 >
//                   {item}
//                 </span>
//               );
//             })
//           ) : (
//             // No data indicator
//             <span className={styles.SelectSimple__option}>Нет данных</span>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectSimple;
