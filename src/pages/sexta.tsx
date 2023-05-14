import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'

export default function Friday() {
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
      `}>Peito</h1>

      <form onSubmit={handleSubmit}>
        <h2 className={`
          text-xl font-semibold mt-5
        `}>Selecione os exercícios</h2>
            <div className='flex flex-wrap'>
                <div className={` 
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl 
                  `}>
                    <input
                        id='supinoreto' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Supino Reto" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="supinoreto">Supino Reto</label>
                </div>
                
                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl 
                  `}>
                    <input 
                        id='supinoinclinado' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Supino Inclinado"
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="supinoinclinado">Supino Inclinado</label>
                </div> 

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl  
                  `}>
                    <input 
                        id='supinoinclinadodb' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Supino Inclinado DB" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="supinoinclinadodb">Supino Inclinado DB</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl   
                `}>
                    <input 
                    id='crucifixomaquina' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Crucifixo Máquina" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="crucifixomaquina">Crucifixo Máquina</label>
                </div>
                
                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl  
                `}>
                    <input 
                    id='crossover' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Cross Over" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="crossover">Cross Over</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='desenvolvdb' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Desenvolv. DB" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="desenvolvdb">Desenvolv. DB</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='elevlateraldb' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Elev. Lateral DB" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="elevlateraldb">Elev. Lateral DB</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='elevlateralUNI' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Elev. Lateral UNI" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="elevlateralUNI">Elev. Lateral UNI</label>
                </div>

                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl  
                `}>
                    <input 
                    id='antebraco' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Antebraço" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="antebraco">Antebraço</label>
                </div>

                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl  
                `}>
                    <input 
                    id='prancha' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Prancha" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="prancha">Prancha</label>
                </div>

            </div>
              <div>
                  <button className='bg-gray-400 border-none rounded-lg p-1 font-semibold text-black hover:scale-110 mb-2' 
                  type="submit">Começar Treino</button>
              </div>
      </form>
      <Page/>
    </div>
  )
}