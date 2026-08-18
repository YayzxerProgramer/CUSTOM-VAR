import Navbar from '../components/Navbar.jsx';
import Iniciativas from '../components/Iniciativas/Iniciativas.jsx';
import Footer from '../components/Footer.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function IniciativasPage() {
    useDocumentTitle('Iniciativas Sociales y Sostenibilidad | CUSTOM VAR');

    return (
        <>
            <Navbar />
            <Iniciativas />
            <Footer />
        </>
    );
}
