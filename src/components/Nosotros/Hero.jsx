import CarruselAcordeon from '../CarruselAcordeon.jsx';
import { panelesHeroNosotros } from '../../data/nosotrosHero.js';
import '../../css/Nosotros/Hero.css';

const serviciosClimatizacion = [
    {
        titulo: 'Ventilación',
        descripcion: 'Renovación constante del aire para espacios sanos y libres de contaminantes.',
    },
    {
        titulo: 'Aire Acondicionado',
        descripcion: 'Temperatura y humedad ideales para el confort en cada ambiente.',
    },
    {
        titulo: 'Refrigeración',
        descripcion: 'Sistemas de frío eficientes para conservación y procesos industriales.',
    },
];

export default function Hero() {
    return (
        <CarruselAcordeon
            items={panelesHeroNosotros}
            itemsPorPagina={3}
            className="hero-carrusel"
            ariaLabel="Soluciones por sector"
            altura="calc(100vh - 80px)"
            renderItem={(item) => (
                <div className="industria-panel">
                    <h3 className="industria-panel__titulo">{item.titulo}</h3>
                    <div className="industria-panel__reveal">
                        <p className="industria-panel__desc">{item.descripcion}</p>
                        <div className="industria-panel__grid">
                            {serviciosClimatizacion.map((servicio) => (
                                <div className="industria-panel__col" key={servicio.titulo}>
                                    <h4 className="industria-panel__col-titulo">{servicio.titulo}</h4>
                                    <p className="industria-panel__col-desc">{servicio.descripcion}</p>
                                </div>
                            ))}
                        </div>
                        <a href={item.enlace} className="industria-panel__btn">Explorar solución</a>
                    </div>
                </div>
            )}
        />
    );
}
