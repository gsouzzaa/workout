import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'

export default function Tuesday() {
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

  //envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/selected?selectedExercises=${selectedExercises.join(',')}`)
  }

  //renderiza página
  return (
    <div className={`
        justify-self text-center pt-10
    `} >
      <h1 className='text-xl justify-self text-center'>Quadríceps</h1>
      <form onSubmit={handleSubmit}>
        <h2>Selecione os exercícios:</h2>
            <div className={`
                flex flex-col text-xl gap-2  p-2 m-2 justify-content items-center border rounded-xl bg-slate-800
            `}>
                <input id='leg' type="checkbox" value="Leg Press" onChange={handleExerciseSelection}/> 
                <label htmlFor="leg">Leg Press</label> 

                <input id='squat' type="checkbox" value="Agachamento" onChange={handleExerciseSelection}/> 
                <label htmlFor="squat">Agachamento</label> 
                
                <input id='cadeiraf' type="checkbox" value="Cadeira Flexora" onChange={handleExerciseSelection}/> 
                <label htmlFor="cadeiraf">Cadeira Flexora</label> 
                
                <input id='hack' type="checkbox" value="Hack" onChange={handleExerciseSelection}/> 
                <label htmlFor="hack">Hack</label>
            </div>
            <div className='position fixed top-0 left-0 m-3' >
                <Page/>
            </div>
            
        <button className='flex gap-2 mt-2' type="submit">Continuar</button>
      </form>
    </div>
  )
}
