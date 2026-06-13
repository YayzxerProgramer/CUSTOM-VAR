import "../css/Servicios.css"

export default function CajaEstadistica() {
    return (
        <>
            {/* Barra de Estadísticas */}
            < div className="barra-estadisticas" >
                <div className="envoltura-estadisticas">
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">15+</p>
                        <p className="etiqueta-estadistica">Años de experiencia</p>
                    </div>
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">500+</p>
                        <p className="etiqueta-estadistica">Proyectos</p>
                    </div>
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">3</p>
                        <p className="etiqueta-estadistica">Ciudades</p>
                    </div>
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">100%</p>
                        <p className="etiqueta-estadistica">Compromiso</p>
                    </div>
                </div>
            </div >
        </>
    );
}
