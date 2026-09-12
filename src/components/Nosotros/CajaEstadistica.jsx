import "../../css/Nosotros/Servicios.css"

export default function CajaEstadistica() {
    return (
        <>
            {/* Barra de Estadísticas */}
            < div className="barra-estadisticas" >
                <div className="envoltura-estadisticas">
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">16</p>
                        <p className="etiqueta-estadistica">Años de experiencia</p>
                    </div>
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">200</p>
                        <p className="etiqueta-estadistica">Proyectos ejecutados</p>
                    </div>
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">25</p>
                        <p className="etiqueta-estadistica">Ciudades atendidas</p>
                    </div>
                    <div className="bloque-estadistica">
                        <p className="numero-estadistica">2.500</p>
                        <p className="etiqueta-estadistica">Toneladas instaladas</p>
                    </div>
                </div>
            </div >
        </>
    );
}
