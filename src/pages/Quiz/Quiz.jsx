import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SelectName from '../../components/SelectName/SelectName';
import FormRating from './FormRating/FormRating';
import SignArea from './SignArea/SignArea';

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

function Quiz() {
  const [selectedStudent, setSelectedStudent] = useState('');
  const titleClassName = 'text-4xl font-bold';
  const subTitleClassName = 'text-3xl font-bold';

  return (
    <section className='my-[75px] mx-[60px]'>
      <div className=' flex flex-col items-center justify-center gap-y-[10px]'>
        <h1 className={titleClassName}>Application mobile</h1>
        <h2 className={subTitleClassName}>Mr Doe</h2>
        <p className='flex gap-x-3 font-bold'>
          <span>13/04/2024</span>
          <span>Salle 103</span>
        </p>
      </div>
      <div className='mt-[50px] flex flex-col gap-y-[25px]'>
        <h3 className={subTitleClassName}>Qui êtes-vous ?</h3>
        <SelectName
          tabStudents={students}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
      </div>
      {selectedStudent && (
        <>
          <div className='flex flex-col gap-y-[30px] mt-[70px]'>
            <h3 className={subTitleClassName}>Laissez votre avis :</h3>
            <FormRating />
          </div>
          <div className='flex flex-col items-center gap-y-[35px] mt-[65px]'>
            <h3 className='text-xl font-bold'>Veuillez signer :</h3>
            <SignArea />
          </div>
          <div className='flex justify-center mt-[65px]'>
            <Button asChild className='w-fit rounded-none'>
              <a href={`/quiz/regards`}>Evoyer vos réponses</a>
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default Quiz;
