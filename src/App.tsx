// import BingoBoard from './components/BingoBoard'
import BingoContextProvider from './context/BingoContext'


import './App.css'
import Main from './components/Main'


export default function App() {


  return (
    <BingoContextProvider>
      <Main />
    </BingoContextProvider>
  )
}
