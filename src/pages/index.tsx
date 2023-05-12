import Dieta from '@/components/Diet'
import Treinos from '@/components/Treinos'

export default function IndexPage (){
  return (
    <div>
      <nav>
        <div><Treinos /></div>
        <div><Dieta /></div>
      </nav>
    </div>
  )
}