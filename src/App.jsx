import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NuevoContacto from "./components/NuevoContacto"
import ListaDeContactos from "./components/ListaDeContacto"

export default function App() {
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<NuevoContacto/>} />
          <Route path="ListaDeContactos" element={<ListaDeContactos/>}/>
        </Routes>
      </Router>
    </React.StrictMode>

  )
}