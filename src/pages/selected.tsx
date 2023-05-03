import React from 'react';
import { useRouter } from 'next/router';
import Page from '@/components/backbutton';
import IncrementInput from '@/components/Series';

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
      
      <h1 className=' w-auto m-2 flex text-justify justify-center text-3xl font-bold rounded-md border overflow-hidden p-1'>Quadríceps</h1>
      <ul className='text-xl'>
      {exercisesArray.map((exercise) => (
        <li key={exercise} className={`
        exercise-${1} mb-3 text-xl justify-self text-center 
        `}>
          {exercise} 
        </li>
        ))}
      </ul>
      <Page/>
    </div>
  )
}