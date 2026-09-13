import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    pilares,
    servicios,
    solucionesAplicadasProyectos,
    solucionesAplicadasServicios,
} from '../../data/soluciones.js';
import { useJsonData } from '../../hooks/useJsonData.js';
import Carrusel from './Carrusel.jsx';
import '../../css/Soluciones/ProyectosExpandible.css';

const SECCION_NUESTRAS_SOLUCIONES = 'nuestras-soluciones';
const SECCION_PROYECTOS = 'proyectos';
const SECCION_SERVICIOS = 'servicios';
const DURACION_DOBLEZ = 220; // ms, debe coincidir con la transicion en ProyectosExpandible.css

export default function ProyectosExpandible() {
    const { hash } = useLocation();
    const [verProyectos, setVerProyectos] = useState(false);
    const [verServicios, setVerServicios] = useState(false);
    const [solicitudScroll, setSolicitudScroll] = useState(0);
    const [solicitudScrollServicios, setSolicitudScrollServicios] = useState(0);
    const [detalleAbierto, setDetalleAbierto] = useState(() => new Set());
    const [doblando, setDoblando] = useState(() => new Set());
    const seccionRef = useRef(null);
    const proyectosTituloRef = useRef(null);
    const serviciosTituloRef = useRef(null);
    const { datos, cargando, error } = useJsonData('/data/proyectos.json');
    const proyectos = datos?.proyectos ?? [];

    const alternarDetalleProyecto = (id) => {
        if (doblando.has(id)) return;
        setDoblando((prev) => new Set(prev).add(id));
        window.setTimeout(() => {
            setDetalleAbierto((prev) => {
                const siguiente = new Set(prev);
                if (siguiente.has(id)) siguiente.delete(id);
                else siguiente.add(id);
                return siguiente;
            });
            requestAnimationFrame(() => {
                setDoblando((prev) => {
                    const siguiente = new Set(prev);
                    siguiente.delete(id);
                    return siguiente;
                });
            });
        }, DURACION_DOBLEZ);
    };

    useEffect(() => {
        const abrir = () => {
            setVerProyectos(true);
            setSolicitudScroll((n) => n + 1);
        };
        window.addEventListener('solicitar-proyectos', abrir);
        return () => window.removeEventListener('solicitar-proyectos', abrir);
    }, []);

    useEffect(() => {
        if (solicitudScroll === 0) return;
        if (verProyectos && proyectosTituloRef.current) {
            proyectosTituloRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [solicitudScroll, verProyectos]);

    useEffect(() => {
        if (solicitudScrollServicios === 0) return;
        if (verServicios && serviciosTituloRef.current) {
            serviciosTituloRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [solicitudScrollServicios, verServicios]);

    useEffect(() => {
        if (hash === `#${SECCION_PROYECTOS}`) {
            setVerProyectos(true);
        } else if (hash === `#${SECCION_SERVICIOS}`) {
            setVerServicios(true);
        }
    }, [hash]);

    useEffect(() => {
        if (!hash) return;
        let destino = null;
        if (hash === `#${SECCION_PROYECTOS}` && verProyectos) {
            destino = proyectosTituloRef.current;
        } else if (hash === `#${SECCION_SERVICIOS}` && verServicios) {
            destino = serviciosTituloRef.current;
        } else if (hash === `#${SECCION_NUESTRAS_SOLUCIONES}`) {
            destino = seccionRef.current;
        }
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash, verProyectos, verServicios]);

    const alternarProyectos = () => {
        setVerProyectos((v) => {
            if (!v) setSolicitudScroll((n) => n + 1);
            return !v;
        });
    };

    const alternarServicios = () => {
        setVerServicios((v) => {
            if (!v) setSolicitudScrollServicios((n) => n + 1);
            return !v;
        });
    };

    return (
        <section className="soluciones-var" id={SECCION_NUESTRAS_SOLUCIONES} ref={seccionRef}>
            <div className="soluciones-var__container">
                <span className="soluciones-var__eyebrow">Nuestras soluciones</span>
                <h2 className="soluciones-var__titulo">
                    Ventilación · Aire Acondicionado · Refrigeración
                </h2>
                <p className="soluciones-var__intro">
                    Conozca nuestras líneas de solución en cada uno de los tres pilares de la
                    industria VAR.
                </p>

                <div className="soluciones-var__grid">
                    {pilares.map((pilar) => (
                        <article className="pilar-card" key={pilar.id}>
                            <div className="pilar-card__media">
                                <img
                                    src={pilar.imagen}
                                    alt={pilar.titulo}
                                    className="pilar-card__foto"
                                    loading="lazy"
                                />
                                <span className="pilar-card__icono-insignia material-symbols-outlined">
                                    {pilar.icono}
                                </span>
                            </div>
                            <div className="pilar-card__body">
                                <span className="pilar-card__tag">{pilar.tag}</span>
                                <h3 className="pilar-card__titulo">{pilar.titulo}</h3>
                                <p className="pilar-card__desc">{pilar.descripcion}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* SOLUCIONES APLICADAS A PROYECTOS */}
                <div className="soluciones-bloque-aplicadas">
                    <span className="soluciones-var__eyebrow">Proyectos</span>
                    <h2 className="soluciones-var__titulo">
                        SOLUCIONES APLICADAS A PROYECTOS
                    </h2>
                    <div className="soluciones-aplicadas__grid">
                        {solucionesAplicadasProyectos.map((item) => (
                            <article className="solucion-card" key={item.id}>
                                <div className="solucion-card__header">
                                    <span className="material-symbols-outlined solucion-card__icono">
                                        {item.icono}
                                    </span>
                                    <h3 className="solucion-card__titulo">{item.titulo}</h3>
                                </div>
                                <p className="solucion-card__desc">{item.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Botón desplegable: VER PESTAÑA DE PROYECTOS */}
                <div className="expandible-cta expandible-cta--anidado">
                    <button
                        type="button"
                        className="expandible-cta__boton expandible-cta__boton--rojo"
                        onClick={alternarProyectos}
                        aria-expanded={verProyectos}
                    >
                        {verProyectos ? 'Ver menos' : 'VER PESTAÑA DE PROYECTOS'}
                        <span
                            className="material-symbols-outlined"
                            style={{ transform: `rotate(${verProyectos ? '180deg' : '0deg'})` }}
                        >
                            expand_more
                        </span>
                    </button>
                </div>

                {verProyectos && (
                    <div className="proyectos-detalle">
                        <span className="proyectos-detalle__eyebrow">Proyectos</span>
                        <h2
                            className="proyectos-detalle__titulo"
                            id={SECCION_PROYECTOS}
                            ref={proyectosTituloRef}
                        >
                            Diseño, implementación y consultoría
                        </h2>
                        <p className="proyectos-detalle__intro">
                            Acompañamos cada proyecto desde la ingeniería conceptual hasta la
                            puesta en marcha.
                        </p>

                        {cargando && (
                            <p className="proyectos-estado">Cargando proyectos...</p>
                        )}
                        {error && (
                            <p className="proyectos-estado proyectos-estado--error">
                                No se pudieron cargar los proyectos. Intente de nuevo más tarde.
                            </p>
                        )}

                        <div className="proyectos-detalle__lista">
                            {proyectos.map((proyecto, indice) => (
                                <div
                                    key={proyecto.id}
                                    className={`proyecto-fila ${
                                        indice % 2 ? 'proyecto-fila--invertida' : ''
                                    }`}
                                >
                                    <div
                                        className="proyecto-fila__media"
                                        style={
                                            proyecto.carrusel
                                                ? undefined
                                                : { '--imagen-fondo': `url(${proyecto.imagen})` }
                                        }
                                    >
                                        {proyecto.carrusel && (
                                            <Carrusel
                                                fotos={proyecto.carrusel}
                                                altPrefix={proyecto.altPrefix || proyecto.titulo}
                                            />
                                        )}
                                    </div>
                                    <div className="proyecto-fila__texto">
                                        <span className="material-symbols-outlined proyecto-fila__icono">
                                            {proyecto.icono}
                                        </span>
                                        <h3 className="proyecto-fila__titulo">{proyecto.titulo}</h3>

                                        <div className="proyecto-fila__doblez">
                                            <div
                                                className={`proyecto-fila__contenido ${
                                                    doblando.has(proyecto.id)
                                                        ? 'proyecto-fila__contenido--doblando'
                                                        : ''
                                                }`}
                                            >
                                                {detalleAbierto.has(proyecto.id) ? (
                                                    <div className="proyecto-fila__detalle">
                                                        {proyecto.detalle.parrafos.map((parrafo, i) => (
                                                            <p key={i}>{parrafo}</p>
                                                        ))}
                                                        {proyecto.detalle.alcance && (
                                                            <>
                                                                <h4>Alcance del proyecto</h4>
                                                                <ul>
                                                                    {proyecto.detalle.alcance.map((item, i) => (
                                                                        <li key={i}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <>
                                                        <dl className="proyecto-fila__info">
                                                            {proyecto.detalle.info.map(({ label, valor }) => (
                                                                <div key={label}>
                                                                    <dt>{label}</dt>
                                                                    <dd>{valor}</dd>
                                                                </div>
                                                            ))}
                                                        </dl>
                                                        <p className="proyecto-fila__desc">{proyecto.descripcion}</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="proyecto-fila__ver-mas"
                                            onClick={() => alternarDetalleProyecto(proyecto.id)}
                                            aria-expanded={detalleAbierto.has(proyecto.id)}
                                        >
                                            {detalleAbierto.has(proyecto.id) ? 'Ver menos' : 'Ver más'}
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    transform: `rotate(${
                                                        detalleAbierto.has(proyecto.id) ? '180deg' : '0deg'
                                                    })`,
                                                }}
                                            >
                                                expand_more
                                            </span>
                                        </button>

                                        <Link
                                            to="/soporte#formulario-solicitud"
                                            className="proyecto-fila__btn"
                                        >
                                            Cuéntenos su requerimiento
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* SOLUCIONES APLICADAS A SERVICIOS */}
                <div className="soluciones-bloque-aplicadas">
                    <span className="soluciones-var__eyebrow">Servicios</span>
                    <h2 className="soluciones-var__titulo">
                        SOLUCIONES APLICADAS A SERVICIOS
                    </h2>
                    <div className="soluciones-aplicadas__grid">
                        {solucionesAplicadasServicios.map((item) => (
                            <article className="solucion-card" key={item.id}>
                                <div className="solucion-card__header">
                                    <span className="material-symbols-outlined solucion-card__icono">
                                        {item.icono}
                                    </span>
                                    <h3 className="solucion-card__titulo">{item.titulo}</h3>
                                </div>
                                <p className="solucion-card__desc">{item.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Botón desplegable: VER PESTAÑA DE SERVICIOS PROYECTOS */}
                <div className="expandible-cta expandible-cta--anidado">
                    <button
                        type="button"
                        className="expandible-cta__boton expandible-cta__boton--rojo"
                        onClick={alternarServicios}
                        aria-expanded={verServicios}
                    >
                        {verServicios ? 'Ver menos' : 'VER PESTAÑA DE SERVICIOS PROYECTOS'}
                        <span
                            className="material-symbols-outlined"
                            style={{ transform: `rotate(${verServicios ? '180deg' : '0deg'})` }}
                        >
                            expand_more
                        </span>
                    </button>
                </div>

                {verServicios && (
                    <div className="proyectos-detalle servicios-detalle">
                        <span className="proyectos-detalle__eyebrow">Servicios</span>
                        <h2
                            className="proyectos-detalle__titulo"
                            id={SECCION_SERVICIOS}
                            ref={serviciosTituloRef}
                        >
                            Líneas de Atención y Mantenimiento
                        </h2>
                        <p className="proyectos-detalle__intro">
                            Diseñemos juntos el programa de mantenimiento centrado en confiabilidad.
                            Manejamos un modelo de contratación flexible (por evento, cíclica programada
                            o personal inhouse permanente).
                        </p>

                        <div className="proyectos-detalle__lista">
                            {servicios.map((servicio, indice) => (
                                <div
                                    key={servicio.id}
                                    className={`proyecto-fila ${
                                        indice % 2 ? 'proyecto-fila--invertida' : ''
                                    }`}
                                >
                                    <div
                                        className="proyecto-fila__media"
                                        style={{ '--imagen-fondo': `url(${servicio.imagen})` }}
                                    />
                                    <div className="proyecto-fila__texto">
                                        <span className="material-symbols-outlined proyecto-fila__icono">
                                            {servicio.icono}
                                        </span>
                                        <h3 className="proyecto-fila__titulo">{servicio.titulo}</h3>
                                        <p className="proyecto-fila__desc">{servicio.descripcion}</p>

                                        <Link
                                            to="/soporte#formulario-solicitud"
                                            className="proyecto-fila__btn"
                                        >
                                            Cuéntenos su requerimiento
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
