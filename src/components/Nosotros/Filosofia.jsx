import React from 'react';
import '../../css/Nosotros/Filosofia.css';

export default function Filosofia() {
    return (
        <section className="seccion-filosofia">
            <div className="contenedor-filosofia">
                <header className="bloque-introduccion-filosofia">
                    <h2 className="titulo-seccion-filosofia">FILOSOFÍA CUSTOM</h2>
                    <p className="texto-introduccion-filosofia">
                        Somos una empresa con vocación de servicio, basada en la filosofía representada en nuestro
                        nombre, el cual hace referencia a la tradición, generación de valor y a soluciones personalizadas,
                        por ende es nuestro compromiso dar respuesta a las necesidades de nuestros clientes de manera
                        responsable y a la medida de sus requerimientos, convirtiéndonos en la mejor opción para el
                        desarrollo de sus proyectos.
                    </p>
                </header>

                <div className="contenedor-tabla-responsiva">
                    <table className="tabla-acrostico-custom">
                        <tbody>
                            {/* Fila 1: Incluye la 'C' que abarca su propia fila */}
                            <tr>
                                <td className="celda-letra-acrostico pilar-c">C</td>
                                <td className="celda-concepto-ingles">Customer</td>
                                <td className="celda-traduccion-espanol">Cliente</td>
                                <td className="celda-descripcion-filosofia">Los clientes como nuestro centro y enfoque</td>
                            </tr>

                            {/* Fila 2: Incluye la 'U' y la 'S' combinadas verticalmente en el diseño del PDF */}
                            <tr>
                                <td className="celda-letra-acrostico pilar-u-s" rowSpan="2">
                                    <div className="bloque-letras-unidas">
                                        <span>U</span>
                                        <span>S</span>
                                    </div>
                                </td>
                                <td className="celda-concepto-ingles">Customizable</td>
                                <td className="celda-traduccion-espanol">Personalizable</td>
                                <td className="celda-descripcion-filosofia">Soluciones a la medida de cada requerimiento</td>
                            </tr>
                            {/* Fila 3: Comparte la celda 'U S' anterior */}
                            <tr>
                                <td className="celda-concepto-ingles">Customs</td>
                                <td className="celda-traduccion-espanol">Costumbres</td>
                                <td className="celda-descripcion-filosofia">Como lo hacían los abuelos. ¡Con Honorabilidad!</td>
                            </tr>

                            {/* Fila 4: Incluye la 'T' y la 'O' combinadas verticalmente en el diseño del PDF */}
                            <tr>
                                <td className="celda-letra-acrostico pilar-t-o" rowSpan="2">
                                    <div className="bloque-letras-unidas">
                                        <span>T</span>
                                        <span>O</span>
                                    </div>
                                </td>
                                <td className="celda-concepto-ingles">Tradición</td>
                                <td className="celda-traduccion-espanol">Generación de valor</td>
                                <td className="celda-descripcion-filosofia">Tradición, generación de valor y soluciones personalizadas.</td>
                            </tr>
                            {/* Fila 5: Comparte la celda 'T O' anterior */}
                            <tr>
                                <td className="celda-concepto-ingles">Optimización</td>
                                <td className="celda-traduccion-espanol">A la medida</td>
                                <td className="celda-descripcion-filosofia">Desarrollo de proyectos de manera responsable y exacta.</td>
                            </tr>

                            {/* Fila 6: Incluye la 'M' que abarca su propia fila */}
                            <tr>
                                <td className="celda-letra-acrostico pilar-m">M</td>
                                <td className="celda-concepto-ingles">Custom House</td>
                                <td className="celda-traduccion-espanol">Aduana</td>
                                <td className="celda-descripcion-filosofia">Generación de valor para las partes interesadas.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}