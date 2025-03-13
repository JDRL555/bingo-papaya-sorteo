import { Sorteo } from "@prisma/client";
import { FigurePattern } from "./BingoFigure.types";
import { BingoCell } from "./BingoBoard.types";

export interface BingoGame {
  draws: Sorteo[],
  figure: FigurePattern,
  selectedDraw: Sorteo,
  selectedNumbers: number[],
  bingoBoard: BingoCell[]
}