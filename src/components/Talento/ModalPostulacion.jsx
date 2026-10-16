import { useState, useRef, useEffect, useCallback } from 'react';
import Icon from '../Icon.jsx';

const N8N_TALENTO_WEBHOOK_URL = import.meta.env.VITE_N8N_TALENTO_WEBHOOK_URL || import.meta.env.VITE_N8N_WEBHOOK_URL;
const N8N_WEBHOOK_TOKEN = import.meta.env.VITE_N8N_WEBHOOK_TOKEN;
const TAMANO_MAX_MB = 5;
const TAMANO_MAX_BYTES = TAMANO_MAX_MB * 1024 * 1024;
const TIPOS_PERMITIDOS = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

function ContenidoModalPostulacion({
    vacanteSeleccionada,
    vacantes = [],
    correoTalento = 'talento@customsoluciones.com',
    onCerrar,
}) {
    const vacanteInicial = vacanteSeleccionada?.titulo || vacantes[0]?.titulo || 'Postulación General';
    const [vacanteActual, setVacanteActual] = useState(vacanteInicial);
    const [cargando, setCargando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [errorArchivo, setErrorArchivo] = useState('');
    const [arrastrando, setArrastrando] = useState(false);
    const fileInputRef = useRef(null);

    const cerrar = useCallback(() => {
        setEnviado(false);
        setError('');
        setErrorArchivo('');
        setArchivo(null);
        onCerrar?.();
    }, [onCerrar]);

    useEffect(() => {
        const manejarTecla = (e) => {
            if (e.key === 'Escape') {
                cerrar();
            }
        };
        window.addEventListener('keydown', manejarTecla);
        return () => window.removeEventListener('keydown', manejarTecla);
    }, [cerrar]);

    const validarYAsignarArchivo = (file) => {
        setErrorArchivo('');
        if (!file) return;

        const extension = file.name.split('.').pop()?.toLowerCase();
        const extensionValida = ['pdf', 'doc', 'docx'].includes(extension);
        const mimeValido = TIPOS_PERMITIDOS.includes(file.type);

        if (!extensionValida && !mimeValido) {
            setErrorArchivo('Formato no permitido. Por favor sube un archivo en formato PDF, DOC o DOCX.');
            setArchivo(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }

        if (file.size > TAMANO_MAX_BYTES) {
            setErrorArchivo(`El archivo supera el tamaño máximo permitido (${TAMANO_MAX_MB} MB).`);
            setArchivo(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }

        setArchivo(file);
    };

    const formatearTamano = (bytes) => {
        if (!bytes) return '0 KB';
        const kb = bytes / 1024;
        if (kb < 1024) return `${kb.toFixed(1)} KB`;
        return `${(kb / 1024).toFixed(1)} MB`;
    };

    const manejarDrop = (e) => {
        e.preventDefault();
        setArrastrando(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validarYAsignarArchivo(e.dataTransfer.files[0]);
        }
    };

    const quitarArchivo = () => {
        setArchivo(null);
        setErrorArchivo('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    async function enviar(e) {
        e.preventDefault();
        setError('');

        if (!archivo) {
            setErrorArchivo('Por favor adjunta tu hoja de vida (CV).');
            return;
        }

        setCargando(true);

        const formElement = e.target;
        const formData = new FormData(formElement);
        formData.append('tipoFormulario', 'TALENTO - POSTULACION LABORAL');
        formData.append('fechaEnvio', new Date().toISOString());
        formData.append('cargoPostulado', vacanteActual);

        if (N8N_TALENTO_WEBHOOK_URL) {
            try {
                const headers = {};
                if (N8N_WEBHOOK_TOKEN) {
                    headers['X-Webhook-Token'] = N8N_WEBHOOK_TOKEN;
                }

                const response = await fetch(N8N_TALENTO_WEBHOOK_URL, {
                    method: 'POST',
                    headers,
                    body: formData,
                });

                if (response.status === 403) {
                    throw new Error('RECHAZADO');
                }

                if (!response.ok) {
                    throw new Error(`Error en servidor: ${response.statusText}`);
                }

                setEnviado(true);
            } catch (err) {
                console.error('Error al enviar postulación:', err);
                setError(
                    err.message === 'RECHAZADO'
                        ? 'No pudimos validar la solicitud. Por favor intenta de nuevo.'
                        : 'No fue posible conectar con el servidor en este momento. Puedes reenviar o enviar tu hoja de vida a nuestro correo corporativo.'
                );
            } finally {
                setCargando(false);
            }
        } else {
            setTimeout(() => {
                setCargando(false);
                setEnviado(true);
            }, 600);
        }
    }

    const mailtoAlternativo = `mailto:${correoTalento}?subject=${encodeURIComponent(
        `Postulación - ${vacanteActual}`,
    )}`;

    return (
        <div className="postulacion-modal" role="dialog" aria-modal="true" aria-labelledby="modal-postulacion-titulo">
            <button className="postulacion-modal__fondo" aria-label="Cerrar modal" onClick={cerrar} />

            <div className="postulacion-modal__panel">
                <div className="postulacion-modal__cabecera">
                    <div>
                        <span className="postulacion-modal__eyebrow">Trabaja con nosotros · CUSTOM V.A.R.</span>
                        <h3 id="modal-postulacion-titulo" className="postulacion-modal__titulo">
                            Formulario de Postulación
                        </h3>
                    </div>
                    <button
                        type="button"
                        className="postulacion-modal__cerrar"
                        onClick={cerrar}
                        aria-label="Cerrar formulario"
                    >
                        <Icon name="close" />
                    </button>
                </div>

                {enviado ? (
                    <div className="postulacion-modal__exito">
                        <div className="postulacion-modal__exito-icono-wrap">
                            <Icon name="check_circle" className="postulacion-modal__exito-icono" />
                        </div>
                        <h4 className="postulacion-modal__exito-titulo">¡Postulación Recibida con Éxito!</h4>
                        <p className="postulacion-modal__exito-texto">
                            Hemos recibido tu información y tu hoja de vida para la vacante de{' '}
                            <strong>{vacanteActual}</strong>. Nuestro equipo de Talento Humano evaluará tu perfil
                            y se comunicará contigo si tu postulación avanza en el proceso de selección.
                        </p>
                        <button
                            type="button"
                            className="postulacion-modal__boton-primario"
                            onClick={cerrar}
                        >
                            Finalizar y Cerrar
                        </button>
                    </div>
                ) : (
                    <form className="postulacion-modal__form" onSubmit={enviar}>
                        {error && (
                            <div className="postulacion-modal__alerta-error">
                                <Icon name="error" />
                                <div>
                                    <p>{error}</p>
                                    <a href={mailtoAlternativo} className="postulacion-modal__enlace-correo">
                                        Enviar directamente por correo ({correoTalento})
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Vacante o cargo */}
                        <div className="postulacion-campo">
                            <label htmlFor="postulacion-cargo">
                                Cargo o vacante a la que aspiras <span className="campo-requerido">*</span>
                            </label>
                            <select
                                id="postulacion-cargo"
                                name="cargo"
                                value={vacanteActual}
                                onChange={(e) => setVacanteActual(e.target.value)}
                                required
                            >
                                {vacantes.map((v) => (
                                    <option key={v.id} value={v.titulo}>
                                        {v.titulo}
                                    </option>
                                ))}
                                <option value="Postulación General / Espontánea">
                                    Otra vacante / Postulación General (Espontánea)
                                </option>
                            </select>
                        </div>

                        {/* Fila: Nombre y Correo */}
                        <div className="postulacion-fila-dos">
                            <div className="postulacion-campo">
                                <label htmlFor="postulacion-nombre">
                                    Nombre completo <span className="campo-requerido">*</span>
                                </label>
                                <input
                                    id="postulacion-nombre"
                                    name="nombre"
                                    type="text"
                                    required
                                    placeholder="Ej. Juan Pérez"
                                />
                            </div>

                            <div className="postulacion-campo">
                                <label htmlFor="postulacion-correo">
                                    Correo electrónico <span className="campo-requerido">*</span>
                                </label>
                                <input
                                    id="postulacion-correo"
                                    name="correo"
                                    type="email"
                                    required
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                        </div>

                        {/* Fila: Teléfono y Ciudad */}
                        <div className="postulacion-fila-dos">
                            <div className="postulacion-campo">
                                <label htmlFor="postulacion-telefono">
                                    Teléfono / WhatsApp <span className="campo-requerido">*</span>
                                </label>
                                <input
                                    id="postulacion-telefono"
                                    name="telefono"
                                    type="tel"
                                    required
                                    placeholder="Ej. 300 123 4567"
                                />
                            </div>

                            <div className="postulacion-campo">
                                <label htmlFor="postulacion-ciudad">
                                    Ciudad de residencia <span className="campo-requerido">*</span>
                                </label>
                                <input
                                    id="postulacion-ciudad"
                                    name="ciudad"
                                    type="text"
                                    required
                                    placeholder="Ej. Cartagena, Barranquilla, Bogotá..."
                                />
                            </div>
                        </div>

                        {/* Adjuntar archivo (CV / Hoja de vida) */}
                        <div className="postulacion-campo">
                            <label>
                                Adjuntar Hoja de Vida (CV) <span className="campo-requerido">*</span>
                            </label>

                            <div
                                className={`postulacion-dropzone ${arrastrando ? 'postulacion-dropzone--arrastrando' : ''} ${archivo ? 'postulacion-dropzone--con-archivo' : ''}`}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setArrastrando(true);
                                }}
                                onDragLeave={() => setArrastrando(false)}
                                onDrop={manejarDrop}
                                onClick={() => !archivo && fileInputRef.current?.click()}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    name="hojaDeVida"
                                    accept=".pdf,.doc,.docx"
                                    className="postulacion-input-file-oculto"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            validarYAsignarArchivo(e.target.files[0]);
                                        }
                                    }}
                                />

                                {archivo ? (
                                    <div className="postulacion-archivo-info">
                                        <div className="postulacion-archivo-icono">
                                            <Icon name="attach_file" />
                                        </div>
                                        <div className="postulacion-archivo-detalles">
                                            <span className="postulacion-archivo-nombre">{archivo.name}</span>
                                            <span className="postulacion-archivo-tamano">
                                                {formatearTamano(archivo.size)} · Listo para enviar
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            className="postulacion-archivo-quitar"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                quitarArchivo();
                                            }}
                                            title="Quitar archivo"
                                        >
                                            <Icon name="close" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="postulacion-dropzone-prompt">
                                        <div className="postulacion-dropzone-icono">
                                            <Icon name="attach_file" />
                                        </div>
                                        <p className="postulacion-dropzone-texto">
                                            <strong>Haz clic aquí</strong> o arrastra tu archivo para subirlo
                                        </p>
                                        <span className="postulacion-dropzone-subtexto">
                                            Formatos permitidos: PDF, DOC o DOCX (Máx. {TAMANO_MAX_MB} MB)
                                        </span>
                                    </div>
                                )}
                            </div>

                            {errorArchivo && <p className="postulacion-error-texto">{errorArchivo}</p>}
                        </div>

                        {/* Mensaje opcional */}
                        <div className="postulacion-campo">
                            <label htmlFor="postulacion-mensaje">
                                Breve perfil o mensaje adicional <span className="campo-opcional">(Opcional)</span>
                            </label>
                            <textarea
                                id="postulacion-mensaje"
                                name="mensaje"
                                rows="3"
                                placeholder="Cuéntanos brevemente sobre tu experiencia relevante o motivación para el cargo..."
                            />
                        </div>

                        {/* Pie del formulario con botón de envío */}
                        <div className="postulacion-modal__acciones">
                            <button
                                type="submit"
                                className="postulacion-modal__boton-primario"
                                disabled={cargando}
                            >
                                {cargando ? (
                                    <>
                                        <span className="postulacion-spinner" />
                                        Enviando postulación...
                                    </>
                                ) : (
                                    <>
                                        <Icon name="attach_file" />
                                        Enviar Postulación
                                    </>
                                )}
                            </button>

                            <div className="postulacion-modal__ayuda">
                                <span>¿Prefieres enviar por correo?</span>
                                <a href={mailtoAlternativo} className="postulacion-modal__enlace-correo">
                                    {correoTalento}
                                </a>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default function ModalPostulacion({
    abierto,
    vacanteSeleccionada,
    vacantes = [],
    correoTalento = 'talento@customsoluciones.com',
    onCerrar,
}) {
    if (!abierto) return null;

    return (
        <ContenidoModalPostulacion
            key={vacanteSeleccionada?.id || 'postulacion-general'}
            vacanteSeleccionada={vacanteSeleccionada}
            vacantes={vacantes}
            correoTalento={correoTalento}
            onCerrar={onCerrar}
        />
    );
}
