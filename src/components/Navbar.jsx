import React from 'react';
import { NavLink } from 'react-router-dom'; // Importamos NavLink
import "../css/NavBar.css"

export default function Navbar() {
    return (
        <div className="contenedor-principal">
            <header className="encabezado-navegacion">
                <div className="envoltura-navegacion">
                    <div className="zona-logotipo">
                        <img src="/src/img/logo-custom-var.jpg" alt="Logotipo CUSTOM VAR" className="logotipo" />
                    </div>
                    <nav className="menu-navegacion">
                        {/* NavLink evalúa si la URL coincide y aplica el callback en className */}
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                        >
                            Nosotros
                        </NavLink>
                        <NavLink
                            to="/soluciones"
                            className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                        >
                            Soluciones
                        </NavLink>
                        <NavLink
                            to="/soporte"
                            className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                        >
                            Soporte
                        </NavLink>
                        <NavLink
                            to="/iniciativas"
                            className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                        >
                            Iniciativas
                        </NavLink>
                        <NavLink
                            to="/talento"
                            className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                        >
                            Talento
                        </NavLink>
                        <NavLink
                            to="/noticias"
                            className={({ isActive }) => isActive ? "enlace-menu enlace-activo" : "enlace-menu linea-inferior"}
                        >
                            Noticias VAR
                        </NavLink>
                    </nav>

                    <button className="boton-contacto">Contacto</button>
                </div>
            </header>
        </div>
    );
}