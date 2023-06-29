import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NuevoContacto from "./components/NuevoContacto"
import ListaDeContactos from "./components/ListaDeContacto"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/nuevoContacto" element={<NuevoContacto />} />
          <Route path="/editarContacto/:id" element={<NuevoContacto />} />
          <Route path="/" element={<ListaDeContactos />} />
        </Routes>
        <div className="pt-20">
          <Footer/>
        </div>
      </Router>
    </React.StrictMode>

  )
}