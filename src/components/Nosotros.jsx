import React from "react";
import "../css/Nosotros.css"

const Nosotros = () => {
    return (
        <section class="seccion-presencia">
            <div class="contenedor-presencia">
                <div class="contenido-presencia">
                    <h2 class="subtitulo-presencia">Nosotros</h2>
                    <h3 class="titulo-presencia">Llegamos a cada rincón de Colombia</h3>
                    <p class="descripcion-presencia">Contamos con centros de servicio y técnicos certificados en las principales ciudades del país, asegurando una respuesta inmediata ante cualquier eventualidad técnica.</p>
                    <div class="lista-ciudades">
                        <div class="ciudad">
                            <span class="indicador-ciudad"></span>
                            <span>Bogotá (HQ)</span>
                        </div>
                        <div class="ciudad">
                            <span class="indicador-ciudad"></span>
                            <span>Medellín</span>
                        </div>
                        <div class="ciudad">
                            <span class="indicador-ciudad"></span>
                            <span>Cali</span>
                        </div>
                        <div class="ciudad">
                            <span class="indicador-ciudad"></span>
                            <span>Barranquilla</span>
                        </div>
                    </div>
                    <button class="boton-presencia">
                        Contactar Sede Regional
                    </button>
                </div>
                <div class="contenedor-mapa">
                    <div class="fondo-brillo"></div>
                    <div class="tarjeta-mapa">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYRiEWAzrgBXzhL01KOgq_oIQPAZWIXG_DEx3Bu1A-tzQZNT6eFgIiWJF_ojeJEqN3kXFH75T-jpoKQiMRjWSwhOFmDzhX_7RVVVBbFySIxH4cioR0vf4Mru2NTODvnGneugh1LZHCuz7jhQNqHOhexqg3nK-BnS0ABwFMgNEo0Zsc4gsvtOGl7tDuvHUnFEzMH1_29cKXl2ycaZyeD9A26qu0KH6BYWyXq3nT0WSG2sV830oYE9TjR2S5qnAQVZSdni4jC_Qc2nw"
                            alt="Mapa Colombia"
                            class="imagen-mapa" />
                        <span class="marcador marcador-bogota"></span>
                        <span class="marcador marcador-medellin"></span>
                        <span class="marcador marcador-cali"></span>
                        <span class="marcador marcador-barranquilla"></span>
                        <div class="estado-red">
                            NETWORK_STATUS: ACTIVE // COORDS: 4.7110° N, 74.0721° W
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;