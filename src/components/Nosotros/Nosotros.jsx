import React, { useState } from "react";
import colombiaMap from "../../img/co.svg";
import logoSolo from "../../img/LogoSolo.png";
import "../../css/Nosotros/Nosotros.css";

const ciudades = [
    {
        id: "cartagena",
        ciudad: "Cartagena",
        region: "Caribe",
        rol: "Sede principal de operación nacional V.A.R. y uno de los principales centros desde donde coordinamos nuestra actividad en Colombia. Desde esta ubicación atendemos proyectos para los sectores industrial, comercial, institucional y de infraestructura, respaldados por nuestra planta de producción de ductería, que fortalece nuestra capacidad para desarrollar soluciones integrales y responder con mayor agilidad a los requerimientos de cada proyecto.",
        x: 44,
        y: 22,
        useLogo: true,
    },
    {
        id: "bogota",
        ciudad: "Bogotá",
        region: "Centro",
        rol: "Funciona como centro de distribución V.A.R. para la región centro y norte de Colombia, además de contar con planta de producción de ductería. Desde esta operación hemos participado en proyectos empresariales, farmacéuticos, institucionales, hospitalarios y de infraestructura, consolidando una capacidad de respuesta estratégica para proyectos que requieren coordinación técnica, suministro de equipos y soluciones especializadas.",
        x: 51,
        y: 51,
        useLogo: true,
    },
    {
        id: "cali",
        ciudad: "Cali",
        region: "Pacífico",
        rol: "Representa nuestro centro de distribución para el suroccidente colombiano, desde donde fortalecemos nuestra capacidad de atención a proyectos y clientes de la región. Nuestra experiencia incluye el desarrollo e implementación de soluciones V.A.R. para el sector hospitalario y comercial, así como proyectos asociados a establecimientos de servicios y cadenas de droguerías, donde la confiabilidad y continuidad de los sistemas son factores fundamentales.",
        x: 39,
        y: 57,
        useLogo: true,
    },
    {
        id: "barranquilla",
        ciudad: "Barranquilla",
        region: "Caribe",
        rol: "Sede Inhouse con servicios permanentes de V.A.R y desarrollo de proyectos con entidades referentes del mercado energético. Además, atendemos requerimientos técnicos de clientes en toda la ciudad mediante soluciones preventivas y correctivas.",
        x: 47,
        y: 17,
    },
    {
        id: "medellin",
        ciudad: "Medellín",
        region: "Antioquia",
        rol: "Desarrollamos proyectos para entidades gubernamentales e infraestructura institucional, participando en soluciones de climatización y ventilación orientadas a instalaciones que requieren altos estándares de funcionamiento. Nuestra experiencia en la región refleja la capacidad de integrar soluciones técnicas a proyectos arquitectónicos y de infraestructura con requerimientos específicos.",
        x: 44,
        y: 40,
    },
    {
        id: "quindio",
        ciudad: "Quindío",
        region: "Eje Cafetero",
        rol: "Nuestra experiencia incluye la participación en proyectos institucionales y gubernamentales, además de dos operaciones Inhouse desarrolladas para el sector hotelero. Estos proyectos nos han permitido aportar soluciones V.A.R. adaptadas a instalaciones con diferentes niveles de exigencia, integrando criterios de confort, funcionalidad y desempeño para responder a las necesidades particulares de cada infraestructura.",
        x: 42,
        y: 51,
    },
    {
        id: "cundinamarca",
        ciudad: "Cundinamarca",
        region: "Centro",
        rol: "Concentra parte importante de nuestra experiencia en proyectos empresariales, farmacéuticos e institucionales, incluyendo instalaciones que demandan condiciones controladas y soluciones de alto desempeño. Nuestra participación en esta región ha fortalecido nuestra capacidad para atender proyectos de especialidad técnica, donde la precisión en el diseño, suministro e implementación de los sistemas V.A.R. resulta fundamental.",
        x: 54,
        y: 49,
    },
    {
        id: "turbo",
        ciudad: "Turbo",
        region: "Antioquia",
        rol: "Hemos participado en proyectos asociados a infraestructura marítima estratégica, aportando soluciones de ventilación y climatización para instalaciones vinculadas a la operación portuaria y al desarrollo de infraestructura de la región. Esta experiencia demuestra nuestra capacidad para llevar soluciones V.A.R. a proyectos ubicados en zonas estratégicas y con condiciones operativas particulares.",
        x: 36,
        y: 32,
    },
    {
        id: "popayan",
        ciudad: "Popayán",
        region: "Cauca",
        rol: "Nuestra experiencia incluye proyectos relacionados con infraestructura aeroportuaria, donde las soluciones de ventilación y climatización deben responder a criterios de confiabilidad, continuidad operativa y condiciones específicas de la infraestructura, proyecto de alta importancia para la conectividad regional.",
        x: 37,
        y: 64,
    },
    {
        id: "san-andres",
        ciudad: "San Andrés",
        region: "Insular",
        rol: "Hemos participado en proyectos de infraestructura aeroportuaria, llevando nuestra experiencia en soluciones V.A.R. a instalaciones ubicadas en un entorno insular con condiciones ambientales particulares. Nuestra participación evidencia la capacidad logística y técnica para desarrollar proyectos fuera de los principales centros urbanos del país.",
        x: 9,
        y: 14,
    },
    {
        id: "providencia",
        ciudad: "Providencia",
        region: "Insular",
        rol: "Nuestra experiencia también se extiende a Providencia, donde hemos participado en proyectos relacionados con infraestructura aeroportuaria. Estos trabajos representan nuestra capacidad para atender proyectos en territorios insulares y afrontar los retos logísticos y técnicos asociados a la implementación de soluciones de climatización y ventilación en ubicaciones de difícil acceso.",
        x: 15,
        y: 14,
    },
    {
        id: "bucaramanga",
        ciudad: "Bucaramanga",
        region: "Santander",
        rol: "Hemos desarrollado proyectos para diferentes sectores, incluyendo instituciones educativas y establecimientos penitenciarios, donde hemos participado en el acondicionamiento de espacios académicos y áreas hospitalarias y de sanidad. Estos proyectos reflejan nuestra capacidad para adaptar las soluciones V.A.R. a instalaciones con necesidades específicas de confort, ventilación y condiciones ambientales.",
        x: 56,
        y: 38,
    },
    {
        id: "cucuta",
        ciudad: "Cúcuta",
        region: "Norte de Santander",
        rol: "Nuestra experiencia en Cúcuta incluye el desarrollo de proyectos hospitalarios para entidades de la Fuerza Pública, donde las condiciones de ventilación y climatización requieren soluciones confiables y técnicamente especializadas. La participación en este tipo de infraestructura fortalece nuestra experiencia en proyectos institucionales de alta exigencia.",
        x: 60,
        y: 33,
    },
    {
        id: "dosquebradas",
        ciudad: "Dosquebradas",
        region: "Eje Cafetero",
        rol: "Participamos en proyectos hospitalarios enfocados en la implementación de los sistemas de ventilación y aire acondicionado para el área de urgencias, contribuyendo al acondicionamiento de espacios donde el control de las condiciones ambientales es fundamental para la operación de la infraestructura.",
        x: 43,
        y: 48,
    },
    {
        id: "meta",
        ciudad: "Meta",
        region: "Orinoquía",
        rol: "Nuestra experiencia en el departamento del Meta incluye proyectos para infraestructura pública y comunitaria, con participación en sedes de bomberos y bibliotecas en municipios como Villavicencio y Castilla. Estos proyectos nos han permitido desarrollar soluciones V.A.R. para espacios destinados a la atención ciudadana, garantizando condiciones adecuadas de confort y funcionamiento.",
        x: 58,
        y: 56,
    },
    {
        id: "tolima",
        ciudad: "Tolima",
        region: "Andina",
        rol: "Hemos participado en proyectos para la Policía Nacional y entidades bancarias, desarrollando soluciones de ventilación y aire acondicionado para diferentes tipos de infraestructura. Nuestra experiencia en ciudades como Ibagué y Melgar incluye también atención preventiva y correctiva, fortaleciendo nuestra capacidad de respuesta ante instalaciones con necesidades operativas diversas.",
        x: 47,
        y: 53,
    },
    {
        id: "casanare",
        ciudad: "Casanare",
        region: "Orinoquía",
        rol: "Hemos desarrollado proyectos de ventilación y aire acondicionado para infraestructura de la Policía Nacional, aportando soluciones orientadas a garantizar condiciones adecuadas de confort y funcionamiento en instalaciones institucionales. Esta experiencia evidencia nuestra capacidad para atender proyectos en diferentes regiones y contextos operativos del país.",
        x: 65,
        y: 46,
    },
    {
        id: "monteria",
        ciudad: "Montería",
        region: "Caribe",
        rol: "Hemos consolidado experiencia en proyectos y atención técnica para diferentes sectores. Nuestra trayectoria includes trabajos para Las Iglesias de Jesucristo de los Santos de los Últimos Días, así como atención a establecimientos comerciales como Zapaterías y Droguerías, ampliando nuestra experiencia en instalaciones comerciales, institucionales y de uso continuo.",
        x: 41,
        y: 28,
    },
    {
        id: "valledupar",
        ciudad: "Valledupar",
        region: "Caribe",
        rol: "Nuestra experiencia en Valledupar hace parte de la cobertura nacional desarrollada junto a Las Iglesias de Jesucristo de los Santos de los Últimos Días, participando en proyectos y requerimientos técnicos para sus instalaciones.",
        x: 53,
        y: 16,
    },
    {
        id: "santa-marta",
        ciudad: "Santa Marta",
        region: "Caribe",
        rol: "Representa una experiencia relevante dentro de nuestra cobertura nacional, con participación en proyectos y atención técnica para Las Iglesias de Jesucristo de los Santos de los Últimos Días, así como en infraestructura estratégica del sector portuario y energético desarrollando servicios de mantenimiento preventivo y correctivo para los sistemas de Ventilación y Aire Acondicionado.",
        x: 49,
        y: 14,
    },
    {
        id: "neiva",
        ciudad: "Neiva",
        region: "Andina",
        rol: "Nuestra trayectoria incluye proyectos y atención técnica para Las Iglesias de Jesucristo de los Santos de los Últimos Días, extendiendo nuestra experiencia V.A.R. hacia el sur del país.",
        x: 45,
        y: 60,
    },
    {
        id: "tulua",
        ciudad: "Tuluá",
        region: "Pacífico",
        rol: "Nuestra trayectoria incluye proyectos y atención técnica para Las Iglesias de Jesucristo de los Santos de los Últimos Días, extendiendo nuestra experiencia V.A.R. hacia el Valle del Cauca.",
        x: 41,
        y: 54,
    },
    {
        id: "sincelejo",
        ciudad: "Sincelejo",
        region: "Caribe",
        rol: "Hemos desarrollado proyectos y atención técnica para Las Iglesias de Jesucristo de los Santos de los Últimos Días, esta experiencia se suma a nuestra capacidad de atender proyectos en diferentes ciudades del país, integrando conocimiento técnico, capacidad de respuesta y experiencia en instalaciones con necesidades particulares.",
        x: 44,
        y: 26,
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
                        <h3>COBERTURA Y EXPERIENCIA EN TODO COLOMBIA</h3>
                        <p>
                            Seleccione una ubicación en el mapa para conocer nuestra presencia regional y los proyectos desarrollados en cada ciudad.
                        </p>

                        <div className="city-detail">
                            <span>{ciudadActiva.region}</span>
                            <h4>{ciudadActiva.ciudad}</h4>
                            <p>{ciudadActiva.rol}</p>
                        </div>
                    </div>

                    <div className="map-card">
                        <div className="map-illustration">
                            <div className="map-inset-san-andres" aria-label="Archipiélago de San Andrés y Providencia">
                                <svg className="map-inset__svg" viewBox="235 430 75 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* San Andrés Island (User SVG vector path scaled 7x) */}
                                    <g className="island-san-andres">
                                        <path
                                            d="M 256.6455 465.2155 L 255.0963 466.5884 L 253.7832 470.0773 L 254.0666 471.1982 L 253.4904 473.2261 L 254.1233 474.6997 L 253.5471 478.5161 L 253.9911 479.7001 L 255.2002 477.3573 L 255.6442 474.3471 L 256.3243 473.3017 L 256.1732 471.9414 L 256.6172 471.5509 L 256.1732 469.2082 L 256.9289 468.8933 L 256.5983 467.8101 L 258.1381 467.1048 L 256.6455 465.2155 Z"
                                            fill="#003751"
                                            stroke="#ffffff"
                                            strokeWidth="0.15"
                                            transform="translate(256, 472) scale(7) translate(-256, -472)"
                                        />
                                        <text x="256" y="522" className="island-text" textAnchor="middle">San Andrés</text>
                                    </g>

                                    {/* Providencia Island (User SVG vector path side-by-side with San Andrés, scaled 7x) */}
                                    <g className="island-providencia">
                                        <path
                                            d="M 288.5745 365.5744 L 287.951 366.2041 L 287.866 367.5015 L 286.6096 367.4637 L 285.9012 369.0129 L 285.5328 371.5949 L 286.1373 373.7991 L 289.1507 372.1239 L 289.368 369.7434 L 289.9915 369.3278 L 289.2547 367.7534 L 289.6514 366.7709 L 288.8673 366.456 L 288.5745 365.5744 Z M 287.951 364.529 L 287.082 364.8816 L 287.3937 366.1664 L 282.2628 365.5744 L 287.951 364.529 Z"
                                            fill="#003751"
                                            stroke="#ffffff"
                                            strokeWidth="0.15"
                                            transform="translate(288, 472) scale(7) translate(-288, -369)"
                                        />
                                        <text x="288" y="522" className="island-text" textAnchor="middle">Providencia</text>
                                    </g>
                                </svg>
                            </div>

                            <img className="colombia-map" src={colombiaMap} alt="Mapa de Colombia" />

                            {ciudades.map((item) => (
                                <button
                                    className={`city-marker ${item.useLogo ? "city-marker--logo" : ""} ${ciudadActiva.id === item.id ? "is-active" : ""}`}
                                    key={item.id}
                                    style={{ "--x": `${item.x}%`, "--y": `${item.y}%` }}
                                    onClick={() => setCiudadActiva(item)}
                                    aria-label={`Ver información de ${item.ciudad}`}
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
