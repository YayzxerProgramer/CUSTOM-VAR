import { useState } from 'react';
import { industriasFormulario } from '../../data/soluciones.js';
import '../../css/SolicitudAsesoriaModal.css';

export default function SolicitudAsesoriaModal({ abierto, onCerrar }) {
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
        <div className="modal-asesoria" role="dialog" aria-modal="true">
            <button className="modal-asesoria__fondo" aria-label="Cerrar" onClick={cerrar} />

            <div className="modal-asesoria__panel">
                <div className="modal-asesoria__cabecera">
                    <span className="modal-asesoria__etiqueta">Asesoría experta</span>
                    <h3 className="modal-asesoria__titulo">Cuéntanos tu requerimiento</h3>
                    <button
                        type="button"
                        className="modal-asesoria__cerrar"
                        onClick={cerrar}
                        aria-label="Cerrar formulario"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {enviado ? (
                    <div className="modal-asesoria__exito">
                        <span className="material-symbols-outlined modal-asesoria__exito-icono">
                            check_circle
                        </span>
                        <h4 className="modal-asesoria__exito-titulo">¡Solicitud recibida!</h4>
                        <p className="modal-asesoria__exito-texto">
                            Un ingeniero especialista revisará su requerimiento y se pondrá en contacto
                            en menos de 24 horas hábiles.
                        </p>
                        <button type="button" className="modal-asesoria__exito-boton" onClick={cerrar}>
                            Cerrar
                        </button>
                    </div>
                ) : (
                    <form className="modal-asesoria__formulario" onSubmit={enviar}>
                        <label>
                            <span>Nombre</span>
                            <input required type="text" placeholder="Su nombre completo" />
                        </label>
                        <label>
                            <span>Correo electrónico / Teléfono</span>
                            <input required type="text" placeholder="correo@empresa.com  ·  +57 ..." />
                        </label>
                        <label>
                            <span>Industria</span>
                            <select required defaultValue="">
                                <option value="" disabled>
                                    Seleccione su industria
                                </option>
                                {industriasFormulario.map((industria) => (
                                    <option key={industria} value={industria}>
                                        {industria}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <span>Breve descripción de su requerimiento</span>
                            <textarea
                                required
                                rows="3"
                                placeholder="Cuéntenos brevemente qué necesita resolver..."
                            />
                        </label>
                        <button type="submit" className="modal-asesoria__submit">
                            Solicitar asesoría experta
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
