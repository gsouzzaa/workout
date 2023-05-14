import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'

export default function Saturday() {
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
                        id='bom dia' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Bom dia" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="bom dia">Bom dia</label>
                </div>
                
                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl 
                  `}>
                    <input 
                        id='mesaflexora' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Mesa Flexora"
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="mesaflexora">Mesa Flexora</label>
                </div> 

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl  
                  `}>
                    <input 
                        id='terrasumo' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Terra Sumô" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="terrasumo">Terra Sumô</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl   
                `}>
                    <input 
                    id='stiff' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Stiff" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="stiff">Stiff</label>
                </div>
                
                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl  
                `}>
                    <input 
                    id='cadeiraabd' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Cadeira Abd." onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="cadeiraabd">Cadeira Abd.</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='elevquadril' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Elev. Quadril" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="elevquadril">Elev. Quadril</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='agachbulgaro' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Agach. Búlgaro" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="agachbulgaro">Agachamento Búlgaro</label>
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
                    value="Prancha" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="antebraco">Prancha</label>
                </div>

                  <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl
                  `}>
                      <input 
                      id='absinfra' 
                      type="checkbox"
                      className={` 
                      bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                          `} 
                      value="ABS Infra" onChange={handleExerciseSelection}/> 
                      <label className='text-black font-semibold select-none' htmlFor="absinfra">ABS Infra</label>
                  </div>

                  <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl
                  `}>
                      <input 
                      id='panturrilha' 
                      type="checkbox"
                      className={` 
                      bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                          `} 
                      value="Panturrilha" onChange={handleExerciseSelection}/> 
                      <label className='text-black font-semibold select-none' htmlFor="panturrilha">Panturrilha</label>
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