import { ChangeEvent, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SelectSimple.module.scss';

type TOption = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  name: string;
  label?: string;
  value: string;
  options: TOption[];
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (v: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectSimple = ({
  id,
  name,
  label,
  value,
  options,
  error = '',
  isSuccess = false,
  disabled = false,
  onBlur,
  onChange,
}: Props) => {
  const cnb = classNames.bind(styles);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cnb(
        styles.SelectSimple,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && (
        <label htmlFor={id} className={styles.SelectSimple__label}>
          {label}
        </label>
      )}

      {/* select custom ref */}
      <div className={styles.SelectSimple__selectRef}></div>

      {/* dropdown */}
      <div className={styles.SelectSimple__dropdown}></div>

      {/* select native */}
      <select
        id={id}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={!disabled ? onChange : () => null}
      >
        {/* no data option */}
        <option value='' disabled>
          No data
        </option>

        {options.map((option, index) => {
          const { value, label } = option;

          return (
            <option key={`${label}__${index}`} value={value}>
              {label}
            </option>
          );
        })}
      </select>

      {/* validation error message */}
      {error && <span className={styles.SelectSimple__error}>{error}</span>}
    </div>
  );
};

export default SelectSimple;

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

//       {/* native select */}
//       <select
//         hidden
//         id={id}
//         name={name}
//         ref={selectInput}
//         defaultValue={value}
//         // onChange={(e: any) => onChange(e)}
//         className={styles.SelectSimple__selectNative}
//       >
//         {options?.map((option, i) => (
//           <option key={option + i} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       {/* validation error message */}
//       {error && <span className={styles.SelectSimple__errorText}>{error}</span>}
//     </div>
//   );
// };

// export default SelectSimple;
