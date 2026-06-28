import { Link } from 'react-router-dom';
import '../../css/Nosotros/Servicios.css';

const ENLACE_NUESTRAS_SOLUCIONES = '/soluciones#nuestras-soluciones';

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
                            <h2 className="titulo-seccion">CUSTOM – VAR</h2>
                        </div>
                    </div>

                    <p className="texto-descripcion">
                        Somos <strong>representantes de valor agregado</strong> (Value-Add Representative)
                        en la industria VAR (Ventilación, Aire Acondicionado y Refrigeración) y nos
                        perfilamos como un socio técnico y estratégico para nuestros clientes.
                        Conectamos fabricantes, constructores, responsables de mantenimiento,
                        propietarios y administradores de edificios mediante asesoría especializada,
                        soporte, diseño e ingeniería aplicada.
                        Nos enfocamos en resolver desafíos complejos de confort térmico, eficiencia
                        energética y confiabilidad operativa, construyendo relaciones sólidas y de
                        largo plazo basadas en resultados.
                    </p>
                    {/* Rejilla de Tarjetas */}
                    <div className="rejilla-servicios">
                        {/* Tarjeta 1 */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">mode_fan</span>
                            <h3 className="titulo-tarjeta">Ventilación</h3>
                            <p className="texto-tarjeta">Diseño e implementación de sistemas de inyección y extracción mecánica para procesos industriales pesados.</p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">ac_unit</span>
                            <h3 className="titulo-tarjeta">Aire Acondicionado</h3>
                            <p className="texto-tarjeta">Climatización de precisión y confort con tecnología VRF y chillers de alta eficiencia energética.</p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">kitchen</span>
                            <h3 className="titulo-tarjeta">Refrigeración</h3>
                            <p className="texto-tarjeta">Sistemas de cadena de frío y cuartos fríos para la industria alimentaria y farmacéutica.</p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}