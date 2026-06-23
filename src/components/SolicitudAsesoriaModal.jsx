import { industriasFormulario } from '../data/soluciones.js';
import '../css/SolicitudAsesoriaModal.css';

export default function SolicitudAsesoriaModal({ abierto, onClose, contexto = 'Soluciones VAR' }) {
    if (!abierto) {
        return null;
    }

    return (
        <div className="modal-asesoria" role="dialog" aria-modal="true" aria-labelledby="modal-asesoria-titulo">
            <button className="modal-asesoria__fondo" type="button" onClick={onClose} aria-label="Cerrar formulario" />
            <aside className="modal-asesoria__panel">
                <button className="modal-asesoria__cerrar" type="button" onClick={onClose} aria-label="Cerrar">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <span className="modal-asesoria__etiqueta">{contexto}</span>
                <h2 id="modal-asesoria-titulo">Cuentenos su requerimiento</h2>
                <p>
                    Comparta los datos iniciales y un especialista revisara su necesidad para solicitar asesoria experta.
                </p>

                <form className="modal-asesoria__formulario">
                    <label>
                        Nombre
                        <input type="text" name="nombre" placeholder="Nombre y apellido" />
                    </label>
                    <label>
                        Correo electronico / Telefono
                        <input type="text" name="contacto" placeholder="correo@empresa.com / +57..." />
                    </label>
                    <label>
                        Industria
                        <select name="industria" defaultValue="">
                            <option value="" disabled>Seleccione una industria</option>
                            {industriasFormulario.map((industria) => (
                                <option key={industria} value={industria}>{industria}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Breve descripcion de su requerimiento
                        <textarea name="requerimiento" rows="5" placeholder="Cuente el problema, ubicacion, urgencia o tipo de proyecto." />
                    </label>
                    <button type="submit" className="modal-asesoria__submit">
                        Solicitar asesoria experta
                    </button>
                </form>
            </aside>
        </div>
    );
}
