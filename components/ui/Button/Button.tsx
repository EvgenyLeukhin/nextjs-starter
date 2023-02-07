const Button = (): JSX.Element => {
  return <button>+++</button>;
};

export default Button;

// import classNames from 'classnames/bind';
// import { ButtonList } from '@/types/common';
// import styles from './Button.module.scss';

// type Props = {
//   href?: string;
//   type?: ButtonList;
//   disabled?: boolean;
//   download?: boolean;
//   icon?: string;
//   children: React.ReactNode;
//   onClick?: (e: React.MouseEvent) => void;
// };

// const Button = ({
//   href = '',
//   type = ButtonList.primary,
//   disabled = false,
//   download = false,
//   icon,
//   onClick = () => null,
//   children,
// }: Props): JSX.Element => {
//   const cnb = classNames.bind(styles);

//   if (href) {
//     return (
//       <a
//         href={href}
//         onClick={onClick}
//         target='_blank'
//         rel='noopener noreferrer'
//         style={{ backgroundImage: icon ? `url(${icon})` : 'none' }}
//         download={download}
//         className={cnb(
//           styles.Button,
//           styles[type],
//           disabled && styles.disavled,
//           icon && styles.withIcon,
//         )}
//       >
//         {children}
//       </a>
//     );
//   } else {
//     return (
//       <button
//         onClick={onClick}
//         disabled={disabled}
//         style={{ backgroundImage: icon ? `url(${icon})` : 'none' }}
//         className={cnb(styles.Button, styles[type], icon && styles.icon)}
//       >
//         {children}
//       </button>
//     );
//   }
// };

// export default Button;
