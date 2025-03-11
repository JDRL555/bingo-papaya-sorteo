"use client"
import { useContext } from 'react'
import { BingoContext } from '../context/BingoContext'
import FigurePreview from './FigurePreview'
import Winners from './Winners'

export default function BingoFigure() {
  const bingoContext = useContext(BingoContext)

  return (
    <div className="figure-options-container">
      <div className="figure-container">
        <h3 className="selected-figure">
          Estamos jugando: <br /> {bingoContext?.selectedFigure.replace('_', ' ')}
        </h3>
        <FigurePreview />
        <Winners />
      </div>
    </div>
  )
}
