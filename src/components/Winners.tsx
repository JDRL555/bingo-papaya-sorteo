"use client"
import { useContext } from 'react'
import { BingoContext, BingoContextProps } from '@/context/BingoContext'

export default function Winners() {
  const {
    winners
  } = useContext(BingoContext) as BingoContextProps

  if(winners != "No hay ganadores aún") {
    return (
      <div className='winners'>
        <h2>{winners}</h2>
        <a>Haz click aqui para ver a los ganadores</a>
      </div>
    )
  } else {
    return (
      <div className='winners'>
        No hay ganadores aún
      </div>
    )
  }
}
