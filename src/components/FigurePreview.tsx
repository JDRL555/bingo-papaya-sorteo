"use client"
import { useContext } from 'react'
import { BingoContext, BingoContextProps } from '../context/BingoContext'
import Image from 'next/image'
import bingoIcon from '../../public/bingo_icon.jpg'

export default function FigurePreview() {
  const bingoContext = useContext(BingoContext) as BingoContextProps

  return (
    <div className="figure-preview">
      {
        Object.entries(bingoContext.figure).map(([cell, isFromFigure]) => (
          <div 
            className={`${isFromFigure ? 'figure-cell figure-highlight' : 'figure-cell'}`} 
            key={cell}
          >
            {cell === "n3" ? (
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={bingoIcon}
                  alt="Bingo Icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ) : (
              cell.toUpperCase()
            )}
          </div>
        ))
      }
    </div>
  )
}
