"use client"

import { useSearchParams } from 'next/navigation'
import { useContext } from 'react'
import { BingoContext, BingoContextProps } from '@/context/BingoContext'

export default function Winners() {
  const {
    winners
  } = useContext(BingoContext) as BingoContextProps

  const searchParams = useSearchParams()
  const linkdirecto = searchParams.get('linkdirecto')

  if(winners != "No hay ganadores aún") {
    return (
      <div className='winners'>
        <h2>{winners}</h2>
        <a className='next-draw' href={`/?linkdirecto=${linkdirecto}`}>
          Siguiente sorteo
        </a>
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
