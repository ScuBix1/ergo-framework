import { clsx } from 'clsx';

const CheckIcon = (props) => {
  const { className } = props;

  return (
    <svg
      className={clsx('w-[16px] h-[16px]', className)}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.3332 4L5.99984 11.3333L2.6665 8'
        stroke='#334155'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckIcon;
