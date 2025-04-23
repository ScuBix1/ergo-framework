import { Button } from '@/components/ui/button';

const QuizRegards = () => {
  return (
    <div className='flex flex-col items-center gap-y-[40px] my-[150px]'>
      <h1 className='text-4xl font-bold text-center'>
        Merci pour votre réponse
      </h1>
      <Button asChild className='w-fit rounded-none'>
        <a href={'/'}>Retourner à l'accueil</a>
      </Button>
    </div>
  );
};

export default QuizRegards;
