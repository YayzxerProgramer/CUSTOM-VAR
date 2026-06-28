import BotonWhatsApp from './components/BotonWhatsapp.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import NosotrosPage from './pages/NosotrosPage.jsx';
import SoportePage from './pages/SoportePage.jsx';
import SolucionesPage from './pages/SolucionesPage.jsx';
import TalentoPage from './pages/TalentoPage.jsx';
import NoticiasPage from './pages/NoticiasPage.jsx';
import IniciativasPage from './pages/IniciativasPage.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigate to='/nosotros' replace />} />
        <Route path='/nosotros' element={<NosotrosPage />} />
        <Route path='/soluciones' element={<SolucionesPage />} />
        <Route path='/soporte' element={<SoportePage />} />
        <Route path='/talento' element={<TalentoPage />} />
        <Route path='/noticias' element={<NoticiasPage />} />
        <Route path='/iniciativas' element={<IniciativasPage />} />
      </Routes>
      <BotonWhatsApp />
    </>
  );
}
