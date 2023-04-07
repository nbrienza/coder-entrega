import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './componentes/navegacion/navbar';
import Inicio from './componentes/navegacion/paginas/inicio';
import Imagenes from './componentes/navegacion/paginas/imagenes';
import Catalogo from './componentes/navegacion/paginas/catalogo';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/src/componentes/navegacion/paginas/inicio.js" element={<Inicio />} />
        <Route exact path="/src/componentes/navegacion/paginas/imagenes.js" element={<Imagenes />} />
        <Route exact path="/src/componentes/navegacion/paginas/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
}

export default App;