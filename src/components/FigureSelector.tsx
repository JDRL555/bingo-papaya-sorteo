import { useContext } from 'react'
import { FigureName } from '../types/BingoFigure.types'
import { 
  BingoContext, 
  BingoContextProps 
} from '../context/BingoContext'

const figures: FigureName[] = [
  'carton_lleno',
  'linea_horizontal',
  'linea_vertical',
  'figura_1',
  'figura_2',
  'figura_3',
  'figura_4',
  'figura_5',
]

export default function FigureSelector() {

  const bingoContext = useContext(BingoContext) as BingoContextProps
  
  const handleSelectFigure = (figureName: FigureName) => {
    bingoContext.generateFigure(figureName)
    // console.log(bingoContext.figure);
    bingoContext.setSelectedNumbers([])
    console.log(bingoContext.figure)
  }

  return (
    <div className="figures">
      <h2>Selecciona una figura:</h2>
      {figures.map((figure) => (
        <button
          key={figure}
          onClick={() => handleSelectFigure(figure)}
        >
          {figure.replace('_', ' ')}
        </button>
      ))}
    </div>
  )
}
