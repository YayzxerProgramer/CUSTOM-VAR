import Navbar from '../components/Navbar.jsx';
import Noticias from '../components/Noticias/Noticias.jsx';
import Footer from '../components/Footer.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function NoticiasPage() {
    useDocumentTitle('Noticias y Actualidad HVAC | CUSTOM VAR');

    return (
        <>
            <Navbar />
            <Noticias />
            <Footer />
        </>
    );
}
