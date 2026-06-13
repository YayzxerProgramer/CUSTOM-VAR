import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from "./components/Hero.jsx"
import Servicios from './components/Servcios.jsx';
import Nosotros from './components/Nosotros.jsx';
import CajaEstadistica from './components/CajaEstadistica.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <CajaEstadistica />
            <Nosotros />
            <Servicios />
            <Footer />
          </>

        } />
      </Routes>
    </>
  );
}
