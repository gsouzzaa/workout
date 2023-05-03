import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  return (
    <div className={`
      position fixed left-1 top-1 font-medium text-gray-200
    `}>
      <button onClick={() => router.back()}>Voltar</button>
    </div>
  )
}

export default Page