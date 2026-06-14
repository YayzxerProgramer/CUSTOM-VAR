import React from 'react';
import '../css/Servicios.css';

export default function Servicios() {
    return (
        <>

            {/* Sección de Servicios */}
            <section className="seccion-servicios corte-diagonal-inferior">
                <div className="contenedor-servicios">

                    {/* Cabecera de la sección */}
                    <div className="cabecera-servicios">
                        <div>
                            <span className="subtitulo-seccion">Nuestra Experiencia</span>
                            <h2 className="titulo-seccion">CUSTOM Soluciones – VAR</h2>
                        </div>
                        <div className="descripcion-cabecera">
                            <p className="texto-descripcion">
                                Ingeniería aplicada para garantizar el confort térmico y la eficiencia operativa en los sectores más exigentes de Colombia.
                            </p>
                        </div>
                    </div>

                    {/* Rejilla de Tarjetas */}
                    <div className="rejilla-servicios">

                        {/* Tarjeta 1 */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">mode_fan</span>
                            <h3 className="titulo-tarjeta">Ventilación</h3>
                            <p className="texto-tarjeta">Diseño e implementación de sistemas de inyección y extracción mecánica para procesos industriales pesados.</p>
                            <a className="enlace-tarjeta grupo-enlace" href="#">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </a>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">ac_unit</span>
                            <h3 className="titulo-tarjeta">Aire Acondicionado</h3>
                            <p className="texto-tarjeta">Climatización de precisión y confort con tecnología VRF y chillers de alta eficiencia energética.</p>
                            <a className="enlace-tarjeta grupo-enlace" href="#">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </a>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">kitchen</span>
                            <h3 className="titulo-tarjeta">Refrigeración</h3>
                            <p className="texto-tarjeta">Sistemas de cadena de frío y cuartos fríos para la industria alimentaria y farmacéutica.</p>
                            <a className="enlace-tarjeta grupo-enlace" href="#">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}