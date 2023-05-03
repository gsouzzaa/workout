import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'
import IncrementInput from '@/components/Series'

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
            <div className='flex flex-wrap'>
                <div className={` 
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl hover:scale-110 
                  `}>
                    <input
                        id='leg' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Leg Press" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold ' htmlFor="leg">Leg Press</label>
                  <IncrementInput/>
                </div>

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl hover:scale-110 
                  `}>
                    <input 
                        id='smith' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Agachamento Smith" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold ' htmlFor="smith">Agachamento Smith</label>
                </div>
                
                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl hover:scale-110 
                  `}>
                    <input 
                        id='avançohalter' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Avanço com halteres" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold ' htmlFor="avançohalter">Avanço com halteres</label>
                </div> 

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl hover:scale-110 
                  `}>
                    <input 
                        id='Leg 80º' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Leg 80º" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold ' htmlFor="leg80">Leg 80º</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl hover:scale-110  
                `}>
                    <input 
                    id='squat' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Agachamento Livre" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="squat">Agachamento Livre</label>
                </div>
                
                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl hover:scale-110 
                `}>
                    <input 
                    id='cadeiraf' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Cadeira Flexora" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="cadeiraf">Cadeira Flexora</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl hover:scale-110
                `}>
                    <input 
                    id='hack' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Hack" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold' htmlFor="hack">Hack</label>
                </div>
            </div>

            <div>
                  <button className='bg-gray-400 border-none rounded-lg p-1 font-semibold text-black hover:scale-110 mb-2' 
                  type="submit">Continuar</button>
            </div>
      </form>
      <Page/>

    </div>
  )
}

export default Monday