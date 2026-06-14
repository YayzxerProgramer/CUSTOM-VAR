import React from 'react';
import '../../css/Nosotros/Valor.css';

export default function Valor() {
    return (
        <section className="seccion-valores">
            <div className="contenedor-valores">

                {/* Título Principal de la Sección */}
                <h2 className="titulo-seccion-valores">REDEFINIENDO EL VALOR</h2>

                <div className="rejilla-valores">

                    {/* COLUMNA 1: Experiencia Técnica */}
                    <div className="columna-valores">
                        <h3 className="encabezado-columna">Experiencia Técnica e Ingeniería de Valor</h3>

                        <div className="bloque-item-valor">
                            <p><strong>Diseño y Aplicación de Sistemas:</strong> Apoyo desde el inicio en proyectos de diseño y construcción, incluyendo cálculos de carga, selección de equipos y revisión de planos.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Ingeniería de Valor real:</strong> Identificamos soluciones de equipos alternativas, más eficientes o rentables para el proyecto que optimicen costos sin sacrificar el rendimiento ni la calidad.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Asesoría especializada:</strong> Análisis de alternativas tecnológicas para resolver los retos más complejos en sistemas VRF, hidrónicos y de distribución de aire.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Enfoque Consultivo:</strong> Nos enfocamos en los resultados y el beneficio final para usted y su proyecto. Analizamos cada detalle técnico para asegurar el máximo ahorro de energía, un confort óptimo y el mayor retorno de su inversión.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Soluciones basadas en datos, No en adivinanzas:</strong> Basamos cada decisión en datos reales obtenidos con equipamiento especializado y análisis causa/raíz, garantizando el máximo confort, eficiencia energética y un retorno de inversión medible desde el primer día.</p>
                        </div>
                    </div>

                    {/* COLUMNA 2: Respaldo en Campo */}
                    <div className="columna-valores">
                        <h3 className="encabezado-columna el-respaldo">Respaldo Total en Campo y Postventa</h3>

                        <div className="bloque-item-valor">
                            <p><strong>Adquisición Ágil:</strong> Contamos con línea directa con fabricantes para garantizar la mejor disponibilidad, resolver problemas rápidamente, optimizando tiempos de entregas.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Asistencia en Obra:</strong> Brindamos apoyo directo en el lugar de la instalación, ofreciendo soporte técnico, capacitación y solución de imprevistos en tiempo real.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Arranque y Comisionamiento:</strong> Gestionamos o supervisamos el arranque inicial para asegurar que el equipo cumpla con las normas de fábrica y garantía.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Respaldo de Fábrica:</strong> Trabajamos de la mano de los mejores fabricantes e importadores de la industria para ofrecer disponibilidad y soporte de primer nivel; gestionando sus solicitudes, repuestos y garantías de forma directa e inmediata.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Capacitación para su personal:</strong> Ofrecemos entrenamiento especializado a su personal técnico, para asegurar una operación impecable.</p>
                        </div>

                        <div className="bloque-item-valor">
                            <p><strong>Alta Disponibilidad:</strong> Ofrecemos un servicio al cliente excepcional y respondemos rápido ante emergencias en el campo. Según los ANS pactados.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}