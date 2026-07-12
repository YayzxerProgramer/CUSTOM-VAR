import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pilares, proyectos } from '../../data/soluciones.js';
import '../../css/Soluciones/ProyectosExpandible.css';

const SECCION_NUESTRAS_SOLUCIONES = 'nuestras-soluciones';
const SECCION_PROYECTOS = 'proyectos';
const DURACION_DOBLEZ = 220; // ms, debe coincidir con la transicion en ProyectosExpandible.css

export default function ProyectosExpandible() {
    const { hash } = useLocation();
    const [verSoluciones, setVerSoluciones] = useState(false);
    const [verProyectos, setVerProyectos] = useState(false);
    const [solicitudScroll, setSolicitudScroll] = useState(0);
    const [detalleAbierto, setDetalleAbierto] = useState(() => new Set());
    const [doblando, setDoblando] = useState(() => new Set());
    const seccionRef = useRef(null);
    const proyectosTituloRef = useRef(null);

    // Anima el "doblez" del texto: primero pliega el contenido breve,
    // luego lo reemplaza por la informacion completa (y viceversa al cerrar).
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

    // El boton "Ver Proyectos" del acordeon emite este evento en cada click.
    // Como navegar al mismo hash no re-dispara nada, abrimos los paneles y
    // bumpeamos el nonce para forzar el scroll siempre.
    useEffect(() => {
        const abrir = () => {
            setVerSoluciones(true);
            setVerProyectos(true);
            setSolicitudScroll((n) => n + 1);
        };
        window.addEventListener('solicitar-proyectos', abrir);
        return () => window.removeEventListener('solicitar-proyectos', abrir);
    }, []);

    // Se ejecuta tras montar el titulo de proyectos (render condicional),
    // en cada solicitud, aunque verProyectos ya fuera true.
    useEffect(() => {
        if (solicitudScroll === 0) return;
        if (verProyectos && proyectosTituloRef.current) {
            proyectosTituloRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [solicitudScroll, verProyectos]);

    // Si la URL trae un hash, abrimos el panel correspondiente.
    // Lo hacemos en un effect para no llamar setState durante el render.
    useEffect(() => {
        if (hash === `#${SECCION_PROYECTOS}`) {
            setVerSoluciones(true);
            setVerProyectos(true);
        } else if (hash === `#${SECCION_NUESTRAS_SOLUCIONES}`) {
            setVerSoluciones(true);
            setVerProyectos(false);
        }
    }, [hash]);

    // Scroll automatico SOLO cuando la URL trae un hash (navegacion
    // desde otro link). Si el usuario hace click en "Ver proyectos"
    // o "Ver menos" no debe saltar la pantalla.
    useEffect(() => {
        if (!hash) return;
        let destino = null;
        if (hash === `#${SECCION_PROYECTOS}` && verProyectos) {
            destino = proyectosTituloRef.current;
        } else if (hash === `#${SECCION_NUESTRAS_SOLUCIONES}` && verSoluciones) {
            destino = seccionRef.current;
        }
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash, verSoluciones, verProyectos]);

    const alternarSoluciones = () => {
        setVerSoluciones((v) => {
            // Al cerrar "soluciones", cerramos tambien proyectos (esta anidado dentro).
            if (v) setVerProyectos(false);
            return !v;
        });
    };

    const alternarProyectos = () => {
        setVerProyectos((v) => !v);
    };

    return (
        <>
            {/* Botón principal: revela las soluciones VAR */}
            <div className="expandible-cta">
                <button
                    type="button"
                    className="expandible-cta__boton"
                    onClick={alternarSoluciones}
                    aria-expanded={verSoluciones}
                >
                    {verSoluciones ? 'Ver menos' : 'Ver más'}
                    <span
                        className="material-symbols-outlined"
                        style={{ transform: `rotate(${verSoluciones ? '180deg' : '0deg'})` }}
                    >
                        expand_more
                    </span>
                </button>
            </div>

            {verSoluciones && (
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
                                        <span className="material-symbols-outlined">{pilar.icono}</span>
                                    </div>
                                    <div className="pilar-card__body">
                                        <span className="pilar-card__tag">{pilar.tag}</span>
                                        <h3 className="pilar-card__titulo">{pilar.titulo}</h3>
                                        <p className="pilar-card__desc">{pilar.descripcion}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Botón anidado: revela el detalle de proyectos */}
                        <div className="expandible-cta expandible-cta--anidado">
                            <button
                                type="button"
                                className="expandible-cta__boton expandible-cta__boton--rojo"
                                onClick={alternarProyectos}
                                aria-expanded={verProyectos}
                            >
                                {verProyectos ? 'Ver menos' : 'Ver proyectos'}
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
                                                style={{ '--imagen-fondo': `url(${proyecto.imagen})` }}
                                            />
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
                    </div>
                </section>
            )}
        </>
    );
}
