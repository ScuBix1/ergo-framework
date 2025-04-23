import clsx from 'clsx';

const Question = (props) => {
  const { title, className, response } = props;

  return (
    <div
      className={clsx(
        'flex flex-col bg-[#F1F0EE] px-[60px] pt-[60px] pb-[30px] gap-y-[25px]',
        className
      )}
    >
      <p>{title}</p>
      {response}
    </div>
  );
};

export default Question;
