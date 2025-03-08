import { CSSProperties } from 'react'

export interface BingoCell {
  number: number,
  colors: CSSProperties["color"][],
  clicked: boolean,
  letter: "B" | "I" | "N" | "G" | "O" | ""
}