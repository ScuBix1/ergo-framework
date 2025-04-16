import CheckIcon from '@/components/Icon/CheckIcon/CheckIcon';
import SelectName from '../components/SelectName/SelectName';

const students = [
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
  {
    firstname: 'test',
    lastname: 'nom',
  },
  {
    firstname: 'test1',
    lastname: 'nom',
  },
  {
    firstname: 'test2',
    lastname: 'nom',
  },
  {
    firstname: 'test3',
    lastname: 'nom',
  },
  {
    firstname: 'test4',
    lastname: 'nom',
  },
];

function Home() {
  return (
    <div>
      <h1 className='text-green-400'>Home Page</h1>
      <SelectName tabStudents={students} />
      <CheckIcon className={'w-[300px]'} />
    </div>
  );
}

export default Home;
