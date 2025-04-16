import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectItem } from '@radix-ui/react-select';
import clsx from 'clsx';
import { useState } from 'react';
import CheckIcon from '../Icon/CheckIcon/CheckIcon';

const SelectName = (props) => {
  const { tabStudents } = props;
  const [selectedStudent, setSelectedStudent] = useState('');

  return (
    <Select value={selectedStudent} onValueChange={setSelectedStudent}>
      <SelectTrigger
        className={clsx('w-[180px]', {
          'bg-[#F1F5F9]': selectedStudent,
        })}
      >
        <SelectValue placeholder='Choisir un nom'>
          {selectedStudent ? (
            <span className='flex gap-4 items-center'>
              <CheckIcon /> {selectedStudent}
            </span>
          ) : (
            ''
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className='-ml-[9px]'>
        {tabStudents.map((student, key) => {
          return (
            <SelectItem
              className='hover:bg-gray-100 hover:border-0 cursor-pointer px-4 py-2 data-[highlighted]:outline-none data-[highlighted]:ring-0 data-[highlighted]:bg-gray-100 data-[state=checked]:bg-[#F1F5F9] '
              key={`student-${key}`}
              value={`${student.firstname} ${student.lastname}`}
            >
              {student.firstname} {student.lastname}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectName;
