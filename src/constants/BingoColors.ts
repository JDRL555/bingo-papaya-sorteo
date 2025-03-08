import { CSSProperties } from "react"

export type Letters = "B" | "I" | "N" | "G" | "O"

type BingoColors = {
  [key in Letters]: CSSProperties["color"][]
}

export const BINGO_COLORS: BingoColors = {
  B: ["#ff6666", "#800000"],
  I: ["#ffff66", "#668000"],
  N: ["#66ff66", "#048000"],
  G: ["#6666ff", "#000b80"],
  O: ["#cc66ff", "#750080"],
}