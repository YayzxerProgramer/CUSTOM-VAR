import { useState } from 'react';
import { useJsonData } from '../../hooks/useJsonData.js';
import '../../css/Talento/Talento.css';

function ContactosActuales({ contactosTalento }) {
    return (
        <section className="talento-contactos">
            <div className="talento-contactos__cabecera">
                <span className="talento-eyebrow">Directorio corporativo</span>
                <h2 className="talento-titulo">Hablemos con la persona indicada</h2>
            </div>

            <div className="talento-contactos__grid">
                {contactosTalento.map((contacto) => (
                    <article key={contacto.id} className="contacto-card">
                        <div
                            className="contacto-card__foto"
                            style={{ backgroundImage: `url(${contacto.img})` }}
                        />
                        <div className="contacto-card__info">
                            <h3 className="contacto-card__nombre">{contacto.nombre}</h3>
                            <span className="contacto-card__cargo">{contacto.cargo}</span>
                            <span className="contacto-card__tel">
                                <span className="material-symbols-outlined">call</span>
                                {contacto.tel}
                            </span>
                            <a className="contacto-card__correo" href={`mailto:${contacto.correo}`}>
                                <span className="material-symbols-outlined">mail</span>
                                {contacto.correo}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function TrabajaConNosotros({ vacantesTalento, correoTalento }) {
    const [abierto, setAbierto] = useState(0);

    const alternar = (indice) => setAbierto((actual) => (actual === indice ? -1 : indice));

    return (
        <section className="talento-vacantes">
            <div className="talento-vacantes__cabecera">
                <span className="talento-eyebrow">Vacantes abiertas</span>
                <h2 className="talento-titulo">Trabaja con nosotros</h2>
                <p className="talento-vacantes__intro">
                    Buscamos sumar talento en los cargos de mayor crecimiento. Despliegue cada vacante
                    para conocer las funciones, responsabilidades y requisitos.
                </p>
            </div>

            <div className="talento-vacantes__lista">
                {vacantesTalento.map((vacante, indice) => {
                    const estaAbierto = abierto === indice;
                    const mailto = `mailto:${correoTalento}?subject=${encodeURIComponent(
                        `Postulación ${vacante.titulo}`,
                    )}`;

                    return (
                        <article
                            key={vacante.id}
                            className={`vacante ${estaAbierto ? 'vacante--abierta' : ''}`}
                        >
                            <button
                                type="button"
                                className="vacante__cabecera"
                                onClick={() => alternar(indice)}
                                aria-expanded={estaAbierto}
                            >
                                <span className="vacante__icono">
                                    <span className="material-symbols-outlined">{vacante.icono}</span>
                                </span>
                                <span className="vacante__titulos">
                                    <span className="vacante__titulo">{vacante.titulo}</span>
                                    <span className="vacante__meta">{vacante.meta}</span>
                                </span>
                                <span className="material-symbols-outlined vacante__chevron">
                                    expand_more
                                </span>
                            </button>

                            <div className="vacante__cuerpo">
                                <div className="vacante__cuerpo-inner">
                                    <div className="vacante__columnas">
                                        <div>
                                            <h4 className="vacante__subtitulo">
                                                <span className="material-symbols-outlined">checklist</span>
                                                Tareas y funciones
                                            </h4>
                                            <p className="vacante__texto">{vacante.funciones}</p>
                                        </div>
                                        <div>
                                            <h4 className="vacante__subtitulo">
                                                <span className="material-symbols-outlined">stars</span>
                                                Responsabilidades claves
                                            </h4>
                                            <p className="vacante__texto">{vacante.responsabilidades}</p>
                                        </div>
                                    </div>

                                    <div className="vacante__requisitos">
                                        <h4 className="vacante__subtitulo vacante__subtitulo--oscuro">
                                            <span className="material-symbols-outlined">school</span>
                                            Requisitos del cargo
                                        </h4>
                                        <p className="vacante__texto">{vacante.requisitos}</p>
                                    </div>

                                    <div className="vacante__acciones">
                                        <a className="vacante__postular" href={mailto}>
                                            <span className="material-symbols-outlined">attach_file</span>
                                            Postularme · Enviar hoja de vida
                                        </a>
                                        <span className="vacante__correo">
                                            <span className="material-symbols-outlined">mail</span>
                                            {correoTalento}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default function Talento() {
    const [tab, setTab] = useState('contactos');
    const { datos, cargando, error } = useJsonData('/data/talento.json');

    return (
        <main className="pagina-talento">
            <header className="talento-hero">
                <div className="talento-hero__patron" />
                <div className="talento-hero__contenido">
                    <div className="talento-hero__breadcrumb">
                        <span className="talento-hero__marca">Talento CUSTOM</span>
                        <span className="talento-hero__punto" />
                        <span className="talento-hero__ruta">Contactos · Trabaja con nosotros</span>
                    </div>
                    <h1 className="talento-hero__titulo">El talento detrás del buen clima</h1>
                    <p className="talento-hero__descripcion">
                        Conozca a nuestro equipo y descubra las oportunidades para crecer
                        profesionalmente en la industria VAR. Buscamos personas que enseñen y aprendan
                        «desde el hacer».
                    </p>
                </div>
            </header>

            <div className="talento-tabs">
                <div className="talento-tabs__inner">
                    <button
                        type="button"
                        className={`talento-tab ${tab === 'contactos' ? 'talento-tab--activo' : ''}`}
                        onClick={() => setTab('contactos')}
                    >
                        Contactos actuales
                    </button>
                    <button
                        type="button"
                        className={`talento-tab ${tab === 'vacantes' ? 'talento-tab--activo' : ''}`}
                        onClick={() => setTab('vacantes')}
                    >
                        Trabaja con nosotros
                    </button>
                </div>
            </div>

            {cargando && <p className="talento-estado">Cargando información...</p>}
            {error && <p className="talento-estado talento-estado--error">No se pudo cargar la información. Intente de nuevo más tarde.</p>}

            {datos && (
                tab === 'contactos' ? (
                    <ContactosActuales contactosTalento={datos.contactos} />
                ) : (
                    <TrabajaConNosotros
                        vacantesTalento={datos.vacantes}
                        correoTalento={datos.correoContacto}
                    />
                )
            )}
        </main>
    );
}
