import React from 'react';
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
                        <a className="enlace-menu enlace-activo" href="#">Nosotros</a>
                        <a className="enlace-menu linea-inferior" href="#">Soluciones</a>
                        <a className="enlace-menu linea-inferior" href="#">Soporte</a>
                        <a className="enlace-menu linea-inferior" href="#">Iniciativas</a>
                        <a className="enlace-menu linea-inferior" href="#">Talento</a>
                        <a className="enlace-menu linea-inferior" href="#">Noticias VAR</a>
                    </nav>

                    <button className="boton-contacto">Contacto</button>
                </div>
            </header>
        </div>
    );
}