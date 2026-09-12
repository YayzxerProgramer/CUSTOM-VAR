import CarruselAcordeon from '../CarruselAcordeon.jsx';
import {
    categoriasIndustria,
    servicios,
    solucionesAplicadasProyectos,
    solucionesAplicadasServicios,
} from '../../data/soluciones.js';

function CarruselOferta() {
    return (
        <CarruselAcordeon
            items={categoriasIndustria}
            itemsPorPagina={3}
            className="soluciones-oferta-carousel"
            ariaLabel="Espacios e industrias atendidas"
            altura="520px"
            renderItem={(item) => (
                <div className="industria-panel">
                    <h3 className="industria-panel__titulo">{item.titulo}</h3>
                    <div className="industria-panel__reveal">
                        <p className="industria-panel__trio">Ventilación · Aire Acondicionado · Refrigeración</p>
                        <p className="industria-panel__desc">{item.descripcion}</p>
                        <a href="#proyectos" className="industria-panel__btn">Explorar solución</a>
                    </div>
                </div>
            )}
        />
    );
}

function AplicadasGrid({ items, onSolicitarAsesoria }) {
    return (
        <div className="oferta-grid" style={{ marginTop: '2rem' }}>
            {items.map((item) => (
                <article className="oferta-card" key={item.id}>
                    <div className="oferta-card__media" style={{ height: '140px', background: 'var(--azul-marino-profundo, #0A192F)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--rojo-custom, #DB2D2C)' }}>{item.icono}</span>
                    </div>
                    <div className="oferta-card__contenido">
                        <h3>{item.titulo}</h3>
                        <p>{item.descripcion}</p>
                        <button type="button" onClick={onSolicitarAsesoria}>
                            Cuéntenos su requerimiento
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

function OfertaGrid({ items, tipo, onSolicitarAsesoria }) {
    return (
        <div className="oferta-grid">
            {items.map((item) => (
                <article className="oferta-card" key={item.id}>
                    <div className="oferta-card__media">
                        {item.imagen && <img src={item.imagen} alt="" />}
                        <span className="material-symbols-outlined">{item.icono}</span>
                    </div>
                    <div className="oferta-card__contenido">
                        <span>{tipo}</span>
                        <h3>{item.titulo}</h3>
                        <p>{item.descripcion}</p>
                        <button type="button" onClick={onSolicitarAsesoria}>
                            Cuéntenos su requerimiento
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default function OfertaSoluciones({ onSolicitarAsesoria, proyectos = [] }) {
    return (
        <>
            <section className="soluciones-bloque" id="proyectos">
                <div className="soluciones-container soluciones-bloque__intro">
                    <span className="soluciones-label">Proyectos</span>
                    <h2>SOLUCIONES APLICADAS A PROYECTOS</h2>
                </div>
                <CarruselOferta />
                <div className="soluciones-container">
                    <p className="soluciones-texto-pdf">
                        Ofrecemos un acompañamiento total a sus requerimientos de Ventilación, Aire acondicionado y
                        Refrigeración. Prestos a asistirle en el diseño, selección, suministro e instalación de sistemas
                        nuevos, así como en la implementación de estrategias Operación, mantenimiento preventivo,
                        reparaciones y modernización, para que sus proyectos o instalaciones funcionen del modo más
                        eficiente posible y dentro de su presupuesto.
                    </p>
                </div>
                <div className="soluciones-container">
                    <AplicadasGrid items={solucionesAplicadasProyectos} onSolicitarAsesoria={onSolicitarAsesoria} />
                </div>
                {proyectos.length > 0 && (
                    <div className="soluciones-container" style={{ marginTop: '3rem' }}>
                        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                            <span className="soluciones-label">Casos Ejecutados</span>
                            <h3>VER PESTAÑA DE PROYECTOS</h3>
                        </div>
                        <OfertaGrid items={proyectos} tipo="Proyecto VAR" onSolicitarAsesoria={onSolicitarAsesoria} />
                    </div>
                )}
            </section>

            <section className="soluciones-bloque soluciones-bloque--oscuro" id="servicios">
                <div className="soluciones-container soluciones-bloque__intro">
                    <span className="soluciones-label">Servicios</span>
                    <h2>SOLUCIONES APLICADAS A SERVICIOS</h2>
                </div>
                <CarruselOferta />
                <div className="soluciones-container">
                    <p className="soluciones-texto-pdf soluciones-texto-pdf--oscuro">
                        Diseñemos juntos el programa de mantenimiento centrado en confiabilidad.
                        Manejamos un modelo de contratación flexible, que cubre la atención por evento, la atención
                        cíclica programada, hasta la posibilidad de que un miembro de nuestro equipo tenga presencia
                        a tiempo parcial o completo en sus instalaciones. De acuerdo a su actividad y requerimientos,
                        cada una de estas opciones puede representar beneficios para usted. Le invitamos a ampliar
                        esta información a través de nuestros datos de contacto o con la visita de uno de nuestros
                        representantes.
                    </p>
                </div>
                <div className="soluciones-container">
                    <AplicadasGrid items={solucionesAplicadasServicios} onSolicitarAsesoria={onSolicitarAsesoria} />
                </div>
                <div className="soluciones-container" style={{ marginTop: '3rem' }}>
                    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <span className="soluciones-label">Líneas de Atención</span>
                        <h3>VER PESTAÑA DE SERVICIOS PROYECTOS</h3>
                    </div>
                    <OfertaGrid items={servicios} tipo="Servicio VAR" onSolicitarAsesoria={onSolicitarAsesoria} />
                </div>
            </section>
        </>
    );
}
