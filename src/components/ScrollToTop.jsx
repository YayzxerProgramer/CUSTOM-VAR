import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Cada vez que cambia la ruta (pathname), desplazamos la ventana al inicio.
 * Mantenemos la posición si solo cambia el hash (scrollIntoView se encarga luego).
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);

    return null;
}
