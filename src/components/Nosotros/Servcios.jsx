import { Link } from 'react-router-dom';
import aireImg from '../../img/aire.jpeg';
import refrigeracionImg from '../../img/refrigeracion.jpg';
import '../../css/Nosotros/Servicios.css';

const ENLACE_NUESTRAS_SOLUCIONES = '/soluciones#nuestras-soluciones';

export default function Servicios() {
    return (
        <section className="seccion-servicios corte-diagonal-inferior">
            <div className="contenedor-servicios">

                {/* Cabecera de la sección */}
                <div className="cabecera-servicios">
                    <div>
                        <span className="subtitulo-seccion">POLÍTICA CUSTOM</span>
                        <h2 className="titulo-seccion">NUESTRO ACRÓNIMO, NUESTRO COMPROMISO</h2>
                    </div>
                </div>

                <p className="texto-descripcion">
                    Somos <strong>Representantes De Valor Agregado (V.A.R.)</strong> en la industria de Ventilación,
                    Aire Acondicionado y Refrigeración (V.A.R.) y nos perfilamos como un socio técnico y estratégico
                    para nuestros clientes. Conectamos fabricantes, constructores, responsables de mantenimiento,
                    propietarios y administradores de edificios mediante asesoría especializada, soporte, diseño
                    e ingeniería aplicada. Nos enfocamos en resolver desafíos complejos de confort térmico, eficiencia
                    energética y confiabilidad operativa, construyendo relaciones sólidas y de largo plazo basadas en resultados.
                </p>

                {/* Rejilla de Tarjetas V.A.R. */}
                <div className="rejilla-servicios">
                    {/* Tarjeta 1 - V: Ventilación / Value */}
                    <div className="tarjeta-servicio">
                        <div className="tarjeta-servicio__cabecera-azul">
                            <div className="tarjeta-servicio__icono-circulo">
                                <span className="material-symbols-outlined">air</span>
                            </div>
                            <span className="tarjeta-servicio__titulo-header">VENTILACIÓN</span>
                        </div>
                        <div className="tarjeta-servicio__foto-contenedor">
                            <img
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                                alt="Ventilación y ductería"
                                className="tarjeta-servicio__foto"
                            />
                        </div>
                        <div className="tarjeta-servicio__contenido">
                            <div className="tarjeta-servicio__badge-row">
                                <div className="tarjeta-servicio__letra-circulo">V</div>
                                <div>
                                    <h3 className="tarjeta-servicio__subtitulo-acronimo">VALUE — VALOR</h3>
                                    <div className="tarjeta-servicio__linea-azul" />
                                </div>
                            </div>
                            <p className="texto-tarjeta">
                                Soluciones que generan <strong>eficiencia, confort y confianza</strong>, aportando beneficios tangibles a cada proyecto mediante productos de alta calidad y marcas líderes.
                            </p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Tarjeta 2 - A: Aire Acondicionado / Added */}
                    <div className="tarjeta-servicio">
                        <div className="tarjeta-servicio__cabecera-azul">
                            <div className="tarjeta-servicio__icono-circulo">
                                <span className="material-symbols-outlined">ac_unit</span>
                            </div>
                            <span className="tarjeta-servicio__titulo-header">AIRE ACONDICIONADO</span>
                        </div>
                        <div className="tarjeta-servicio__foto-contenedor">
                            <img
                                src={aireImg}
                                alt="Aire Acondicionado"
                                className="tarjeta-servicio__foto"
                            />
                        </div>
                        <div className="tarjeta-servicio__contenido">
                            <div className="tarjeta-servicio__badge-row">
                                <div className="tarjeta-servicio__letra-circulo">A</div>
                                <div>
                                    <h3 className="tarjeta-servicio__subtitulo-acronimo">ADDED — AGREGADO</h3>
                                    <div className="tarjeta-servicio__linea-azul" />
                                </div>
                            </div>
                            <p className="texto-tarjeta">
                                Aportamos valor agregado en soluciones de climatización mediante disponibilidad de inventario, soporte técnico especializado, logística eficiente y un acompañamiento comercial cercano. Más que suministrar productos, brindamos soluciones que facilitan la toma de decisiones y optimizan la inversión de nuestros clientes.
                            </p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Tarjeta 3 - R: Refrigeración / Representatives */}
                    <div className="tarjeta-servicio">
                        <div className="tarjeta-servicio__cabecera-azul">
                            <div className="tarjeta-servicio__icono-circulo">
                                <span className="material-symbols-outlined">severe_cold</span>
                            </div>
                            <span className="tarjeta-servicio__titulo-header">REFRIGERACIÓN</span>
                        </div>
                        <div className="tarjeta-servicio__foto-contenedor">
                            <img
                                src={refrigeracionImg}
                                alt="Refrigeración"
                                className="tarjeta-servicio__foto"
                            />
                        </div>
                        <div className="tarjeta-servicio__contenido">
                            <div className="tarjeta-servicio__badge-row">
                                <div className="tarjeta-servicio__letra-circulo">R</div>
                                <div>
                                    <h3 className="tarjeta-servicio__subtitulo-acronimo">REPRESENTATIVES — REPRESENTANTES</h3>
                                    <div className="tarjeta-servicio__linea-azul" />
                                </div>
                            </div>
                            <p className="texto-tarjeta">
                                Somos representantes de soluciones de refrigeración industrial y comercial, garantizando productos originales, respaldo de fábrica, garantía oficial y acceso a soluciones confiables para aplicaciones residenciales, comerciales e industriales.
                            </p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}