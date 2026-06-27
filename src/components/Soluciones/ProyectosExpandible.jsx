import { useState } from 'react';
import { pilares, proyectos } from '../../data/soluciones.js';
import '../../css/Soluciones/ProyectosExpandible.css';

export default function ProyectosExpandible({ onSolicitarAsesoria }) {
    const [verSoluciones, setVerSoluciones] = useState(false);
    const [verProyectos, setVerProyectos] = useState(false);

    return (
        <>
            {/* Botón principal: revela las soluciones VAR */}
            <div className="expandible-cta">
                <button
                    type="button"
                    className="expandible-cta__boton"
                    onClick={() => setVerSoluciones((v) => !v)}
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
                <section className="soluciones-var">
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
                                onClick={() => setVerProyectos((v) => !v)}
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
                                <h2 className="proyectos-detalle__titulo">
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
                                                <p className="proyecto-fila__desc">{proyecto.descripcion}</p>
                                                <button
                                                    type="button"
                                                    className="proyecto-fila__btn"
                                                    onClick={onSolicitarAsesoria}
                                                >
                                                    Cuéntenos su requerimiento
                                                    <span className="material-symbols-outlined">arrow_forward</span>
                                                </button>
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
