import { ChangeEvent, useState } from 'react';
import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import { TOption } from '@/types/common';
import {
  Dropdown,
  ErrorText,
  Label,
  NativeSelect,
  SelectWrapper,
} from './parts';
import styles from './Select.module.scss';

type Props = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  valueObj: TOption | undefined;
  options: TOption[];
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const Select = ({
  id,
  name,
  label,
  placeholder,
  valueObj,
  options,
  error = '',
  isSuccess = false,
  disabled = false,
  onBlur,
  onChange,
  setFieldValue,
}: Props) => {
  const { primary, secondary } = textColors;

  // dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isToched, setToched] = useState<boolean>(false);

  // onSelectClick
  const onSelectClick = () => {
    if (!disabled) {
      setDropdownOpen(!isDropdownOpen);
      setToched(true);
    }
  };

  // pass optionObj
  const onOptionClick = (option: TOption): void => {
    setFieldValue(name, option);
  };

  const successCondition =
    isSuccess || (isToched && Boolean(valueObj?.value) && !isDropdownOpen);

  return (
    <SelectWrapper
      error={error}
      disabled={disabled}
      isSuccess={successCondition}
      setDropdownOpen={setDropdownOpen}
    >
      {/* label */}
      {label && <Label id={id} label={label} />}

      {/* SELECT CUSTOM */}
      <div className={styles.Select} onClick={onSelectClick}>
        {/* selected value */}
        {valueObj?.value ? (
          <span style={{ color: primary }}>{valueObj?.label}</span>
        ) : (
          <span style={{ color: secondary }}>{placeholder}</span>
        )}

        {/* DROPDOWN */}
        {isDropdownOpen && (
          <Dropdown
            options={options}
            valueObj={valueObj}
            onOptionClick={onOptionClick}
          />
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
        onBlur={onBlur}
        options={options}
        onChange={onChange}
        value={valueObj?.value}
        placeholder={placeholder}
      />

      {/* validation error message */}
      {error && <ErrorText error={error} />}
    </SelectWrapper>
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
