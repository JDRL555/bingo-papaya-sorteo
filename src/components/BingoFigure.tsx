"use client"
import { useContext } from 'react'
import { BingoContext } from '../context/BingoContext'
import FigureSelector from './FigureSelector'
import FigurePreview from './FigurePreview'

export default function BingoFigure() {
  const bingoContext = useContext(BingoContext)

  return (
    <div className="figure-options-container">
      <FigureSelector />
      <div className="figure-container">
        <h3 className="selected-figure">
          Estamos jugando: <br /> {bingoContext?.selectedFigure.replace('_', ' ')}
        </h3>
        <FigurePreview />
      </div>
    </div>
  )
}
