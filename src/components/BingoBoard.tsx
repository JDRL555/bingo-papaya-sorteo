import { useContext } from 'react'
import { BingoContext } from '../context/BingoContext'

export default function BingoBoard() {
  const bingoContext = useContext(BingoContext)

  return (
    <div className="bingo-board-container">
      <div className="bingo-board">
        {
          bingoContext?.bingoBoard.map((cell) => (
            <div 
              className="bingo-cell-container" 
              style={{ 
                background: `radial-gradient(circle at 30% 30%,${cell.colors[0]},${cell.colors[1]})`,
              }}
              data-letter={cell.letter}
              key={cell.number}
              onClick={() => bingoContext?.onClickCell(cell.number)}
            >
              <div className="bingo-cell">
                <p>{cell.number}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
