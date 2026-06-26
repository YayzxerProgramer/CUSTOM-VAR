import React, { useState } from "react";
import colombiaMap from "../../img/co.svg";
import logoSolo from "../../img/LogoSolo.png";
import "../../css/Nosotros/Nosotros.css";

const ciudades = [
    {
        id: "cartagena",
        ciudad: "Cartagena",
        region: "Headquarters",
        rol: "Headquarters, centro de distribucion y planta de produccion.",
        anos: "Por confirmar",
        tr: "Por confirmar",
        clientes: "Por confirmar",
        proyectos: "Por confirmar",
        x: 44,
        y: 25,
        useLogo: true,
    },
    {
        id: "barranquilla",
        ciudad: "Barranquilla",
        region: "Caribe",
        rol: "Cobertura de servicio regional para proyectos y soporte tecnico.",
        anos: "Por confirmar",
        tr: "Por confirmar",
        clientes: "Por confirmar",
        proyectos: "Por confirmar",
        x: 47,
        y: 20,
        useLogo: true,
    },
    {
        id: "medellin",
        ciudad: "Medellin",
        region: "Antioquia",
        rol: "Servicio tecnico y proyectos VAR.",
        anos: "Por confirmar",
        tr: "Por confirmar",
        clientes: "Por confirmar",
        proyectos: "Por confirmar",
        x: 44,
        y: 40,
    },
    {
        id: "bogota",
        ciudad: "Bogota",
        region: "Centro",
        rol: "Planta de produccion y servicio central.",
        anos: "Por confirmar",
        tr: "Por confirmar",
        clientes: "Por confirmar",
        proyectos: "Por confirmar",
        x: 51,
        y: 51,
    },
    {
        id: "cali",
        ciudad: "Cali",
        region: "Pacifico",
        rol: "Centro de distribucion y planta de produccion.",
        anos: "Por confirmar",
        tr: "Por confirmar",
        clientes: "Por confirmar",
        proyectos: "Por confirmar",
        x: 39,
        y: 55,
        useLogo: true,
    },
];

const identidad = [
    {
        titulo: "Filosofia CUSTOM",
        texto: "Servicio, tradicion, soluciones personalizadas y compromiso con las necesidades reales del cliente.",
    },
    {
        titulo: "Politica VAR",
        texto: "Value Add Representative: ventilacion, aire acondicionado y refrigeracion con respaldo tecnico.",
    },
    {
        titulo: "Redefiniendo el Valor",
        texto: "Ingenieria de valor, soporte en campo, eficiencia, confiabilidad y relaciones a largo plazo.",
    },
];

const varItems = [
    ["V", "Ventilacion", "Value / Valor"],
    ["A", "Aire acondicionado", "Added / Agregado"],
    ["R", "Refrigeracion", "Representative / Representante"],
];

const infraestructura = [
    ["Headquarters", "Cartagena"],
    ["Centros de distribucion", "Cali / Cartagena"],
    ["Plantas de produccion", "Cartagena / Bogota / Cali"],
];

const equipo = ["Gerencia", "Ingenieria", "Diseno", "Instalacion", "Soporte Tecnico"];

const certificaciones = [
    "Certificaciones de calidad",
    "Certificaciones tecnicas",
    "Normativas aplicables",
    "Certificaciones futuras",
];

export default function Nosotros() {
    const [ciudadActiva, setCiudadActiva] = useState(ciudades[0]);

    return (
        <section className="custom-nosotros" id="nosotros">
            <div className="nosotros-container">



                <section className="map-section" aria-label="Presencia nacional">
                    <div className="map-section__copy">
                        <span className="section-label">Presencia Nacional</span>
                        <h3>Operacion en las principales ciudades de Colombia.</h3>
                        <p>
                            Seleccione una ciudad en el mapa para consultar la informacion
                            preparada para años de servicio, TR instaladas, clientes atendidos
                            y proyectos ejecutados.
                        </p>

                        <div className="city-detail">
                            <span>{ciudadActiva.region}</span>
                            <h4>{ciudadActiva.ciudad}</h4>
                            <p>{ciudadActiva.rol}</p>
                            <dl>
                                <div>
                                    <dt>Años de servicio</dt>
                                    <dd>{ciudadActiva.anos}</dd>
                                </div>
                                <div>
                                    <dt>TR instaladas</dt>
                                    <dd>{ciudadActiva.tr}</dd>
                                </div>
                                <div>
                                    <dt>Clientes atendidos</dt>
                                    <dd>{ciudadActiva.clientes}</dd>
                                </div>
                                <div>
                                    <dt>Proyectos ejecutados</dt>
                                    <dd>{ciudadActiva.proyectos}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="map-card">
                        <div className="map-illustration">
                            <img className="colombia-map" src={colombiaMap} alt="Mapa de Colombia" />

                            {ciudades.map((item) => (
                                <button
                                    className={`city-marker ${item.useLogo ? "city-marker--logo" : ""} ${ciudadActiva.id === item.id ? "is-active" : ""}`}
                                    key={item.id}
                                    style={{ "--x": `${item.x}%`, "--y": `${item.y}%` }}
                                    onClick={() => setCiudadActiva(item)}
                                    onMouseEnter={() => setCiudadActiva(item)}
                                    aria-label={`Ver informacion de ${item.ciudad}`}
                                >
                                    {item.useLogo ? (
                                        <img
                                            className="city-marker__logo"
                                            src={logoSolo}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <span className="city-marker__dot" />
                                    )}
                                    <span className="city-marker__name">{item.ciudad}</span>
                                </button>
                            ))}
                        </div>
                        <p className="map-quote">
                            "Somos profesionales al servicio de las personas y a traves de nuestro
                            trabajo, aportamos al confort y a la calidad de vida, para el disfrute
                            de espacios, productos y actividades."
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}
