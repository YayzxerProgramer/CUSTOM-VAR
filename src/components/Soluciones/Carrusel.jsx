import { useEffect, useState } from 'react';
import '../../css/Soluciones/Carrusel.css';

const INTERVALO_MS = 4000;

export default function Carrusel({ fotos = [], altPrefix = 'Foto', intervaloMs = INTERVALO_MS }) {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        if (fotos.length <= 1) return undefined;
        const id = window.setInterval(() => {
            setIndice((prev) => (prev + 1) % fotos.length);
        }, intervaloMs);
        return () => window.clearInterval(id);
    }, [fotos.length, intervaloMs]);

    if (fotos.length === 0) return null;

    const irA = (i) => setIndice(i);

    return (
        <div
            className="carrusel"
            role="region"
            aria-label={`Galería de fotos - ${altPrefix}`}
        >
            <div className="carrusel__ventana">
                {fotos.map((foto, i) => (
                    <img
                        key={foto}
                        src={foto}
                        alt={`${altPrefix} - foto ${i + 1}`}
                        className={`carrusel__foto ${
                            i === indice ? 'carrusel__foto--activa' : ''
                        }`}
                        loading={i === 0 ? 'eager' : 'lazy'}
                    />
                ))}
            </div>

            {fotos.length > 1 && (
                <div className="carrusel__indicadores" aria-label="Selector de foto">
                    {fotos.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`carrusel__punto ${
                                i === indice ? 'carrusel__punto--activo' : ''
                            }`}
                            onClick={() => irA(i)}
                            aria-label={`Ir a la foto ${i + 1}`}
                            aria-current={i === indice ? 'true' : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
