import { FigureName } from "../types/BingoFigure.types";

interface Figure {
  name: FigureName,
  gain: number,
}

export const FIGURES: Figure[] = [
  {
    name: "carton_lleno",
    gain: 20
  },
  {
    name: "linea_horizontal",
    gain: 15
  },
  {
    name: "linea_vertical",
    gain: 15
  },
  {
    name: "figura_1",
    gain: 10
  },
  {
    name: "figura_2",
    gain: 10
  },
  {
    name: "figura_3",
    gain: 10
  },
  {
    name: "figura_4",
    gain: 10
  },
  {
    name: "figura_5",
    gain: 10
  },
]