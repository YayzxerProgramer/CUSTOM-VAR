import { useMemo, useState } from 'react';
import '../css/CarruselAcordeon.css';

export default function CarruselAcordeon({
    items = [],
    itemsPorPagina = 3,
    className = '',
    ariaLabel = 'Carrusel de contenidos',
    textoBoton = 'Explorar solucion',
    altura,
    renderItem,
    obtenerKey = (item, indice) => item.id ?? indice,
}) {
    const [paginaActual, setPaginaActual] = useState(0);
    const cantidadPorPagina = Math.max(1, Number(itemsPorPagina) || 1);

    const totalPaginas = Math.ceil(items.length / cantidadPorPagina);
    const paginaSegura = totalPaginas > 0 ? Math.min(paginaActual, totalPaginas - 1) : 0;

    const itemsVisibles = useMemo(() => {
        const inicio = paginaSegura * cantidadPorPagina;
        return items.slice(inicio, inicio + cantidadPorPagina);
    }, [items, cantidadPorPagina, paginaSegura]);

    if (!items.length) {
        return null;
    }

    const irAPaginaSiguiente = () => {
        setPaginaActual((prev) => (prev + 1) % totalPaginas);
    };

    const irAPaginaAnterior = () => {
        setPaginaActual((prev) => (prev - 1 + totalPaginas) % totalPaginas);
    };

    return (
        <section
            className={`carrusel-acordeon ${className}`.trim()}
            aria-label={ariaLabel}
            style={altura ? { '--carrusel-altura': altura } : undefined}
        >
            {totalPaginas > 1 && (
                <button
                    className="carrusel-acordeon__flecha carrusel-acordeon__flecha--izquierda"
                    onClick={irAPaginaAnterior}
                    aria-label="Anterior"
                    type="button"
                >
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
            )}

            <div className="carrusel-acordeon__paneles">
                {itemsVisibles.map((item, indice) => {
                    const imagen = item.imagen ?? item.ruta;
                    const enlace = item.enlace ?? '#';
                    const mostrarBoton = item.mostrarBoton ?? true;

                    return (
                        <article
                            key={obtenerKey(item, indice)}
                            className="carrusel-acordeon__panel"
                            style={imagen ? { '--imagen-fondo': `url(${imagen})` } : undefined}
                        >
                            <div className="carrusel-acordeon__gradiente">
                                {renderItem ? (
                                    renderItem(item, indice)
                                ) : (
                                    <div className="carrusel-acordeon__contenido">
                                        {item.subtitulo && (
                                            <span className="carrusel-acordeon__subtitulo">{item.subtitulo}</span>
                                        )}
                                        <h3 className="carrusel-acordeon__titulo">{item.titulo}</h3>
                                        {item.descripcion && (
                                            <p className="carrusel-acordeon__descripcion">{item.descripcion}</p>
                                        )}
                                        {mostrarBoton && (
                                            <a href={enlace} className="carrusel-acordeon__boton">
                                                {item.textoBoton ?? textoBoton}
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>

            {totalPaginas > 1 && (
                <button
                    className="carrusel-acordeon__flecha carrusel-acordeon__flecha--derecha"
                    onClick={irAPaginaSiguiente}
                    aria-label="Siguiente"
                    type="button"
                >
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            )}

            {totalPaginas > 1 && (
                <div className="carrusel-acordeon__indicadores" aria-label="Paginas del carrusel">
                    {Array.from({ length: totalPaginas }).map((_, indice) => (
                        <button
                            key={indice}
                            className={`carrusel-acordeon__punto ${paginaSegura === indice ? 'carrusel-acordeon__punto--activo' : ''}`}
                            onClick={() => setPaginaActual(indice)}
                            aria-label={`Ir a la pagina ${indice + 1}`}
                            aria-current={paginaSegura === indice ? 'true' : undefined}
                            type="button"
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
