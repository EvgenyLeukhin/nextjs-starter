type Props = {
  fill?: string;
  isOpen: boolean;
};

const SelectArrow = ({
  fill = 'black',
  isOpen = false,
}: Props): JSX.Element => {
  return (
    <svg
      style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 10L12 14L8 10'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SelectArrow;
