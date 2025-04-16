import SelectName from '../components/SelectName/SelectName';

const students = [
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
  {
    firstname: 'bastian',
    lastname: 'monnin',
  },
];

function Home() {
  return (
    <div>
      <h1 className='text-green-400'>Home Page</h1>
      <SelectName tabStudents={students} />
    </div>
  );
}

export default Home;
