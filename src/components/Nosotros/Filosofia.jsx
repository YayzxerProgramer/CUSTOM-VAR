import React from 'react';
import '../../css/Nosotros/Filosofia.css';

const VALORES = [
    {
        titulo: 'Servicio',
        descripcion:
            'Vocación de servicio como principio fundamental: acompañar al cliente antes, durante y después de cada proyecto.',
    },
    {
        titulo: 'Tradición',
        descripcion:
            'La experiencia y el conocimiento acumulados nos permiten responder con criterio, oficio y responsabilidad.',
    },
    {
        titulo: 'Soluciones a la medida',
        descripcion:
            'Cada requerimiento es único. Diseñamos propuestas personalizadas que se ajustan a las necesidades reales.',
    },
    {
        titulo: 'Generación de Valor',
        descripcion:
            'Cada proyecto debe generar valor real para todas las partes interesadas: clientes, colaboradores, aliados y comunidad, no solo para la compañía.',
    },
];

/**
 * Resalta cada aparición de "custom" (case-insensitive) en un <span>.
 * Conserva las mayúsculas/minúsculas originales del texto.
 */
function resaltarCustom(texto) {
    if (!texto) return texto;
    const partes = texto.split(/(custom)/i);
    return partes.map((parte, i) =>
        /^custom$/i.test(parte)
            ? <span key={i} className="palabra-custom">{parte}</span>
            : <React.Fragment key={i}>{parte}</React.Fragment>
    );
}

export default function Filosofia() {
    return (
        <section className="seccion-filosofia">
            <div className="contenedor-filosofia">
                <header className="bloque-introduccion-filosofia">
                    <h2 className="titulo-seccion-filosofia">
                        FILOSOFÍA <span className="palabra-custom">CUSTOM</span>
                    </h2>
                    <p className="texto-introduccion-filosofia">
                        {resaltarCustom(
                            'Somos una empresa con vocación de servicio, basada en la filosofía representada en nuestro ' +
                            'nombre, el cual hace referencia a la tradición, generación de valor y a soluciones personalizadas, ' +
                            'por ende es nuestro compromiso dar respuesta a las necesidades de nuestros clientes de manera ' +
                            'responsable y a la medida de sus requerimientos, convirtiéndonos en la mejor opción para el ' +
                            'desarrollo de sus proyectos.'
                        )}
                    </p>
                </header>

                <div className="grilla-valores">
                    {VALORES.map((valor) => (
                        <article className="tarjeta-valor" key={valor.titulo}>
                            <h3 className="tarjeta-valor__titulo">
                                {resaltarCustom(valor.titulo)}
                            </h3>
                            <span className="tarjeta-valor__linea" aria-hidden="true" />
                            <p className="tarjeta-valor__descripcion">
                                {resaltarCustom(valor.descripcion)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}