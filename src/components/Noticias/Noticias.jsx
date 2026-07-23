import { useMemo, useState } from 'react';
import { useJsonData } from '../../hooks/useJsonData.js';
import '../../css/Noticias/Noticias.css';

export default function Noticias() {
    const [fuente, setFuente] = useState('todas');
    const { datos, cargando, error } = useJsonData('/data/noticias.json');

    const destacada = useMemo(() => {
        if (!datos) return null;
        return datos.noticias.find((noticia) => noticia.destacada) ?? datos.noticias[0];
    }, [datos]);

    const noticiasFiltradas = useMemo(() => {
        if (!datos) return [];
        return fuente === 'todas'
            ? datos.noticias
            : datos.noticias.filter((n) => n.fuente === fuente);
    }, [datos, fuente]);

    return (
        <main className="pagina-noticias">
            <header className="noticias-hero">
                <div className="noticias-hero__patron" />
                <div className="noticias-hero__contenido">
                    <div className="noticias-hero__breadcrumb">
                        <span className="noticias-hero__marca">Noticias VAR</span>
                        <span className="noticias-hero__punto" />
                        <span className="noticias-hero__ruta">Actualidad del sector</span>
                    </div>
                    <h1 className="noticias-hero__titulo">
                        Lo último en Ventilación, Aire Acondicionado y Refrigeración
                    </h1>
                    <p className="noticias-hero__descripcion">
                        Curamos las noticias más relevantes de la industria desde fuentes externas
                        reconocidas —gremios, medios especializados y fabricantes— para mantenerle al día
                        en tecnología, normativa y eficiencia energética.
                    </p>
                </div>
            </header>

            <div className="noticias-filtros">
                <div className="noticias-filtros__inner">
                    <span className="noticias-filtros__label">Fuente:</span>
                    {(datos?.fuentes ?? []).map((opcion) => (
                        <button
                            key={opcion}
                            type="button"
                            className={`noticias-filtro ${
                                fuente === opcion ? 'noticias-filtro--activo' : ''
                            }`}
                            onClick={() => setFuente(opcion)}
                        >
                            {opcion === 'todas' ? 'Todas' : opcion}
                        </button>
                    ))}
                </div>
            </div>

            {cargando && <p className="noticias-estado">Cargando noticias...</p>}
            {error && <p className="noticias-estado noticias-estado--error">No se pudieron cargar las noticias. Intente de nuevo más tarde.</p>}

            {destacada && (
                <section className="noticias-destacada">
                    <div className="noticias-destacada__contenedor">
                        <a
                            className="noticia-destacada"
                            href={destacada.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className="noticia-destacada__media"
                                style={{ backgroundImage: `url(${destacada.img})` }}
                            >
                                <span className="noticia-destacada__badge">Destacada</span>
                            </div>
                            <div className="noticia-destacada__cuerpo">
                                <div className="noticia-destacada__meta">
                                    <span className="noticia-destacada__fuente">{destacada.fuente}</span>
                                    <span className="noticia-destacada__punto" />
                                    <span className="noticia-destacada__fecha">{destacada.fecha}</span>
                                </div>
                                <h2 className="noticia-destacada__titulo">{destacada.titulo}</h2>
                                <p className="noticia-destacada__resumen">{destacada.resumen}</p>
                                <span className="noticia-destacada__enlace">
                                    Leer en la fuente
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </span>
                            </div>
                        </a>
                    </div>
                </section>
            )}

            {datos && (
                <section className="noticias-grid">
                    {noticiasFiltradas.map((noticia) => (
                        <a
                            key={noticia.id}
                            className="noticia-card"
                            href={noticia.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className="noticia-card__media"
                                style={{ backgroundImage: `url(${noticia.img})` }}
                            >
                                <span className="noticia-card__fuente">{noticia.fuente}</span>
                            </div>
                            <div className="noticia-card__cuerpo">
                                <div className="noticia-card__meta">
                                    <span
                                        className="noticia-card__categoria"
                                        style={{ color: noticia.catColor, background: noticia.catSoft }}
                                    >
                                        {noticia.categoria}
                                    </span>
                                    <span className="noticia-card__fecha">{noticia.fecha}</span>
                                </div>
                                <h3 className="noticia-card__titulo">{noticia.titulo}</h3>
                                <p className="noticia-card__resumen">{noticia.resumen}</p>
                                <span className="noticia-card__enlace">
                                    Leer más
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </span>
                            </div>
                        </a>
                    ))}
                </section>
            )}

            <section className="noticias-aviso">
                <div className="noticias-aviso__contenedor">
                    <div className="noticias-aviso__texto">
                        <span className="material-symbols-outlined">verified_user</span>
                        <p>
                            Las noticias enlazan a fuentes externas reconocidas del sector —
                            <strong>ACAIRE</strong>, <strong>AC-R Latinoamérica</strong> y fabricantes—.
                            El uso de contenido de terceros se gestiona con los permisos
                            correspondientes.
                        </p>
                    </div>
                    <div className="noticias-aviso__tags">
                        <span className="noticias-aviso__tag">ACAIRE</span>
                        <span className="noticias-aviso__tag">AC-R</span>
                        <span className="noticias-aviso__tag">Fabricantes</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
