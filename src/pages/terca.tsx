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
      <h1 className={`
        text-5xl font-bold justify-self text-center mb-2
      `}>Costas</h1>

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
                        id='pulleyt' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Pulley Triângulo" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="pulleyt">Pulley Triângulo</label>
                </div>

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl
                  `}>
                    <input 
                        id='Cavalinho' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Cavalinho" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="Cavalinho">Remada Cavalinho</label>
                </div>
                
                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl 
                  `}>
                    <input 
                        id='remadatri' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Remada Triângulo"
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="remadatri">Remada Baixa Triângulo</label>
                </div> 

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl  
                  `}>
                    <input 
                        id='remadacurvada' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Remada Curvada" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="remadacurvada">Remada Curvada</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl   
                `}>
                    <input 
                    id='Serrote' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Serrote" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="Serrote">Serrote</label>
                </div>
                
                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl  
                `}>
                    <input 
                    id='pulleyfrente' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Pulley Frente" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="pulleyfrente">Pulley Frente</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='crucifixoI' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Crucifixo Inverso" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="crucifixoI">Crucifixo Inverso</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='posteriorxcross' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Posterior X Cross" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="posteriorxcross">Posterior X Cross</label>
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