// import BingoBoard from './components/BingoBoard'
import BingoContextProvider from '@/context/BingoContext'
import Main from '@/components/Main'
import './App.css'

export default function App() {

  return (
    <BingoContextProvider>
      <Main />
    </BingoContextProvider>
  )
}
