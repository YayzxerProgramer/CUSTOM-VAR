import { useState } from 'react';
import { buyerPersonas } from '../../data/soluciones.js';
import '../../css/Soluciones/AcordeonPersonas.css';

const WHATSAPP_HREF = 'https://wa.me/573006830303';

export default function AcordeonPersonas({ onSolicitarAsesoria }) {
    const [activo, setActivo] = useState(0);

    // Evita que los clics en enlaces/botones internos reactiven el panel
    const detener = (evento) => {
        evento.preventDefault();
        evento.stopPropagation();
    };

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
                            <span className="persona-panel__num">{`0${indice + 1}`}</span>

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
                                        <a href="#" onClick={detener} className="persona-panel__btn persona-panel__btn--esquema">
                                            Ver Proyectos
                                        </a>
                                        <a href="#" onClick={detener} className="persona-panel__btn persona-panel__btn--esquema">
                                            Ver Servicios
                                        </a>
                                        <button
                                            type="button"
                                            className="persona-panel__btn persona-panel__btn--solido"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSolicitarAsesoria?.();
                                            }}
                                        >
                                            Cuéntanos tu requerimiento
                                        </button>
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
