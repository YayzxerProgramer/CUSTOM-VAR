import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Introduccion from '../components/Soluciones/Introduccion.jsx';
import AcordeonPersonas from '../components/Soluciones/AcordeonPersonas.jsx';
import ProyectosExpandible from '../components/Soluciones/ProyectosExpandible.jsx';
import '../css/Soluciones/Soluciones.css';

export default function SolucionesPage() {
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
