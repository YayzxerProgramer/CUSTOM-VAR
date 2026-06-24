import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Introduccion from '../components/Soluciones/Introduccion.jsx';
import Tarjetas from '../components/Soluciones/Tarjetas.jsx';
import '../css/Soluciones/Soluciones.css';

export default function SolucionesPage() {
    return (
        <>
            <Navbar />
            <Introduccion />
            <Tarjetas />
            <Footer />
        </>
    );
}
