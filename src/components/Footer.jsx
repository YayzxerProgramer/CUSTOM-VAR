import React from "react";
import { Link } from "react-router-dom";
import logoCustom from "../img/LogoCustom.svg";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="pie-pagina">
            <div className="contenedor-pie">
                <div className="columna-pie">
                    <div className="logo-pie">
                        <img src={logoCustom} alt="CUSTOM V.A.R." className="logo-pie__img" />
                    </div>
                    <p className="descripcion-empresa">
                        Líderes en ingeniería VAR en Colombia. Expertos en diseño, instalación y mantenimiento de sistemas críticos.
                    </p>
                    <div className="redes-sociales">
                        <a href="#" className="enlace-social" aria-label="Sitio web">🌐</a>
                        <a href="#" className="enlace-social" aria-label="Contacto">@</a>
                    </div>
                </div>
                <div className="columna-pie">
                    <h5 className="titulo-columna">Enlaces Rápidos</h5>
                    <ul className="lista-enlaces">
                        <li><Link to="/">Nosotros</Link></li>
                        <li><Link to="/soluciones">Soluciones</Link></li>
                        <li><Link to="/soporte">Soporte Técnico</Link></li>
                        <li><Link to="/iniciativas">Iniciativas VAR</Link></li>
                    </ul>
                </div>
                <div className="columna-pie columna-contacto">
                    <h5 className="titulo-columna">Contacto</h5>
                    <ul className="lista-contacto">
                        <li>
                            <svg className="icono-contacto" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Cartagena, Colombia</span>
                        </li>
                        <li>
                            <svg className="icono-contacto" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <a href="mailto:Maximoconforte@customsoluciones.com" className="enlace-contacto">
                                Maximoconforte@customsoluciones.com
                            </a>
                        </li>
                        <li>
                            <svg className="icono-contacto" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <a href="tel:+573006830303" className="enlace-contacto">
                                +57 300 6830303
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="columna-pie">
                    <h5 className="titulo-columna">Boletín Informativo</h5>
                    <p className="texto-boletin">Suscríbete para recibir noticias sobre ingeniería y eficiencia energética.</p>
                    <div className="formulario-boletin">
                        <input
                            type="email"
                            placeholder="Tu email"
                            className="campo-correo" />
                        <button className="boton-boletin">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
            <div className="barra-inferior">
                <p className="copyright">© 2024 CUSTOM VAR. All Rights Reserved.</p>
                <div className="enlaces-legales">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;