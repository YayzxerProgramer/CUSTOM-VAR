import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Introduccion from '../components/Soluciones/Introduccion.jsx';
import AcordeonPersonas from '../components/Soluciones/AcordeonPersonas.jsx';
import ProyectosExpandible from '../components/Soluciones/ProyectosExpandible.jsx';
import '../css/Soluciones/Soluciones.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function SolucionesPage() {
    useDocumentTitle('Soluciones HVAC | CUSTOM VAR Colombia');

    return (
        <>
            <Navbar />
            <Introduccion />
            <AcordeonPersonas />
            <ProyectosExpandible />
            <Footer />
        </>
    );
}
