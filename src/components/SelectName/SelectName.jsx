import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectItem } from '@radix-ui/react-select';

const SelectName = (props) => {
  const { tabStudents } = props;

  return (
    <Select className='relative'>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Choisir un nom' />
      </SelectTrigger>
      <SelectContent className='absolute'>
        {tabStudents.map((student, key) => {
          return (
            <SelectItem
              className='hover:bg-gray-100 text-yellow-700 cursor-pointer px-4 py-2'
              key={`student-${key}`}
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
