import Question from '@/components/Question/Question';
import StarRating from '@/components/StarRating/StarRating';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const FormRating = () => {
  const [note, setNote] = useState(0);

  return (
    <form className='flex flex-col gap-y-[30px]'>
      <Question
        title='Le contenu du cours était-il clair et compréhensible ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title="Le cours couvrait-il l'ensemble des sujets attendus ?"
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Avez-vous trouvé le cours suffisamment approfondi ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Le rythme du cours vous a-t-il convenu ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Le formateur expliquait-il les concepts de manière claire ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Le formateur était-il à l’écoute des questions ou remarques ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title="Le formateur gérait-il bien le temps et l'organisation de la session ?"
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Les supports de cours (diapos, documents, etc.) étaient-ils utiles ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Les outils utilisés (plateforme, visio, quiz…) étaient-ils faciles à utiliser ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Vous êtes-vous senti(e) impliqué(e) pendant le cours ?'
        response={<StarRating value={note} onChange={setNote} />}
      />
      <Question
        title='Y avait-il suffisamment d’échanges ou d’interactivité ?'
        response={
          <Input
            type='text'
            placeholder='Taper votre réponse ici...'
            className='w-[300px] bg-white rounded-none'
          />
        }
      />
      <Question
        title='Avez-vous acquis de nouvelles compétences ou connaissances ?'
        response={
          <Input
            type='text'
            placeholder='Taper votre réponse ici...'
            className='w-[300px] bg-white rounded-none'
          />
        }
      />
    </form>
  );
};

export default FormRating;
