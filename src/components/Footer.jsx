import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css"
const Footer = () => {
    return (
        <footer class="pie-pagina">
            <div class="contenedor-pie">
                <div class="columna-pie">
                    <div class="logo-pie">
                        <span class="nombre-empresa">CUSTOM VAR</span>
                    </div>
                    <p class="descripcion-empresa">
                        Líderes en ingeniería HVAC en Colombia. Expertos en diseño, instalación y mantenimiento de sistemas críticos.
                    </p>
                    <div class="redes-sociales">
                        <a href="#" class="enlace-social">🌐</a>
                        <a href="#" class="enlace-social">@</a>
                    </div>
                </div>
                <div class="columna-pie">
                    <h5 class="titulo-columna">Enlaces Rápidos</h5>
                    <ul class="lista-enlaces">
                        <li><Link to="/">Nosotros</Link></li>
                        <li><Link to="/soluciones">Soluciones</Link></li>
                        <li><Link to="/soporte">Soporte Técnico</Link></li>
                        <li><Link to="/iniciativas">Iniciativas VAR</Link></li>
                    </ul>
                </div>
                <div class="columna-pie">
                    <h5 class="titulo-columna">Contacto</h5>
                    <ul class="lista-contacto">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{verticalAlign: 'middle', marginRight: 8}}>
                                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Cartagena, Colombia
                        </li>
                        <li>✉ gerencia@customsoluciones.com</li>
                        <li>☎ +57 (604) 000 0000 </li>
                    </ul>
                </div>
                <div class="columna-pie">
                    <h5 class="titulo-columna">Boletín Informativo</h5>
                    <p class="texto-boletin">Suscríbete para recibir noticias sobre ingeniería y eficiencia energética.</p>
                    <div class="formulario-boletin">
                        <input
                            type="email"
                            placeholder="Tu email"
                            class="campo-correo" />
                        <button class="boton-boletin">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
            <div class="barra-inferior">
                <p class="copyright">© 2024 CUSTOM VAR. All Rights Reserved.</p>
                <div class="enlaces-legales">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;