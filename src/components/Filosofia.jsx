import React from 'react';
import '../css/Filosofia.css';

export default function Filosofia() {
    const acrostico = [
        { letra: 'C', termino: 'Customer', traduccion: 'Cliente', descripcion: 'Los clientes como nuestro centro y enfoque.' },
        { letra: 'U', termino: 'Customizable', traduccion: 'Personalizable', descripcion: 'Soluciones a la medida de cada requerimiento.' },
        { letra: 'S', termino: 'Customs', traduccion: 'Costumbres', descripcion: 'Como lo hacían los abuelos. ¡Con Honorabilidad!' },
        { letra: 'T', termino: 'Tradición', traduccion: 'Generación de valor', descripcion: 'Tradición, generación de valor y soluciones personalizadas.' },
        { letra: 'O', termino: 'Optimización', traduccion: 'A la medida', descripcion: 'Desarrollo de proyectos de manera responsable y exacta.' },
        { letra: 'M', termino: 'Custom House', traduccion: 'Aduana', descripcion: 'Generación de valor para las partes interesadas.' },
    ];

    return (
        <section className="seccion-filosofia">
            <div className="contenedor-filosofia">

                {/* Bloque de Introducción */}
                <div className="bloque-introduccion">
                    <h2 className="titulo-filosofia">FILOSOFÍA CUSTOM</h2>
                    <p className="texto-filosofia">
                        Somos una empresa con vocación de servicio, basada en la filosofía representada en nuestro nombre,
                        el cual hace referencia a la tradición, generación de valor y a soluciones personalizadas, por ende
                        es nuestro compromiso dar respuesta a las necesidades de nuestros clientes de manera responsable y
                        a la medida de sus requerimientos, convirtiéndonos en la mejor opción para el desarrollo de sus proyectos.
                    </p>
                </div>

                {/* Contenedor del Acróstico */}
                <div className="lista-acrostico">
                    {acrostico.map((item, indice) => (
                        <div key={indice} className="tarjeta-acrostico">

                            {/* Letra del Acróstico */}
                            <div className="contenedor-letra">
                                <span className="letra-inicial">{item.letra}</span>
                            </div>

                            {/* Contenido Descriptivo */}
                            <div className="contenido-acrostico">
                                <div className="encabezado-termino">
                                    <h3 className="termino-ingles">{item.termino}</h3>
                                    <span className="separador-termino">/</span>
                                    <h4 className="termino-espanol">{item.traduccion}</h4>
                                </div>
                                <p className="descripcion-termino">{item.descripcion}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}