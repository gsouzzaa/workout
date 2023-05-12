import React from 'react';
import { useRouter } from 'next/router';
import Page from '@/components/backbutton';
import CheckboxWithModal from '@/components/CheckboxwithModal'

export default function Selected() {
  const router = useRouter();

  // transforma exercícios selecionados em array
  const selectedExercises = router.query.selectedExercises;
  const exercisesArray = typeof selectedExercises === 'string' ? selectedExercises.split(',') : [];

  //const {numberValue} = router.query;
  //{numberValue}

  // renderiza exercícios
  return (
    <div className={`
    p-2 m-2 flex flex-col gap-2
    `}>
      <h1 className='m-2 text-red-500 flex text-justify justify-center text-6xl font-bold p-3 border-b-2 border-red-800'>Quadríceps</h1>
      <ul>
      {exercisesArray.map((exercise) => (
        <li key={exercise} className={`
        exercise-${1} mb-3 text-xl justify-self text-center
        `}>
          <div className='w-fit m-5 display flex flex-row gap-8 p-6 justify-center items-center font-bold border-b-2 border-b-zinc-500 text-2xl'>
            {exercise}
            <CheckboxWithModal />
            <CheckboxWithModal />
            <CheckboxWithModal />
            <CheckboxWithModal />
          </div>
        </li>
        ))}
      </ul>
      <Page/>
    </div>
  )
}