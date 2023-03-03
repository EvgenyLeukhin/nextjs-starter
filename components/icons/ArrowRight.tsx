type Props = {
  color?: string;
  style?: React.CSSProperties;
};

const ArrowRight = ({ color = 'white', style }: Props): JSX.Element => (
  <svg
    style={style}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.75 11.9766H4.75'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <path
      d='M13.6992 5.951L19.7492 11.975L13.6992 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowRight;
