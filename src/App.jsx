import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from "./components/Nosotros/Hero.jsx"
import Servicios from './components/Nosotros/Servcios.jsx';
import CajaEstadistica from './components/Nosotros/CajaEstadistica.jsx';
import Footer from './components/Footer.jsx';
import Filosofia from './components/Nosotros/Filosofia.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import BotonWhatsApp from './components/BotonWhatsapp.jsx';
import Valor from './components/Nosotros/Valor.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/nosotros' element={
          <>
            <Navbar />
            <Hero />
            <CajaEstadistica />
            <Nosotros />
            <Filosofia />
            <Servicios />
            <Valor />
            <Footer />
          </>
        } />
        <Route path='/soluciones' element={
          <>
            <Navbar />
            <Footer />
          </>
        } />
      </Routes>
      <BotonWhatsApp />
    </>
  );
}
