import Navbar from '../components/Navbar.jsx';
import Talento from '../components/Talento/Talento.jsx';
import Footer from '../components/Footer.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function TalentoPage() {
    useDocumentTitle('Trabaja con Nosotros | Talento CUSTOM VAR');

    return (
        <>
            <Navbar />
            <Talento />
            <Footer />
        </>
    );
}
