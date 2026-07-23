import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    buyerPersonasSoporte,
    doloresFacturacion,
    doloresServicio,
    etapasProyecto,
    impactosOperacion,
    sectoresIndustriaSoporte,
    tiposPqrsd,
    tiposSoporte,
} from '../../data/soporte.js';
import '../../css/Soporte/Soporte.css';

const FORMULARIO_HASH = 'formulario-solicitud';

const correoCorporativoPattern = '^[^\\s@]+@(?!gmail\\.com$)(?!outlook\\.com$)(?!yahoo\\.com$)[^\\s@]+\\.[^\\s@]+$';
const N8N_WEBHOOK_URL = 'https://n8n-production-e356.up.railway.app/webhook/custom-form';

// Mapea la opcion elegida en "Etapa del Proyecto" a la etiqueta canonica
// que n8n espera en el campo `etapaProyecto`.
const ETAPA_PROYECTO_A_PRIORIDAD = new Map([
    ['Presupuestacion anual / Planificacion a futuro (6-12 meses).', 'SOLICITUD - FUTURO'],
    ['Ingenieria en desarrollo / Compra a mediano plazo (3-6 meses).', 'SOLICITUD - MEDIANO PLAZO'],
    ['Reemplazo inmediato por falla / Construccion en curso (Urgente).', 'SOLICITUD - URGENTE'],
]);

// Renombra la clave `dolorServicio` a la etiqueta que n8n espera en el Excel.
// En el formulario se pregunta por la "causa" del requerimiento, no por un "dolor".
const CLAVE_DOLOR_SERVICIO = 'dolorServicio';
const CLAVE_CAUSA_SERVICIO = 'Causa Servicio';

function Campo({ children, etiqueta, requerido = true }) {
    return (
        <label className="soporte-campo">
            <span>{etiqueta}</span>
            {children}
            {requerido && <small>Campo obligatorio</small>}
        </label>
    );
}

function GrupoOpciones({ nombre, opciones }) {
    return (
        <div className="soporte-opciones" role="group" aria-label={nombre}>
            {opciones.map((opcion) => (
                <label key={opcion}>
                    <input type="radio" name={nombre} value={opcion} required />
                    <span>{opcion}</span>
                </label>
            ))}
        </div>
    );
}

function PerfilCorporativoServicio() {
    return (
        <div className="soporte-paso">
            <h3>Perfil Corporativo</h3>
            <div className="soporte-grid">
                <Campo etiqueta="Nombre completo">
                    <input type="text" name="nombre" autoComplete="name" required />
                </Campo>
                <Campo etiqueta="Correo empresarial">
                    <input
                        type="email"
                        name="correo"
                        autoComplete="email"
                        pattern={correoCorporativoPattern}
                        title="Use un correo corporativo. No se aceptan dominios genericos."
                        required
                    />
                </Campo>
                <Campo etiqueta="Cargo en la organizacion">
                    <select name="cargo" required>
                        <option value="">Seleccione una opcion</option>
                        {buyerPersonasSoporte.map((cargo) => (
                            <option key={cargo}>{cargo}</option>
                        ))}
                    </select>
                </Campo>
                <Campo etiqueta="Sector industrial">
                    <select name="sector" required>
                        <option value="">Seleccione una opcion</option>
                        {sectoresIndustriaSoporte.map((sector) => (
                            <option key={sector}>{sector}</option>
                        ))}
                    </select>
                </Campo>
            </div>
        </div>
    );
}

function SolicitudServicioForm({ onSubmit, cargando }) {
    return (
        <form className="soporte-formulario" onSubmit={onSubmit}>
            <PerfilCorporativoServicio />
            <div className="soporte-paso">
                <h3>Radiografia del Proyecto</h3>
                <p>Seleccione el dolor principal y dimensione la infraestructura para calificar el alcance del caso.</p>
                <GrupoOpciones nombre="dolorServicio" opciones={doloresServicio} />
                <Campo etiqueta="Dimension estimada de la infraestructura">
                    <input type="text" name="dimension" placeholder="m2 o Toneladas de Refrigeracion" required />
                </Campo>
            </div>
            <div className="soporte-paso">
                <h3>Etapa del Proyecto
                </h3>
                <GrupoOpciones nombre="etapaProyecto" opciones={etapasProyecto} />
            </div>
            <button className="soporte-boton" type="submit" disabled={cargando}>
                {cargando ? 'Enviando requerimiento...' : 'Solicitar Diagnostico Técnico y Cotización Preliminar'}
            </button>
        </form>
    );
}

function FacturacionForm({ onSubmit, cargando }) {
    return (
        <form className="soporte-formulario" onSubmit={onSubmit}>
            <div className="soporte-paso">
                <h3>Perfil Corporativo</h3>
                <div className="soporte-grid">
                    <Campo etiqueta="Nombre y apellido">
                        <input type="text" name="nombre" autoComplete="name" required />
                    </Campo>
                    <Campo etiqueta="Correo">
                        <input type="email" name="correo" autoComplete="email" required />
                    </Campo>
                    <Campo etiqueta="Nombre y NIT de la organizacion">
                        <input type="text" name="organizacion" required />
                    </Campo>
                    <Campo etiqueta="Cargo en la organizacion">
                        <input type="text" name="cargo" required />
                    </Campo>
                </div>
            </div>
            <div className="soporte-paso">
                <h3>Radiografia del Requerimiento</h3>
                <GrupoOpciones nombre="dolorFacturacion" opciones={doloresFacturacion} />
            </div>
            <div className="soporte-paso">
                <h3>Detalles del Requerimiento</h3>
                <Campo etiqueta="Descripcion breve">
                    <textarea
                        name="descripcion"
                        rows="5"
                        placeholder="Indique servicio recibido, numero de factura pendiente de pago o detalle administrativo."
                        required
                    />
                </Campo>
            </div>
            <button className="soporte-boton" type="submit" disabled={cargando}>
                {cargando ? 'Procesando...' : 'Solicitar informacion'}
            </button>
        </form>
    );
}

function PqrsdForm({ onSubmit, cargando }) {
    return (
        <form className="soporte-formulario" onSubmit={onSubmit}>
            <div className="soporte-mensaje">
                En nuestra busqueda constante por la excelencia y la continuidad de su operacion, su retroalimentacion es vital.
                Registre su solicitud aqui; analizaremos su caso de inmediato para ofrecerle una respuesta prioritaria.
            </div>
            <div className="soporte-paso">
                <h3>Identificacion del Cliente y del Contrato</h3>
                <div className="soporte-grid">
                    <Campo etiqueta="Razon social / empresa">
                        <input type="text" name="razonSocial" required />
                    </Campo>
                    <Campo etiqueta="Nombre del contacto autorizado">
                        <input type="text" name="contacto" autoComplete="name" required />
                    </Campo>
                    <Campo etiqueta="Correo electronico corporativo">
                        <input type="email" name="correo" autoComplete="email" required />
                    </Campo>
                    <Campo etiqueta="Telefono directo / extension">
                        <input type="tel" name="telefono" autoComplete="tel" required />
                    </Campo>
                    <Campo etiqueta="Contrato, proyecto o factura">
                        <input type="text" name="contrato" required />
                    </Campo>
                </div>
            </div>
            <div className="soporte-paso">
                <h3>Clasificacion de la Solicitud</h3>
                <GrupoOpciones nombre="tipoPqrsd" opciones={tiposPqrsd} />
            </div>
            <div className="soporte-paso">
                <h3>Detalle Tecnico e Impacto Operativo</h3>
                <div className="soporte-grid">
                    <Campo etiqueta="Asunto de la solicitud">
                        <input type="text" name="asunto" required />
                    </Campo>
                    <Campo etiqueta="Sede, planta o ubicacion del equipo">
                        <input type="text" name="ubicacion" placeholder="Edificio corporativo - Piso 4" required />
                    </Campo>
                </div>
                <Campo etiqueta="Descripcion detallada">
                    <textarea
                        name="descripcion"
                        rows="6"
                        placeholder="Describa los hechos, modelos de equipos afectados o situaciones especificas para agilizar la investigacion tecnica."
                        required
                    />
                </Campo>
                <GrupoOpciones nombre="impactoOperacion" opciones={impactosOperacion} />
                <Campo etiqueta="Evidencias / archivos adjuntos" requerido={false}>
                    <input type="file" name="evidencias" accept=".pdf,.jpg,.jpeg,.png" multiple />
                </Campo>
                <p className="soporte-ayuda">
                    Adjunte fotos del panel de control, reportes de error del sistema BMS, videos del ruido o documentos de soporte.
                </p>
            </div>
            <div className="soporte-paso">
                <h3>Consentimiento Legal</h3>
                <label className="soporte-consentimiento">
                    <input type="checkbox" required />
                    <span>Acepto la Politica de Tratamiento de Datos Personales y los tiempos de respuesta legales de atencion corporativa.</span>
                </label>
            </div>
            <button className="soporte-boton" type="submit" disabled={cargando}>
                {cargando ? 'Radicando caso...' : 'Radicar Solicitud con Prioridad'}
            </button>
        </form>
    );
}

function FormularioActivo({ tipo, onSubmit, cargando }) {
    if (tipo === 'facturacion') {
        return <FacturacionForm onSubmit={onSubmit} cargando={cargando} />;
    }

    if (tipo === 'pqrsd') {
        return <PqrsdForm onSubmit={onSubmit} cargando={cargando} />;
    }

    return <SolicitudServicioForm onSubmit={onSubmit} cargando={cargando} />;
}

export default function Soporte() {
    const [tipoActivo, setTipoActivo] = useState(tiposSoporte[0].id);
    const [radicado, setRadicado] = useState('');
    const [cargando, setCargando] = useState(false);
    const [errorEnvio, setErrorEnvio] = useState('');
    const { hash } = useLocation();
    const formularioRef = useRef(null);

    useEffect(() => {
        if (hash === `#${FORMULARIO_HASH}` && formularioRef.current) {
            formularioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash]);

    const soporteActivo = useMemo(
        () => tiposSoporte.find((tipo) => tipo.id === tipoActivo) ?? tiposSoporte[0],
        [tipoActivo],
    );

    async function handleSubmit(event) {
        event.preventDefault();
        setCargando(true);
        setErrorEnvio('');
        setRadicado('');

        // Generamos el número de radicado correspondiente
        const consecutivo = Math.floor(1000 + Math.random() * 9000);
        const numeroRadicado = `HVAC-2026-${consecutivo}`;

        // Instanciamos FormData directamente del formulario objetivo
        const formData = new FormData(event.target);

        // Calculamos el tipo de formulario que viajara a n8n segun el caso:
        //   - Servicio  -> SOLICITUD - FUTURO / MEDIANO PLAZO / URGENTE (etapa del proyecto)
        //   - Facturacion -> "Facturacion y Pagaduria"
        //   - PQRSD    -> Queja / Peticion / Reclamo / Sugerencia / Denuncia (clasificacion)
        let tipoFormularioCanonico = tipoActivo;

        if (tipoActivo === 'servicio') {
            const etapa = formData.get('etapaProyecto');
            const prioridad = ETAPA_PROYECTO_A_PRIORIDAD.get(etapa);
            if (prioridad) {
                formData.set('etapaProyecto', prioridad);
                tipoFormularioCanonico = prioridad;
            }
        } else if (tipoActivo === 'facturacion') {
            const dolor = formData.get('dolorFacturacion');
            if (dolor) formData.set('dolorFacturacion', dolor.toUpperCase());
            tipoFormularioCanonico = 'FACTURACION Y PAGADURIA';
        } else if (tipoActivo === 'pqrsd') {
            const tipo = formData.get('tipoPqrsd');
            if (tipo) {
                // El label viene como "Peticion: ...", "Queja: ...", etc.
                // Tomamos la primera palabra antes de los dos puntos y la normalizamos a Title Case.
                const categoriaCruda = tipo.split(':')[0].trim();
                const categoria = categoriaCruda.charAt(0).toUpperCase() + categoriaCruda.slice(1).toLowerCase();
                formData.set('tipoPqrsd', categoria);
                tipoFormularioCanonico = categoria;
            }
        }

        // Adjuntamos metadatos clave para estructurar el árbol de decisión en n8n
        formData.append('tipoFormulario', tipoFormularioCanonico);
        formData.append('radicado', numeroRadicado);
        formData.append('fechaEnvio', new Date().toISOString());

        // Capitalizamos en masa todos los valores string del FormData,
        // y renombramos `dolorServicio` a `Causa Servicio` para n8n.
        for (const [clave, valor] of Array.from(formData.entries())) {
            formData.delete(clave);
            const claveFinal = clave === CLAVE_DOLOR_SERVICIO ? CLAVE_CAUSA_SERVICIO : clave;
            formData.append(claveFinal, valor);
        }

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                body: formData, // Mandamos FormData nativo para soportar la subida de archivos (adjuntos) automáticamente
            });

            if (!response.ok) {
                throw new Error(`Error en servidor: ${response.statusText}`);
            }

            // Si n8n responde correctamente, pintamos el radicado en la interfaz
            setRadicado(numeroRadicado);
            event.target.reset(); // Reseteamos campos
        } catch (error) {
            console.error('Error al despachar a n8n:', error);
            setErrorEnvio('No pudimos conectar con el servidor de soporte. Por favor intente de nuevo.');
        } finally {
            setCargando(false);
        }
    }

    return (
        <main className="pagina-soporte">
            <section className="soporte-hero">
                <div className="soporte-container">
                    <span className="soporte-label">Soporte CUSTOM VAR</span>
                    <h1>Atencion corporativa para solicitudes criticas y administrativas.</h1>
                    <p>
                        Centralice solicitudes de servicio, facturacion, pagaduria y PQRSD en un flujo claro,
                        trazable y orientado a la continuidad de su operacion.
                    </p>
                </div>
            </section>

            <section className="soporte-panel">
                <div className="soporte-container soporte-panel__grid">
                    <aside className="soporte-selector" aria-label="Tipos de soporte">
                        {tiposSoporte.map((tipo) => (
                            <button
                                className={tipo.id === tipoActivo ? 'is-active' : ''}
                                key={tipo.id}
                                type="button"
                                onClick={() => {
                                    setTipoActivo(tipo.id);
                                    setRadicado('');
                                    setErrorEnvio('');
                                }}
                            >
                                <span>{tipo.titulo}</span>
                                <small>{tipo.descripcion}</small>
                            </button>
                        ))}
                    </aside>

                    <div className="soporte-contenido">
                        <div className="soporte-contenido__header" id={FORMULARIO_HASH} ref={formularioRef}>
                            <span className="soporte-label">{soporteActivo.titulo}</span>
                            <h2>{soporteActivo.cta}</h2>
                            <p>{soporteActivo.descripcion}</p>
                        </div>

                        {radicado && (
                            <div className="soporte-confirmacion" role="status">
                                <strong>Solicitud Recibida Correctamente.</strong>
                                <span>Su requerimiento ha sido asignado al radicado No. {radicado}.</span>
                                <span>
                                    Si el impacto fue marcado como Alto / Critico, el equipo indicado sera notificado para
                                    priorizar la respuesta.
                                </span>
                            </div>
                        )}

                        {errorEnvio && (
                            <div className="soporte-error" style={{ color: 'var(--color-acento-rojo, #DB2D2C)', marginBottom: '20px', fontWeight: 'bold' }}>
                                {errorEnvio}
                            </div>
                        )}

                        <FormularioActivo tipo={tipoActivo} onSubmit={handleSubmit} cargando={cargando} />

                        {tipoActivo === 'pqrsd' && (
                            <div className="soporte-respuesta">
                                <h3>Respuesta consultiva post-envio</h3>
                                <p>
                                    El caso se enruta segun su clasificacion: reclamos tecnicos de alto impacto al lider de
                                    servicios, quejas administrativas al area administrativa y casos comerciales al lider
                                    comercial para gestionar la cuenta antes de que escale.
                                </p>
                                <p>
                                    Recibira un correo formal confirmando el radicado y el plazo maximo de contacto de 24 horas
                                    habiles para coordinar la solucion.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}