import './App.css'
import { Header } from '../src/components/Header'
import { BottonBar } from './components/BottonBar'


function App() {


  return (
    <div className="justify-start pt-5 bg-background-primario  flex h-screen flex-col items-center">
      
      <Header></Header>
      <BottonBar></BottonBar>

    </div>
  )
}

export default App
