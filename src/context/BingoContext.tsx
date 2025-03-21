"use client"
import React, { useState } from 'react'
import { FigureName, Pattern } from '../types/BingoFigure.types'
import { BINGO_COLORS } from '../constants/BingoColors'
import { BingoGame } from '@/types/Bingo.types'

export interface BingoContextProps {
  bingo: BingoGame,
  winners: string,
  setWinners: (winner: string) => void
  setBingo: (bingo: BingoGame) => void,
  onClickCell: (num: number) => Promise<void>
  generateFigure: (figure: FigureName) => void
}

const BingoContext = React.createContext<BingoContextProps | undefined>(undefined)

export default function BingoContextProvider({ children }: { children: React.ReactNode }) {

  const [winners, setWinners] = useState<string>("No hay ganadores aún")

  const getCellColor = (num: number) => {
    if(num >= 1 && num <= 15) return BINGO_COLORS.B
    if(num >= 16 && num <= 30) return BINGO_COLORS.I
    if(num >= 31 && num <= 45) return BINGO_COLORS.N
    if(num >= 46 && num <= 60) return BINGO_COLORS.G
    if(num >= 61 && num <= 75) return BINGO_COLORS.O
    return []
  }

  const getCellLetter = (num: number) => {
    if(num >= 1 && num <= 15) return "B"
    if(num >= 16 && num <= 30) return "I"
    if(num >= 31 && num <= 45) return "N"
    if(num >= 46 && num <= 60) return "G"
    if(num >= 61 && num <= 75) return "O"
    return ""
  }

  const onClickCell = async (num: number): Promise<void> => {
    if(!bingo.selectedDraw.gano) {
      const newBoard = bingo.bingoBoard.map(cell => {
        if (cell.number === num) {
          return {
            ...cell,
            clicked: !cell.clicked,
            colors: cell.clicked ? ["#707070", "#1e1e1e"] : getCellColor(num),
          }
        }
        return cell
      })
    
      const newNumbers = newBoard.filter(cell => cell.clicked).map(cell => cell.number)
    
      setBingo({
        ...bingo,
        bingoBoard: newBoard,
        selectedNumbers: newNumbers,
      })
    }
  }
  

  const [bingo, setBingo] = useState<BingoGame>({
    draws: [],
    figure: {
      "b1": true, "i1": true, "n1": true, "g1": true, "o1": true,
      "b2": true, "i2": true, "n2": true, "g2": true, "o2": true, 
      "b3": true, "i3": true, "n3": false, "g3": true, "o3": true,
      "b4": true, "i4": true, "n4": true, "g4": true, "o4": true,
      "b5": true, "i5": true, "n5": true, "g5": true, "o5": true
    },
    bingoBoard: Array.from({ length: 75 }).map((_, index) => {
      const num = index + 1
      return {
        number: num,
        colors: ["#707070", "#1e1e1e"],
        clicked: false,
        letter: getCellLetter(num)
      }
    }),
    selectedDraw: {
      idsorteo: 0,
      fecha: "",
      figura: "carton_lleno",
      gano: false,
      premio: 0
    },
    selectedNumbers: []
  })

  const generateFigure = (figureName: FigureName): void => {

    let pattern: Pattern[] = []
    
    const newFigure = {
      "b1": false, "i1": false, "n1": false, "g1": false, "o1": false,
      "b2": false, "i2": false, "n2": false, "g2": false, "o2": false, 
      "b3": false, "i3": false, "n3": false, "g3": false, "o3": false,
      "b4": false, "i4": false, "n4": false, "g4": false, "o4": false,
      "b5": false, "i5": false, "n5": false, "g5": false, "o5": false
    }
  
    switch (figureName) {
      case 'carton_lleno':
        pattern = [
          "b1", "i1", "n1", "g1", "o1",
          "b2", "i2", "n2", "g2", "o2",
          "b3", "i3", "n3", "g3", "o3",
          "b4", "i4", "n4", "g4", "o4",
          "b5", "i5", "n5", "g5", "o5"
        ]
        break
      case 'linea_horizontal':
        // linea horizontal central (temporal)
        pattern = [
          "b3", "i3", "n3", "g3", "o3"
        ]
        break
      case 'linea_vertical':
        // linea vertical central (temporal)
        pattern = [
          "n1", "n2", "n3", "n4", "n5"
        ]
        break
      case 'figura_1':
        // equis
        pattern = [
          "b1", "i2", "n3", "g4", "o5", 
          "b5", "i4", "n3", "g2", "o1"
        ]
        break
      case 'figura_2':
        // cruz
        pattern = [
          "b3", "i3", "n3", "g3", "o3",
          "n1", "n2", "n4", "n5"
        ]
        break
      case 'figura_3':
        // escalera
        pattern = [
          "b5", "i5", "i4", "n4", "g3", "g2", "o2", "o1"
        ]
        break
      case 'figura_4':
        // equis mas pequeña
        pattern = [
          "i2", "i4", "g2", "g4"
        ]
        break
      case 'figura_5':
        // ajedrez
        pattern = [
          "b1", "b3", "b5", "i2", "i4", "n1", "n3", "n5", "g2", "g4", "o1", "o3", "o5"
        ]
        break
    }
    
    Object.keys(newFigure).map(cell => newFigure[cell as Pattern] = pattern.includes(cell as Pattern))
    
    newFigure.n3 = false

    setBingo({
      ...bingo,
      figure: newFigure
    })
  }

  

  return (
    <BingoContext.Provider value={{
      bingo,
      setBingo, 
      winners,
      setWinners,
      onClickCell,
      generateFigure 
    }}>
      { children }
    </BingoContext.Provider>
  )
}

export {
  BingoContext
}
