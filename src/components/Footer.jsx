import React from "react";
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
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Soluciones</a></li>
                        <li><a href="#">Soporte Técnico</a></li>
                        <li><a href="#">Iniciativas VAR</a></li>
                    </ul>
                </div>
                <div class="columna-pie">
                    <h5 class="titulo-columna">Contacto</h5>
                    <ul class="lista-contacto">
                        <li>📍 Medellín, Colombia</li>
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