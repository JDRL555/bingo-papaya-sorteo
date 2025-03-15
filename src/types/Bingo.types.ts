import { sorteo } from "@prisma/client";
import { FigurePattern } from "./BingoFigure.types";
import { BingoCell } from "./BingoBoard.types";

export interface BingoGame {
  draws: sorteo[],
  figure: FigurePattern,
  selectedDraw: sorteo,
  selectedNumbers: number[],
  bingoBoard: BingoCell[]
}