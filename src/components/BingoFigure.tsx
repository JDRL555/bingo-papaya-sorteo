"use client"

import { useContext } from "react"
import { BingoContext, BingoContextProps } from "../context/BingoContext"
import FigurePreview from "./FigurePreview"
import Winners from "./Winners"

export default function BingoFigure() {
  const { bingo } = useContext(BingoContext) as BingoContextProps

  return (
    <div className="figure-options-container">
      <div className="figure-container">
        <h3 className="selected-figure">
          Estamos jugando: <br />
          {bingo.selectedDraw?.figura.replace("_", " ")}
        </h3>
        <FigurePreview />
        <Winners />
      </div>
    </div>
  )
}
