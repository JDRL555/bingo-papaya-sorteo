import { useContext } from 'react'
import { BingoContext, BingoContextProps } from '../context/BingoContext'
import Icon from '../assets/bingo_icon.jpg'

export default function FigurePreview() {
  const bingoContext = useContext(BingoContext) as BingoContextProps

  return (
    <div className="figure-preview">
      {
        Object.entries(bingoContext.figure).map(([cell, isFromFigure]) => (
          <div 
            className={`${isFromFigure ? 'figure-cell figure-highlight' : 'figure-cell'}`} 
            key={cell}
            style={cell === "n3" ? {backgroundColor: "white", backgroundImage: `url('${Icon}')`, backgroundSize: "cover", backgroundPosition: "center"} : {}}
          >
            {cell !== "n3" && cell.toUpperCase()}
          </div>
        ))
      }
    </div>
  )
}
