import CarruselAcordeon from '../CarruselAcordeon.jsx';
import { buyerPersonas } from '../../data/soluciones.js';

const whatsappUrl = 'https://wa.me/573006830303?text=Hola,%20quiero%20recibir%20asesoria%20sobre%20soluciones%20VAR.';

export default function SolucionesHero({ onSolicitarAsesoria }) {
    return (
        <section className="soluciones-hero">
            <div className="soluciones-hero__intro">
                <span className="soluciones-label">Soluciones</span>
                <h1>Proyectos y servicios para cada decision critica VAR.</h1>
                <p>
                    Conectamos su perfil operativo con estrategias de ventilacion, aire acondicionado y refrigeracion
                    disenadas para proteger tiempo, presupuesto, continuidad y calidad.
                </p>
            </div>

            <CarruselAcordeon
                items={buyerPersonas}
                itemsPorPagina={4}
                className="soluciones-buyer-carousel"
                ariaLabel="Buyer personas de soluciones CUSTOM VAR"
                altura="680px"
                renderItem={(item) => (
                    <div className="buyer-card">
                        <span className="buyer-card__subtitulo">{item.subtitulo}</span>
                        <h2>{item.titulo}</h2>
                        <div className="buyer-card__banner">
                            <strong>{item.dolor}</strong>
                            <p>{item.descripcion}</p>
                            <p>{item.solucion}</p>
                            <div className="buyer-card__acciones">
                                <a href="#proyectos">Proyectos</a>
                                <a href="#servicios">Servicios</a>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                <button type="button" onClick={onSolicitarAsesoria}>
                                    Cuentenos su requerimiento
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            />
        </section>
    );
}
