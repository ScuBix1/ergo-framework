import { useState } from 'react';

const StarRating = (props) => {
  const { max = 4, value = 0, onChange } = props;
  const [hovered, setHovered] = useState(null);

  const handleClick = (index) => {
    if (onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className='flex gap-2'>
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = hovered !== null ? index <= hovered : index < value;

        return (
          <svg
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(index)}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill={isFilled ? 'black' : 'none'}
            stroke='black'
            strokeWidth='1.5'
            className='cursor-pointer transition-all'
          >
            <path d='M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.4 8.17L12 18.897l-7.334 3.866 1.4-8.17L.132 9.21l8.2-1.192z' />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
