import { useState } from 'react';
import {
    iniciativasApoyadas,
    opcionesIniciativa,
    pilaresIniciativas,
} from '../../data/iniciativas.js';
import '../../css/Iniciativas/Iniciativas.css';

function ParticiparModal({ abierto, onCerrar }) {
    const [enviado, setEnviado] = useState(false);

    if (!abierto) return null;

    const cerrar = () => {
        setEnviado(false);
        onCerrar?.();
    };

    const enviar = (evento) => {
        evento.preventDefault();
        setEnviado(true);
    };

    return (
        <div className="iniciativas-modal" role="dialog" aria-modal="true">
            <button className="iniciativas-modal__fondo" aria-label="Cerrar" onClick={cerrar} />

            <div className="iniciativas-modal__panel">
                <div className="iniciativas-modal__cabecera">
                    <span className="iniciativas-modal__etiqueta">Sumarse a las iniciativas</span>
                    <h3 className="iniciativas-modal__titulo">Cuéntanos cómo quieres participar</h3>
                    <button
                        type="button"
                        className="iniciativas-modal__cerrar"
                        onClick={cerrar}
                        aria-label="Cerrar formulario"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {enviado ? (
                    <div className="iniciativas-modal__exito">
                        <span className="material-symbols-outlined iniciativas-modal__exito-icono">
                            check_circle
                        </span>
                        <h4 className="iniciativas-modal__exito-titulo">¡Mensaje recibido!</h4>
                        <p className="iniciativas-modal__exito-texto">
                            Gracias por su interés en nuestras iniciativas. Nuestro equipo se pondrá en
                            contacto con usted muy pronto.
                        </p>
                        <button
                            type="button"
                            className="iniciativas-modal__exito-boton"
                            onClick={cerrar}
                        >
                            Cerrar
                        </button>
                    </div>
                ) : (
                    <form className="iniciativas-modal__formulario" onSubmit={enviar}>
                        <label>
                            <span>Nombre</span>
                            <input required type="text" placeholder="Su nombre completo" />
                        </label>
                        <label>
                            <span>Correo electrónico / Teléfono</span>
                            <input required type="text" placeholder="correo@empresa.com  ·  +57 ..." />
                        </label>
                        <label>
                            <span>Iniciativa de interés</span>
                            <select required defaultValue="">
                                <option value="" disabled>
                                    Seleccione una iniciativa
                                </option>
                                {opcionesIniciativa.map((opcion) => (
                                    <option key={opcion} value={opcion}>
                                        {opcion}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <span>Mensaje</span>
                            <textarea
                                required
                                rows="3"
                                placeholder="Cuéntenos cómo le gustaría aportar..."
                            />
                        </label>
                        <button type="submit" className="iniciativas-modal__submit">
                            Enviar mensaje
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default function Iniciativas() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    return (
        <main className="pagina-iniciativas">
            <header className="iniciativas-hero">
                <div className="iniciativas-hero__patron" />
                <div className="iniciativas-hero__halo" />
                <div className="iniciativas-hero__contenido">
                    <div className="iniciativas-hero__breadcrumb">
                        <span className="iniciativas-hero__marca">Iniciativas CUSTOM</span>
                        <span className="iniciativas-hero__punto" />
                        <span className="iniciativas-hero__ruta">Responsabilidad Social</span>
                    </div>
                    <h1 className="iniciativas-hero__titulo">Compartimos el buen clima de Colombia</h1>
                    <p className="iniciativas-hero__descripcion">
                        Para nosotros, el «buen clima» no solo se mide en grados centígrados; se vive en
                        el impacto que dejamos en las comunidades y en el planeta, y en todo lo que
                        aprendemos de cada persona con la que nos relacionamos. Al elegirnos como su
                        aliado en soluciones VAR, usted se vincula a una cadena de valor responsable,
                        alineada con los Objetivos de Desarrollo Sostenible.
                    </p>
                </div>
            </header>

            <section className="iniciativas-pilares">
                <div className="iniciativas-pilares__cabecera">
                    <span className="iniciativas-eyebrow iniciativas-eyebrow--eco">
                        Nuestros tres pilares
                    </span>
                    <h2 className="iniciativas-titulo">Trabajamos bajo tres frentes de impacto</h2>
                </div>
                <div className="iniciativas-pilares__grid">
                    {pilaresIniciativas.map((pilar) => (
                        <article
                            key={pilar.id}
                            className="pilar-card"
                            style={{ borderTopColor: pilar.color }}
                        >
                            <div className="pilar-card__icono" style={{ background: pilar.soft }}>
                                <span className="material-symbols-outlined" style={{ color: pilar.color }}>
                                    {pilar.icono}
                                </span>
                            </div>
                            <h3 className="pilar-card__titulo">{pilar.titulo}</h3>
                            <p className="pilar-card__texto">{pilar.texto}</p>
                            <span
                                className="pilar-card__ods"
                                style={{ color: pilar.color, background: pilar.soft }}
                            >
                                {pilar.ods}
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="iniciativas-apoyo">
                <div className="iniciativas-apoyo__cabecera">
                    <span className="iniciativas-eyebrow iniciativas-eyebrow--eco">
                        Proyección social (RSE)
                    </span>
                    <h2 className="iniciativas-titulo">Las iniciativas que apoyamos</h2>
                    <p className="iniciativas-apoyo__intro">
                        Cada iniciativa es parte de nuestro compromiso con la cultura, el deporte, el
                        bienestar y el medio ambiente en las regiones donde operamos.
                    </p>
                </div>

                <div className="iniciativas-apoyo__lista">
                    {iniciativasApoyadas.map((iniciativa, indice) => (
                        <article
                            key={iniciativa.id}
                            className={`iniciativa ${indice % 2 ? 'iniciativa--invertida' : ''}`}
                        >
                            <div
                                className="iniciativa__media"
                                style={{ backgroundImage: `url(${iniciativa.img})` }}
                            >
                                <span className="iniciativa__tag">foto CUSTOM + {iniciativa.fotoTag}</span>
                            </div>
                            <div className="iniciativa__cuerpo">
                                <div className="iniciativa__encabezado">
                                    <div className="iniciativa__icono">
                                        <span className="material-symbols-outlined">
                                            {iniciativa.icono}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="iniciativa__categoria">
                                            {iniciativa.categoria}
                                        </span>
                                        <h3 className="iniciativa__titulo">{iniciativa.titulo}</h3>
                                    </div>
                                </div>
                                <p className="iniciativa__texto">{iniciativa.texto}</p>
                                <div className="iniciativa__enlaces">
                                    <a className="iniciativa__chip" href="#">
                                        <span className="material-symbols-outlined">photo_camera</span>
                                        Instagram
                                    </a>
                                    <a className="iniciativa__chip" href="#">
                                        <span className="material-symbols-outlined">public</span>
                                        Sitio web
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="iniciativas-apoyo__nota">
                    <span className="material-symbols-outlined">verified_user</span>
                    <p>
                        El uso de imágenes de terceros y de menores involucrados se gestiona y autoriza
                        con Carolina Vallejo, garantizando los permisos correspondientes.
                    </p>
                </div>
            </section>

            <section className="iniciativas-cta">
                <div className="iniciativas-cta__contenido">
                    <div>
                        <h2 className="iniciativas-cta__titulo">
                            ¿Quiere sumar buen clima a su comunidad?
                        </h2>
                        <p className="iniciativas-cta__texto">
                            Conozca cómo vincularse a nuestras iniciativas sociales y ambientales.
                        </p>
                    </div>
                    <button type="button" className="iniciativas-cta__boton" onClick={abrirModal}>
                        Quiero participar
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </section>

            <ParticiparModal abierto={modalAbierto} onCerrar={cerrarModal} />
        </main>
    );
}
