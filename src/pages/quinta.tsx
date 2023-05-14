import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/backbutton'

export default function Thursday() {
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
      `}>Braço</h1>

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
                        id='tricepscorda' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Tríceps Corda" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="tricepscorda">Tríceps Corda</label>
                </div>

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl
                  `}>
                    <input 
                        id='testacross' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Testa no Cross" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="testacross">Testa no Cross</label>
                </div>
                
                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl 
                  `}>
                    <input 
                        id='tricepsfrances' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Tríceps Francês"
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="tricepsfrances">Tríceps Francês</label>
                </div> 

                <div className={`
                    w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                    text-2xl  
                  `}>
                    <input 
                        id='tricepspulley' 
                        type="checkbox" 
                        className={` 
                        bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black 
                        `} 
                        value="Tríceps Pulley" 
                        onChange={handleExerciseSelection}
                        /> 
                    <label className='text-black font-semibold select-none' htmlFor="tricepspulley">Tríceps Pulley</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl   
                `}>
                    <input 
                    id='coiceUNI' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Tríceps Coice UNI" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="coiceUNI">Tríceps Coice UNI</label>
                </div>
                
                <div className={`
                   w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                   text-2xl  
                `}>
                    <input 
                    id='roscaalternada' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Rosca Alternada" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="roscaalternada">Rosca Alternada</label>
                </div>
                
                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='roscadireta' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Rosca Direta" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="roscadireta">Rosca Direta</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='roscabancodb' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Rosca Banco DB" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="roscabancodb">Rosca Banco DB</label>
                </div>

                <div className={`
                  w-fit m-5 border rounded-md bg-gray-300 hover:bg-gray-400 px-2 py-2 flex items-center gap-4
                  text-2xl
                `}>
                    <input 
                    id='roscamartelocorda' 
                    type="checkbox"
                    className={` 
                    bg-white  flex flex-row w-5 h-5 border rounded-sm appearance-none border-black checked:bg-black checked:border-black
                        `} 
                    value="Rosca Martelo Corda" onChange={handleExerciseSelection}/> 
                    <label className='text-black font-semibold select-none' htmlFor="roscamartelocorda">Rosca Martelo Corda</label>
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