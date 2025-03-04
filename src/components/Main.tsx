import { useContext } from 'react'
import {
  BingoContext,
  BingoContextProps
} from '../context/BingoContext'
import FigureSelector from '../components/FigureSelector'
import FigurePreview from '../components/FigurePreview'

export default function Main() {
  const bingoContext = useContext(BingoContext) as BingoContextProps
  return (
    <main className="container">
      <div className="left-column">
        <FigureSelector />
        <div className="figure-container">
          <h3 className="selected-figure">
            Estamos jugando: <br /> {bingoContext.selectedFigure.replace('_', ' ')}
          </h3>
          <FigurePreview />
        </div>
      </div>
      {/* <div className="right-column">
        <BingoBoard
          selectedFigure={selectedFigure}
          selectedNumbers={selectedNumbers}
          onSelectNumber={handleSelectNumber}
        />
        <div className="mensaje">
          <p>{message}</p>
        </div>
      </div> */}
    </main>
  )
}
