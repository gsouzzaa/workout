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
    p-5 m-5 flex flex-col gap-2
    `}>
      <h1 className='m-2 text-red-500 flex text-justify justify-center text-6xl font-bold p-2 border-b-2 border-red-800 w-screen'>Quadríceps</h1>
      <ul className='text-xl'>
      {exercisesArray.map((exercise) => (
        <li key={exercise} className={`
        exercise-${1} mb-3 text-xl justify-self text-center 
        `}>
          <div className='display flex gap-8 m-3 p-5 justify-center items-center font-bold border-b-2 border-b-zinc-500 text-2xl w-screen'>
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