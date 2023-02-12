import { textColors } from '@/consts/colors';

type Props = {
  fill?: string;
  onClick?: () => void;
};

const CloseCross = ({
  fill = textColors.secondary,
  onClick,
}: Props): React.ReactElement => (
  <svg
    width='26'
    height='25'
    viewBox='0 0 26 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
  >
    <rect
      x='2'
      width='32'
      height='2'
      rx='1'
      transform='rotate(45 2 0)'
      fill={fill}
    />
    <rect
      x='1'
      y='23'
      width='32'
      height='2'
      rx='1'
      transform='rotate(-45 1 23)'
      fill={fill}
    />
  </svg>
);

export default CloseCross;
