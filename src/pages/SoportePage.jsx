import Navbar from '../components/Navbar.jsx';
import Soporte from '../components/Soporte/Soporte.jsx';
import Footer from '../components/Footer.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function SoportePage() {
    useDocumentTitle('Soporte Técnico HVAC | CUSTOM VAR Colombia');

    return (
        <>
            <Navbar />
            <Soporte />
            <Footer />
        </>
    );
}
