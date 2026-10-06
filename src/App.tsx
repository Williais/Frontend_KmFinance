import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AppLayout from "./layouts/AppLayout"

import Resumo from "./pages/Resumo"
import Corridas from "./pages/Corrida"
import Financeiro from "./pages/Financeiro"
import Veiculo from "./pages/Veiculo"
import Analytics from "./pages/Analytics"

function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route element={<AppLayout />}>

          <Route path="/resumo" element={<Resumo />} />
          <Route path="/corridas" element={<Corridas />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/veiculo" element={<Veiculo />} />
          <Route path="/analytics" element={<Analytics />} />

        </Route>

        <Route path='/' element={<Navigate to="/resumo" replace/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
