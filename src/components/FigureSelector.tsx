import { useContext } from 'react'
import { FigureName } from '../types/BingoFigure.types'
import { 
  BingoContext, 
  BingoContextProps 
} from '../context/BingoContext'
import { FIGURES } from '../constants/BingoFigures'

export default function FigureSelector() {

  const bingoContext = useContext(BingoContext) as BingoContextProps
  
  const handleSelectFigure = (figureName: FigureName) => {
    bingoContext.generateFigure(figureName)
    bingoContext.setSelectedNumbers([])
  }

  return (
    <div className="figures">
      <h2>Selecciona una figura:</h2>
      <select
        onChange={(e) => handleSelectFigure(e.target.value as FigureName)}
      >
        {FIGURES.map((figure) => (
          <option
            key={figure}
            onClick={() => handleSelectFigure(figure)}
            value={figure}
          >
            {figure.replace('_', ' ')}
          </option>
        ))}
      </select>
    </div>
  )
}
