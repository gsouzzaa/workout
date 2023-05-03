import Link from "next/link";

export default function Treinos() {
    return (
      <div>
        <h2 className={`
        flex mb-2 m-5 rounded-md p-2 justify-center text-center text-5xl text-gray-200 font-bold bg-gray-900 gap-2
        `}>Rotina de treino</h2>
        
        <nav>
          <ul>
            <li>
              <Link href="/segunda" passHref>
                <div className={` 
                flex mb-2 m-5 rounded-md p-2 justify-center text-center text-3xl text-gray-300 font-bold bg-gray-600
                `}>Segunda</div>
              </Link>
            </li>
            <li>
              <Link href="/terca" passHref>
                <div className={` 
                flex mb-2 m-5 rounded-md p-2 justify-center text-center text-3xl text-gray-300 font-bold bg-gray-700
                `}>Terça</div>
              </Link>
            </li>
            <li>
              <Link href="/quarta" passHref>
                <div className={` 
                flex mb-2 m-5 rounded-md p-2 justify-center text-center text-3xl text-gray-300 font-bold bg-gray-800
                `}>Quarta</div>
              </Link>
            </li>
            <li>
              <Link href="/quinta" passHref>
                <div className={` 
                flex mb-2 m-5 rounded-md p-2 justify-center text-center text-3xl text-gray-300 font-bold bg-gray-700
                `}>Quinta</div>
              </Link>
            </li>
            <li>
              <Link href="/sexta" passHref>
                <div className={` 
                flex mb-2 m-5 rounded-md p-2 justify-center text-center text-3xl text-gray-300 font-bold bg-gray-600
                `}>Sexta</div>
              </Link>
            </li>
            <li>
              <Link href="/sabado" passHref>
                <div className={` 
                flex mb-2 m-5 rounded-md p-2 justify-center text-center text-3xl text-gray-300 font-bold bg-gray-500
                `}>Sábado</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }