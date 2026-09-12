import { useState } from 'react';
import { opcionesIniciativa, pilaresIniciativas } from '../../data/iniciativas.js';
import { useJsonData } from '../../hooks/useJsonData.js';
import Carrusel from '../Soluciones/Carrusel.jsx';
import TurnstileWidget from '../TurnstileWidget.jsx';
import '../../css/Iniciativas/Iniciativas.css';

const N8N_INICIATIVAS_WEBHOOK_URL = import.meta.env.VITE_N8N_INICIATIVAS_WEBHOOK_URL;
const N8N_WEBHOOK_TOKEN = import.meta.env.VITE_N8N_WEBHOOK_TOKEN;

function ParticiparModal({ abierto, onCerrar }) {
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    if (!abierto) return null;

    const cerrar = () => {
        setEnviado(false);
        setError('');
        onCerrar?.();
    };

    async function enviar(evento) {
        evento.preventDefault();
        setCargando(true);
        setError('');

        const formData = new FormData(evento.target);
        formData.append('tipoFormulario', 'INICIATIVAS - PARTICIPAR');
        formData.append('fechaEnvio', new Date().toISOString());

        try {
            const response = await fetch(N8N_INICIATIVAS_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'X-Webhook-Token': N8N_WEBHOOK_TOKEN },
                body: formData,
            });

            if (response.status === 403) {
                throw new Error('RECHAZADO');
            }

            if (!response.ok) {
                throw new Error(`Error en servidor: ${response.statusText}`);
            }

            setEnviado(true);
            evento.target.reset();
        } catch (err) {
            console.error('Error al despachar a n8n:', err);
            setError(
                err.message === 'RECHAZADO'
                    ? 'No pudimos validar la solicitud. Por favor intente de nuevo.'
                    : 'No pudimos enviar su mensaje. Por favor intente de nuevo.',
            );
        } finally {
            setCargando(false);
        }
    }

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
                ) : error ? (
                    <div className="iniciativas-modal__exito">
                        <span className="material-symbols-outlined iniciativas-modal__exito-icono iniciativas-modal__exito-icono--error">
                            error
                        </span>
                        <h4 className="iniciativas-modal__exito-titulo">No pudimos enviar su mensaje</h4>
                        <p className="iniciativas-modal__exito-texto">{error}</p>
                        <button
                            type="button"
                            className="iniciativas-modal__exito-boton"
                            onClick={() => setError('')}
                        >
                            Reintentar
                        </button>
                    </div>
                ) : (
                    <form className="iniciativas-modal__formulario" onSubmit={enviar}>
                        <label>
                            <span>Nombre</span>
                            <input required type="text" name="nombre" placeholder="Su nombre completo" />
                        </label>
                        <label>
                            <span>Correo electrónico</span>
                            <input required type="email" name="contacto" placeholder="correo@empresa.com" />
                        </label>
                        <label>
                            <span>Iniciativa de interés</span>
                            <select required defaultValue="" name="iniciativa">
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
                                name="mensaje"
                                placeholder="Cuéntenos cómo le gustaría aportar..."
                            />
                        </label>
                        <TurnstileWidget />
                        <button type="submit" className="iniciativas-modal__submit" disabled={cargando}>
                            {cargando && <span className="iniciativas-spinner" aria-hidden="true" />}
                            {cargando ? 'Enviando...' : 'Enviar mensaje'}
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
    const { datos, cargando, error } = useJsonData('/data/iniciativas.json');
    const iniciativasApoyadas = datos?.iniciativasApoyadas ?? [];

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
                    <h1 className="iniciativas-hero__titulo">COMPARTIMOS EL BUEN CLIMA DE COLOMBIA</h1>
                    <p className="iniciativas-hero__descripcion">
                        En CUSTOM creemos que nuestro propósito va más allá de diseñar e implementar
                        soluciones V.A.R.: generamos un impacto positivo en las comunidades donde estamos
                        presentes, apoyando iniciativas de desarrollo social, cultura, deporte y nuevas
                        generaciones. Cada proyecto es una oportunidad para impulsar el crecimiento de
                        nuestra región y respaldar a quienes trabajan por alcanzar sus sueños, reflejando
                        los valores que nos identifican: solidaridad, trabajo en equipo, inclusión y
                        construcción de oportunidades. Para nosotros, el verdadero crecimiento empresarial
                        también se mide por el impacto positivo que dejamos en las personas.
                    </p>
                </div>
            </header>

            <section className="iniciativas-pilares">
                <div className="iniciativas-pilares__cabecera">
                    <span className="iniciativas-eyebrow iniciativas-eyebrow--eco">
                        Nuestros tres pilares
                    </span>
                    <h2 className="iniciativas-titulo">TRABAJAMOS BAJO TRES FRENTES DE IMPACTO</h2>
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
                                style={{ color: pilar.color, background: pilar.soft, fontSize: '0.82rem', fontWeight: 600, padding: '6px 10px', borderRadius: '4px', display: 'inline-block', marginTop: '10px' }}
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
                    <h2 className="iniciativas-titulo">LAS INICIATIVAS QUE APOYAMOS</h2>
                    <p className="iniciativas-apoyo__intro">
                        Cada iniciativa es parte de nuestro compromiso con la cultura, el deporte, el
                        bienestar y el medio ambiente en las regiones donde operamos.
                    </p>
                </div>

                {cargando && <p className="iniciativas-estado">Cargando iniciativas...</p>}
                {error && (
                    <p className="iniciativas-estado iniciativas-estado--error">
                        No se pudieron cargar las iniciativas. Intente de nuevo más tarde.
                    </p>
                )}

                <div className="iniciativas-apoyo__lista">
                    {iniciativasApoyadas.map((iniciativa, indice) => (
                        <article
                            key={iniciativa.id}
                            className={`iniciativa ${indice % 2 ? 'iniciativa--invertida' : ''}`}
                        >
                            <div
                                className={`iniciativa__media ${
                                    iniciativa.carrusel?.length ? '' : 'iniciativa__media--foto'
                                }`}
                            >
                                {iniciativa.carrusel?.length > 0 ? (
                                    <Carrusel fotos={iniciativa.carrusel} altPrefix={iniciativa.titulo} />
                                ) : (
                                    <img
                                        className="iniciativa__foto"
                                        src={iniciativa.img}
                                        alt={iniciativa.titulo}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <div className="iniciativa__cuerpo">
                                <div className="iniciativa__encabezado">
                                    <div className="iniciativa__icono">
                                        <span className="material-symbols-outlined">
                                            {iniciativa.icono}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="iniciativa__eslogan">
                                            {iniciativa.eslogan}
                                        </span>
                                        <h3 className="iniciativa__titulo">{iniciativa.titulo}</h3>
                                    </div>
                                </div>
                                <p className="iniciativa__texto">{iniciativa.texto}</p>
                                <div className="iniciativa__enlaces">
                                    {iniciativa.instagram && (
                                        <a
                                            className="iniciativa__chip"
                                            href={iniciativa.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="material-symbols-outlined">photo_camera</span>
                                            Ver en Instagram
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
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
