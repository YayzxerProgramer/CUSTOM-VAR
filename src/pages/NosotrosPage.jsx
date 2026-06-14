import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Nosotros/Hero.jsx';
import CajaEstadistica from '../components/Nosotros/CajaEstadistica.jsx';
import Nosotros from '../components/Nosotros/Nosotros.jsx';
import Filosofia from '../components/Nosotros/Filosofia.jsx';
import Servicios from '../components/Nosotros/Servcios.jsx';
import Valor from '../components/Nosotros/Valor.jsx';
import Footer from '../components/Footer.jsx';

export default function NosotrosPage() {
    return (
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
    );
}
