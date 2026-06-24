import BotonWhatsApp from './components/BotonWhatsapp.jsx';
import NosotrosPage from './pages/NosotrosPage.jsx';
import SoportePage from './pages/SoportePage.jsx';
import SolucionesPage from './pages/SolucionesPage.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/nosotros' replace />} />
        <Route path='/nosotros' element={<NosotrosPage />} />
        <Route path='/soluciones' element={<SolucionesPage />} />
        <Route path='/soporte' element={<SoportePage />} />
      </Routes>
      <BotonWhatsApp />
    </>
  );
}
