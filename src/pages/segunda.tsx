import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'

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
      <h1 className={`
        text-5xl font-bold justify-self text-center mb-2
      `}>Quadríceps</h1>

      <form onSubmit={handleSubmit}>
        <h2 className={`
          text-xl font-semibold mt-5
        `}>Selecione os exercícios</h2>
            <div>
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 px-3 py-3 flex items-center gap-10
                  text-xl 
                `}>
                    <input 
                        id='leg' 
                        type="checkbox" 
                        className={` 
                        flex flex-row w-5 h-5 border rounded-sm
                        `}  value="Leg Press" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="leg">Leg Press</label>
                </div> 

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 px-3 py-3 flex items-center gap-10
                  text-xl 
                `}>
                    <input 
                    id='squat' 
                    type="checkbox"
                    className={` 
                        flex flex-row w-5 h-5 border rounded-sm
                        `} 
                    value="Agachamento" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="squat">Agachamento</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 px-3 py-3 flex items-center gap-10
                  text-xl 
                `}>
                    <input 
                    id='cadeiraf' 
                    type="checkbox"
                    className={` 
                        flex flex-row w-5 h-5 border rounded-sm
                        `} 
                    value="Cadeira Flexora" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="cadeiraf">Cadeira Flexora</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 px-3 py-3 flex items-center gap-10
                  text-xl 
                `}>
                    <input 
                    id='hack' 
                    type="checkbox"
                    className={` 
                        flex flex-row w-5 h-5 border rounded-sm
                        `} 
                    value="Hack" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="hack">Hack</label>
                </div>
            </div>
            <Page/>
            <div>
                  <button className='bg-gray-400 border-none rounded-lg p-1 font-semibold text-black' type="submit">Continuar</button>
            </div>
      </form>
    </div>
  )
}

export default Monday