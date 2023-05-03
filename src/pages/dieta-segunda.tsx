import React from 'react'
import Page from '@/components/backbutton'

export default function DietaSegunda() {
    return (
        <div className={`
         justify-self text-center pt-10
        `}>
        <h1>Dieta para Segunda-feira</h1>
        <p>Café da manhã:</p>
        <ul>
          <li>Pão integral</li>
          <li>Queijo branco</li>
          <li>Presunto magro</li>
          <li>Chá verde</li>
        </ul>
  
        <p>Lanche da manhã:</p>
        <ul>
          <li>Frutas vermelhas</li>
          <li>Iogurte natural</li>
        </ul>
  
        <p>Almoço:</p>
        <ul>
          <li>Peito de frango grelhado</li>
          <li>Arroz integral</li>
          <li>Feijão</li>
          <li>Salada verde</li>
        </ul>
  
        <p>Lanche da tarde:</p>
        <ul>
          <li>Castanhas</li>
          <li>Maçã</li>
        </ul>
  
        <p>Jantar:</p>
        <ul>
          <li>Salmão grelhado</li>
          <li>Legumes no vapor</li>
          <li>Salada verde</li>
        </ul>
  
        <p>Ceia:</p>
        <ul>
          <li>Chá de camomila</li>
          <li>Queijo cottage</li>
        </ul>
        <div className='position fixed top-0 left-0 m-3' >
            <Page/>
        </div>
      </div>
        
    )
}