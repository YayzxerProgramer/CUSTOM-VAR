import CarruselAcordeon from '../CarruselAcordeon.jsx';
import { categoriasIndustria, proyectos, servicios } from '../../data/soluciones.js';

function CarruselOferta({ onSolicitarAsesoria }) {
    return (
        <CarruselAcordeon
            items={categoriasIndustria}
            itemsPorPagina={3}
            className="soluciones-oferta-carousel"
            ariaLabel="Espacios e industrias atendidas"
            altura="520px"
            renderItem={(item) => (
                <div className="industria-panel">
                    <span>{item.subtitulo}</span>
                    <h2>{item.titulo}</h2>
                    <button type="button" onClick={onSolicitarAsesoria}>
                        Cuentenos su requerimiento
                    </button>
                </div>
            )}
        />
    );
}

function OfertaGrid({ items, tipo, onSolicitarAsesoria }) {
    return (
        <div className="oferta-grid">
            {items.map((item) => (
                <article className="oferta-card" key={item.id}>
                    <div className="oferta-card__media">
                        <img src={item.imagen} alt="" />
                        <span className="material-symbols-outlined">{item.icono}</span>
                    </div>
                    <div className="oferta-card__contenido">
                        <span>{tipo}</span>
                        <h3>{item.titulo}</h3>
                        <p>{item.descripcion}</p>
                        <button type="button" onClick={onSolicitarAsesoria}>
                            Cuentenos su requerimiento
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default function OfertaSoluciones({ onSolicitarAsesoria }) {
    return (
        <>
            <section className="soluciones-bloque" id="proyectos">
                <div className="soluciones-container soluciones-bloque__intro">
                    <span className="soluciones-label">Proyectos</span>
                    <h2>Diseño, implementación y consultoría.</h2>
                </div>
                <CarruselOferta onSolicitarAsesoria={onSolicitarAsesoria} />
                <div className="soluciones-container">
                    <p className="soluciones-texto-pdf">
                        Ofrecemos un acompañamiento total a sus requerimientos de Ventilación, Aire acondicionado y
                        Refrigeración. Prestos a asistirle en el diseño, seleccion, suministro e instalación de sistemas
                        nuevos, así como en la implementación de estrategias Operación, mantenimiento preventivo,
                        reparaciones y modernización, para que sus proyectos o instalaciones funcionen del modo más
                        eficiente posible y dentro de su presupuesto.
                    </p>
                </div>
                <div className="soluciones-container">
                    <OfertaGrid items={proyectos} tipo="Proyecto VAR" onSolicitarAsesoria={onSolicitarAsesoria} />
                </div>
            </section>

            <section className="soluciones-bloque soluciones-bloque--oscuro" id="servicios">
                <div className="soluciones-container soluciones-bloque__intro">
                    <span className="soluciones-label">Servicios</span>
                    <h2>Operación, mantenimiento, reparación y modernización.</h2>
                </div>
                <CarruselOferta onSolicitarAsesoria={onSolicitarAsesoria} />
                <div className="soluciones-container">
                    <p className="soluciones-texto-pdf soluciones-texto-pdf--oscuro">
                        Diseñemos juntos el programa de mantenimiento centrado en confiabilidad,
                        Manejamos un modelo de contratación flexible, que cubre la atención por evento, la atención
                        cíclica programada, hasta la posibilidad de que un miembro de nuestro equipo tenga presencia
                        a tiempo parcial o completo en sus instalaciones. De acuerdo a su actividad y requerimientos,
                        cada una de estas opciones puede representar beneficios para usted. Le invitamos a ampliar
                        esta información a través de nuestros datos de contacto o con la visita de uno de nuestros
                        representantes.
                    </p>
                </div>
                <div className="soluciones-container">
                    <OfertaGrid items={servicios} tipo="Servicio VAR" onSolicitarAsesoria={onSolicitarAsesoria} />
                </div>
            </section>
        </>
    );
}
