import CarruselAcordeon from './CarruselAcordeon.jsx';
import '../css/Hero.css';

const panelesHero = [
    { id: 1, ruta: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200', titulo: 'Industria y Manufactura', subtitulo: 'Sistemas Industriales', descripcion: 'Diseno de sistemas de inyeccion y extraccion mecanica.', enlace: '#' },
    { id: 2, ruta: 'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titulo: 'Educativo', subtitulo: 'Climatizacion VRF', descripcion: 'Climatizacion de precision con alta eficiencia energetica.', enlace: '#' },
    { id: 3, ruta: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titulo: 'Restaurantes', subtitulo: 'Cadena de Frio', descripcion: 'Sistemas de frio para industrias alimentarias y farmaceuticas.', enlace: '#' },
    { id: 4, ruta: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200', titulo: 'Centro de Datos', subtitulo: 'Control Termico', descripcion: 'Monitoreo inteligente y tableros de control avanzados.', enlace: '#' },
    { id: 5, ruta: 'https://images.unsplash.com/photo-1527738697320-513f6648bc26?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titulo: 'VAR', subtitulo: 'Soporte Tecnico', descripcion: 'Planes preventivos y correctivos para plantas industriales.', enlace: '#' },
    { id: 6, ruta: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', titulo: 'Oficinas y Servicios', subtitulo: 'Proyectos Especiales', descripcion: 'Consultoria y modelado de fluidos computarizados.', enlace: '#' },
    { id: 7, ruta: 'https://images.unsplash.com/photo-1628372095387-017d1099fc19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titulo: 'Hospitales', subtitulo: 'Infraestructura', descripcion: 'Instalacion de chillers y ducterias de gran escala.', enlace: '#' },
    { id: 8, ruta: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titulo: 'Hoteles', subtitulo: 'Auditorias', descripcion: 'Optimizacion de consumo electrico en sistemas termicos.', enlace: '#' },
    { id: 9, ruta: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titulo: 'Locales Y Centros Comerciales', subtitulo: 'Buena Refrigeracion', descripcion: 'Optimizacion de sistemas de refrigeracion en entornos comerciales.', enlace: '#' },
];

export default function HeroAcordeonCarrusel() {
    return (
        <CarruselAcordeon
            items={panelesHero}
            itemsPorPagina={3}
            className="hero-carrusel"
            ariaLabel="Soluciones por sector"
            textoBoton="Explorar solucion"
            altura="calc(100vh - 80px)"
        />
    );
}
