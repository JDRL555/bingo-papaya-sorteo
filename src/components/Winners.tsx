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

  if(winners.length !== 0) {
    return (
      <div className='winners'>
        <h2>¡Tenemos {winners.length} ganador/es!</h2>
        <table className='winners-table'>
          <thead>
            <tr>
              <th>ID del carton</th>
              <th>Nombre del ganador</th>
            </tr>
          </thead>
          <tbody>
            {
              winners.map(winner => (
                <tr key={winner.idcarton}>
                  <td>{winner.idcarton}</td>
                  <td>{winner.nombre}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
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
