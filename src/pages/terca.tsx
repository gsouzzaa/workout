
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'
import CheckboxWithModal from '@/components/CheckboxwithModal'
const Monday = () => {
  const router = useRouter()

  //armazena exercícios
  const [selectedExercises, setSelectedExercises] = useState<string[]>([])

  const handleExerciseSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement 
    if (selectedExercises.includes(value)) {
      setSelectedExercises(selectedExercises.filter(exercise => exercise !== value))
    } else {
      setSelectedExercises([...selectedExercises, value])
    }
  }

  const [numberValue, setNumberValue] = useState(0);
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(Number(event.target.value));
  };

  //envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/selected?selectedExercises=${selectedExercises.join(',')}&numberValue=${numberValue}`)
  }
    
  //renderiza página
  return (

    <div className={`
              justify-self text-center pt-10
            `} >
              <h1 className={`
                text-5xl font-bold justify-self text-center mb-2
              `}>Quadríceps</h1>

            <div className='w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
            text-2xl text-black '>
              <h1 >Cadeira Extensora</h1>
              <CheckboxWithModal />
              <CheckboxWithModal />
              <CheckboxWithModal />
              <CheckboxWithModal />
            </div>

              <Page/>
    </div>
  )
}

export default Monday