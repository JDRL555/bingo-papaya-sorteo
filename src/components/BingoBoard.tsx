"use client"
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { BingoContext, BingoContextProps } from '../context/BingoContext'

export default function BingoBoard() {
  const {
    selectedNumbers,
    setWinners,
    figureName,
    figure,
    onClickCell,
    bingoBoard
  } = useContext(BingoContext) as BingoContextProps

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await axios.post('/api/bingo', {
          selectedNumbers,
          figure,
        })
        const { winners } = response.data
        
        if (winners.length > 0) {

          winners.map(async (idcarton: number) => {
            const winnersResponse = await axios.post("/api/winner", {
              idcarton,
              figura: figureName,
              premio: 5000 // Esto es temporal
            })
            console.log(winnersResponse.data)
          })

          setWinners(`¡Tenemos ${winners.length} ganador(es)!`)
        } else {
          setWinners("No hay ganadores aún")
        }
      } catch (error) {
        console.error(error)
      }
    }

    if(selectedNumbers.length !== 0) {
      fetchWinners()
    }

  }, [selectedNumbers, figure])

  return (
    <div className="bingo-board-container">
      <div className="bingo-board">
        {
          bingoBoard.map((cell) => (
            <div 
              className="bingo-cell-container" 
              style={{ 
                background: `radial-gradient(circle at 30% 30%, ${cell.colors[0]}, ${cell.colors[1]})`,
              }}
              data-letter={cell.letter}
              key={cell.number}
              onClick={() => onClickCell(cell.number)}
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
