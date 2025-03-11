"use client"

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import BingoContextProvider from '@/context/BingoContext'
import Main from '@/components/Main'
import bingoIcon from '../../public/bingo_icon-removebg.png'
import './App.css'

export default function App() {

  const searchParams = useSearchParams()

  const idsorteo = searchParams.get('idsorteo')
  const linkdirecto = searchParams.get('linkdirecto')

  console.log(idsorteo, linkdirecto)

  if(idsorteo && linkdirecto) {
    return (
      <BingoContextProvider>
        <h1>Sorteo número: {idsorteo}</h1>
        <Main />
      </BingoContextProvider>
    )
  } else {
    return (
      <div className='not-found'>
        <Image 
          src={bingoIcon}
          alt='bingo icono'
        />
        <h1>Juego o transmision no encontrados...</h1>
        <p>Asegurese de tener el enlace correcto.</p>
      </div>
    )
  }

}
