import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Introduccion from '../components/Soluciones/Introduccion.jsx';
import AcordeonPersonas from '../components/Soluciones/AcordeonPersonas.jsx';
import ProyectosExpandible from '../components/Soluciones/ProyectosExpandible.jsx';
import SolicitudAsesoriaModal from '../components/Soluciones/SolicitudAsesoriaModal.jsx';
import '../css/Soluciones/Soluciones.css';

export default function SolucionesPage() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    return (
        <>
            <Navbar />
            <Introduccion />
            <AcordeonPersonas onSolicitarAsesoria={abrirModal} />
            <ProyectosExpandible onSolicitarAsesoria={abrirModal} />
            <Footer />
            <SolicitudAsesoriaModal abierto={modalAbierto} onCerrar={cerrarModal} />
        </>
    );
}
