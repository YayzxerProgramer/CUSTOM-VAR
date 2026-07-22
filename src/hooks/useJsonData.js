import { useEffect, useState } from 'react';

/**
 * Carga un archivo JSON estático (servido desde /public) vía fetch.
 * Permite que el contenido se actualice reemplazando el JSON,
 * sin tocar componentes ni recompilar el sitio.
 */
export function useJsonData(url) {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let activo = true;

        fetch(url)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error(`No se pudo cargar ${url}`);
                }
                return respuesta.json();
            })
            .then((json) => {
                if (activo) setDatos(json);
            })
            .catch((err) => {
                if (activo) setError(err.message);
            })
            .finally(() => {
                if (activo) setCargando(false);
            });

        return () => {
            activo = false;
        };
    }, [url]);

    return { datos, cargando, error };
}
