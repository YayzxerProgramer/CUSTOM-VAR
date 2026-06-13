import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from "./components/Hero.jsx"
import Servicios from './components/Servcios.jsx';
import CajaEstadistica from './components/CajaEstadistica.jsx';
import Footer from './components/Footer.jsx';
import Filosofia from './components/Filosofia.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <CajaEstadistica />
            <Filosofia />
            <Servicios />
            <Footer />
          </>

        } />
      </Routes>
    </>
  );
}
