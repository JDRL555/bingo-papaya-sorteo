import FigureSelector from '../components/FigureSelector'
import BingoBoard from './BingoBoard'

export default function Main() {
  return (
    <main className="container">
      <BingoBoard />
      <FigureSelector />
    </main>
  )
}
