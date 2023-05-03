import React from 'react';
import { useRouter } from 'next/router';
import Page from '@/components/backbutton';


export default function Selected() {
  const router = useRouter();

  // transforma exercícios selecionados em array
  const selectedExercises = router.query.selectedExercises;
  const exercisesArray = typeof selectedExercises === 'string' ? selectedExercises.split(',') : [];

  // renderiza exercícios
  return (
    <div className={`
        p-20 m-20 flex flex-col gap-2
    `}>
      <h1 className='text-xl justify-self text-center'>Quadríceps</h1>
      <ul className='text-xl'>
        {exercisesArray.map(exercise => (
          <li key={exercise}>{exercise}</li>
        ))}
      </ul>
      <Page/>
    </div>

    
  );
};