import { NavLink } from 'react-router-dom';
import logoCustom from "../img/LogoCustom.svg";
import "../css/NavBar.css"

const ENLACES = [
    { to: "/nosotros", label: "Nosotros" },
    { to: "/soluciones", label: "Soluciones" },
    { to: "/soporte", label: "Soporte" },
    { to: "/iniciativas", label: "Iniciativas" },
    { to: "/talento", label: "Talento" },
    { to: "/noticias", label: "Noticias" },
];

export default function Navbar() {
    return (
        <div className="contenedor-principal">
            <header className="encabezado-navegacion">
                <div className="envoltura-navegacion">
                    <div className="zona-logotipo">
                        <img src={logoCustom} alt="Logotipo CUSTOM VAR" className="logotipo" />
                    </div>
                    <nav className="menu-navegacion">
                        {ENLACES.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                            >
                                {label}
                            </NavLink>
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