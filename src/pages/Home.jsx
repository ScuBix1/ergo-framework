import Select from '../components/Select/Select';

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
      <Select tabStudents={students} />
    </div>
  );
}

export default Home;
