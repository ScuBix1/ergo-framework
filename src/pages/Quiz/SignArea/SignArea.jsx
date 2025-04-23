import clsx from 'clsx';

const SignArea = (props) => {
  const { className } = props;

  return (
    <div className={clsx('w-[300px] h-[150px] bg-[#D9D9D9]', className)}></div>
  );
};

export default SignArea;
