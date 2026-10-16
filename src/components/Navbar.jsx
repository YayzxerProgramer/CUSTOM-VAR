import { NavLink } from 'react-router-dom';
import logoCustom from "../img/LogoCustom.svg";
import "../css/NavBar.css"

const ENLACES = [
    {
        to: "/",
        label: "Nosotros",
        badge: "Nuestra Empresa",
        descripcion: "Conoce nuestra trayectoria, valores y el equipo de ingeniería especializado que lidera CUSTOM V.A.R."
    },
    {
        to: "/soluciones",
        label: "Soluciones",
        badge: "Servicios & Proyectos",
        descripcion: "Ingeniería integral en climatización HVAC, refrigeración industrial/comercial y ventilación mecánica."
    },
    {
        to: "/soporte",
        label: "Soporte",
        badge: "Soporte Técnico",
        descripcion: "Canal de atención para radicación de solicitudes, mantenimientos preventivos y garantías operativas."
    },
    {
        to: "/iniciativas",
        label: "Iniciativas",
        badge: "Sostenibilidad VAR",
        descripcion: "Programas de responsabilidad social, eficiencia energética y compromiso con el medio ambiente."
    },
    {
        to: "/talento",
        label: "Talento",
        badge: "Talento Humano",
        descripcion: "Directorio corporativo de nuestro equipo y oportunidades laborales en «Trabaja con nosotros»."
    },
    {
        to: "/noticias",
        label: "Noticias",
        badge: "Actualidad & Novedades",
        descripcion: "Artículos técnicos, innovaciones en ingeniería térmica y noticias oficiales de la compañía."
    },
];

export default function Navbar() {
    return (
        <div className="contenedor-principal">
            <header className="encabezado-navegacion">
                <div className="envoltura-navegacion">
                    <div className="zona-logotipo">
                        <img src={logoCustom} alt="Logotipo CUSTOM VAR" className="logotipo" />
                    </div>
                    <nav className="menu-navegacion" aria-label="Menú principal de navegación">
                        {ENLACES.map(({ to, label, badge, descripcion }) => (
                            <div key={to} className="item-menu-contenedor">
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                                    aria-describedby={`tooltip-${label.toLowerCase()}`}
                                >
                                    {label}
                                </NavLink>

                                {/* Tooltip emergente (hover / focus) con descripción de la sección */}
                                <div
                                    id={`tooltip-${label.toLowerCase()}`}
                                    role="tooltip"
                                    className="cuadro-tooltip-nav"
                                >
                                    <div className="tooltip-flecha" aria-hidden="true" />
                                    <div className="tooltip-cabecera">
                                        <span className="tooltip-punto" aria-hidden="true" />
                                        <span className="tooltip-badge">{badge}</span>
                                    </div>
                                    <p className="tooltip-descripcion">{descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </header>

            <nav className="barra-inferior-movil" aria-label="Navegación móvil">
                {ENLACES.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => isActive ? "tab-movil tab-activo" : "tab-movil"}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}