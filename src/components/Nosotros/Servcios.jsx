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
                        {/* Tarjeta 1 - V */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">air</span>
                            <h3 className="titulo-tarjeta">VENTILACIÓN / VALOR</h3>
                            <p className="texto-tarjeta">
                                Generamos valor a través de soluciones de ventilación que mejoran la eficiencia, el confort y el desempeño de cada proyecto. Nuestro compromiso es ofrecer productos de calidad y marcas líderes que contribuyan al bienestar de las personas y a la optimización de los espacios.
                            </p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Tarjeta 2 - A */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">ac_unit</span>
                            <h3 className="titulo-tarjeta">AIRE ACONDICIONADO / AGREGADO</h3>
                            <p className="texto-tarjeta">
                                Aportamos valor agregado en soluciones de climatización mediante disponibilidad de inventario, soporte técnico especializado, logística eficiente y un acompañamiento comercial cercano. Más que suministrar productos, brindamos soluciones que facilitan la toma de decisiones y optimizan la inversión de nuestros clientes.
                            </p>
                            <Link to={ENLACE_NUESTRAS_SOLUCIONES} className="enlace-tarjeta grupo-enlace">
                                Explorar solución
                                <span className="material-symbols-outlined flecha-enlace">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Tarjeta 3 - R */}
                        <div className="tarjeta-servicio">
                            <span className="material-symbols-outlined icono-servicio">severe_cold</span>
                            <h3 className="titulo-tarjeta">REFRIGERACIÓN / REPRESENTANTES</h3>
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
            </section>
        </>
    );
}