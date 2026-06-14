import CarruselAcordeon from '../CarruselAcordeon.jsx';
import { panelesHeroNosotros } from '../../data/nosotrosHero.js';
import '../../css/Nosotros/Hero.css';

export default function Hero() {
    return (
        <CarruselAcordeon
            items={panelesHeroNosotros}
            itemsPorPagina={3}
            className="hero-carrusel"
            ariaLabel="Soluciones por sector"
            textoBoton="Explorar solucion"
            altura="calc(100vh - 80px)"
        />
    );
}
