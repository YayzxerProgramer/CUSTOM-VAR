import { useState } from 'react';
import { Link } from 'react-router-dom';
import { buyerPersonas } from '../../data/soluciones.js';
import '../../css/Soluciones/AcordeonPersonas.css';

const WHATSAPP_HREF = 'https://wa.me/573006830303';
const ENLACE_PROYECTOS = '/soluciones#proyectos';
const ENLACE_SERVICIOS = '/soluciones#servicios';
const ENLACE_SOPORTE = '/soporte#formulario-solicitud';

export default function AcordeonPersonas() {
    const [activo, setActivo] = useState(0);

    return (
        <section className="acordeon-personas">
            <div className="acordeon-personas__cabecera">
                <div>
                    <span className="acordeon-personas__eyebrow">¿Con cuál se identifica?</span>
                    <h2 className="acordeon-personas__titulo">Resolvemos el reto de cada perfil</h2>
                </div>
                <p className="acordeon-personas__ayuda">
                    <span className="material-symbols-outlined">touch_app</span>
                    Seleccione un perfil para ver el detalle de su solución.
                </p>
            </div>

            <div className="acordeon-personas__pista">
                {buyerPersonas.map((persona, indice) => {
                    const estaActivo = activo === indice;
                    return (
                        <article
                            key={persona.id}
                            className={`persona-panel ${estaActivo ? 'persona-panel--activo' : ''}`}
                            style={{ '--imagen-fondo': `url(${persona.ruta})` }}
                            onClick={() => setActivo(indice)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={estaActivo}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setActivo(indice);
                                }
                            }}
                        >
                            <div className="persona-panel__gradiente" />
                            {/* El numero se mueve fuera de la imagen a la
                                pista de navegacion inferior en CSS */}

                            <div className="persona-panel__contenido">
                                <span className="persona-panel__subtitulo">{persona.subtitulo}</span>
                                <h3 className="persona-panel__titulo">{persona.titulo}</h3>

                                <div className="persona-panel__reveal">
                                    <p className="persona-panel__dolor">{persona.dolor}</p>
                                    <p className="persona-panel__descripcion">{persona.descripcion}</p>
                                    <p className="persona-panel__solucion">
                                        <span className="persona-panel__solucion-label">Nuestra solución</span>
                                        {persona.solucion}
                                    </p>

                                    <div className="persona-panel__acciones">
                                        <Link
                                            to={ENLACE_PROYECTOS}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                window.dispatchEvent(new CustomEvent('solicitar-proyectos'));
                                            }}
                                            className="persona-panel__btn persona-panel__btn--esquema"
                                        >
                                            Ver Proyectos
                                        </Link>
                                        <Link
                                            to={ENLACE_SOPORTE}
                                            onClick={(e) => e.stopPropagation()}
                                            className="persona-panel__btn persona-panel__btn--solido"
                                        >
                                            Cuéntanos tu requerimiento
                                        </Link>
                                    </div>

                                    <a
                                        href={WHATSAPP_HREF}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="persona-panel__whatsapp"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span className="material-symbols-outlined">chat</span>
                                        Escríbenos por WhatsApp
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Pista de navegacion: botones numerados para seleccionar
                el perfil sin tocar la imagen. Visibles solo en
                responsive (oculto en desktop via CSS). */}
            <div className="acordeon-personas__nav" role="tablist">
                {buyerPersonas.map((persona, indice) => {
                    const estaActivo = activo === indice;
                    return (
                        <button
                            key={persona.id}
                            type="button"
                            role="tab"
                            aria-selected={estaActivo}
                            aria-label={`Ver perfil ${indice + 1}: ${persona.titulo}`}
                            className={`acordeon-personas__nav-btn ${estaActivo ? 'acordeon-personas__nav-btn--activo' : ''}`}
                            onClick={() => setActivo(indice)}
                        >
                            <span className="acordeon-personas__nav-num">{`0${indice + 1}`}</span>
                            <span className="acordeon-personas__nav-label">{persona.subtitulo}</span>
                        </button>
                    );
                })}
            </div>

            <div className="acordeon-personas__pie">
                <p className="acordeon-personas__pdf">
                    Ofrecemos un acompañamiento total a sus requerimientos de{' '}
                    <strong>Ventilación, Aire Acondicionado y Refrigeración</strong>. Le asistimos en
                    el diseño, selección, suministro e instalación de sistemas nuevos, así como en la
                    operación, mantenimiento preventivo, reparaciones y modernización, para que sus
                    instalaciones funcionen del modo más eficiente posible y dentro de su presupuesto.
                </p>
            </div>
        </section>
    );
}
