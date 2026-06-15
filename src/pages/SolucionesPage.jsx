import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SolucionesHero from '../components/Soluciones/SolucionesHero.jsx';
import OfertaSoluciones from '../components/Soluciones/OfertaSoluciones.jsx';
import SolicitudAsesoriaModal from '../components/SolicitudAsesoriaModal.jsx';
import '../css/Soluciones/Soluciones.css';

export default function SolucionesPage() {
    const [modalAbierto, setModalAbierto] = useState(false);

    return (
        <>
            <Navbar />
            <main className="pagina-soluciones">
                <SolucionesHero onSolicitarAsesoria={() => setModalAbierto(true)} />
                <OfertaSoluciones onSolicitarAsesoria={() => setModalAbierto(true)} />
            </main>
            <Footer />
            <SolicitudAsesoriaModal
                abierto={modalAbierto}
                onClose={() => setModalAbierto(false)}
                contexto="Soluciones CUSTOM VAR"
            />
        </>
    );
}
