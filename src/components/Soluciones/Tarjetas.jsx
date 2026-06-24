import React from 'react';

// Subcomponente reutilizable para las cartas
function TarjetaPersona({ imagen, alt, titulo, descripcion, alHacerClicModal }) {
    return (
        <div className="tarjeta-persona group">
            <div className="contenedor-imagen-tarjeta">
                <img alt={alt} className="imagen-tarjeta" src={imagen} />
                <div className="capa-superpuesta-tarjeta" />
            </div>

            <div className="contenido-tarjeta">
                <h3 className="titulo-tarjeta">{titulo}</h3>
                <p className="descripcion-tarjeta">{descripcion}</p>

                <div className="acciones-tarjeta">
                    <button className="boton-tarjeta boton-esquema">Ver Proyectos</button>
                    <button className="boton-tarjeta boton-esquema">Ver Servicios</button>
                    <button className="boton-tarjeta boton-solido" onClick={alHacerClicModal}>
                        Cuéntanos tu requerimiento
                    </button>
                </div>
            </div>
        </div>
    );
}

// Componente Principal
export default function GridTarjetasPersona() {
    const tarjetasData = [
        {
            id: 1,
            imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGDhjg1cDED4DKoZOGnYQgDzf-shEQYbbEz_XVsDLwhG2VPasU-xRfWe0nNT9Ov088VAxZXboqTMoHZucre2G0-wkAfRRrCkMcRf6oOc2EQCq_jnx-aGFKfJbZkzD0xce2QHRF_LSQDcJDJqhDe6cGBG1mmsXsVeWOLyWQ-LAXnuQCxofWhSrDbJNPCJ3q1ug-9wiXH1HJU3dBqrHaWfrplPTXq-sSyQtSsqq-Cv_1W3okFGv1qLfP',
            alt: 'Constructor reviewing BIM model',
            titulo: 'Constructores y/o Directores de Proyecto',
            descripcion: 'Mitigación de riesgos mediante modelado BIM avanzado y coordinación técnica proactiva para evitar sobrecostos por cambios en sitio.'
        },
        {
            id: 2,
            imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf1bhxAnVNW7pEXvRMrbxk3s-1QI-Usa7OzM6TornJ8ewXw2UaySGPKi8VT2SKXcTkpFzZlHHmn-kHopUs1pwTEK-W7GzKHe3-tZwFHtcFNEfErE7KccV2F2qd2LwEjAtYeMPA4Sfq5jPBIaC0SZ7olnTkQUffgAs1A3b65Xj-_g9IZwRqk4yw5AgqVsIcA-QGodIppFkTcV5md3ZImVVuAM7V-NccnU7KLdZnJr4HzNsIerlGUGTJ',
            alt: 'Server room infrastructure',
            titulo: 'Gerente / Director de Mantenimiento',
            descripcion: 'Garantizamos la disponibilidad de infraestructura crítica y Data Centers con planes de mantenimiento predictivo de alta precisión.'
        },
        {
            id: 3,
            imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuzGJAPRmVRQBSG1p6mc4xN63gBucX0djXpXOZe0v4X-pSWkvbeCm1oHOs2rj54KH6_PRCPbjlWXxqHgtnosQbrQ6_BXjUJ_aNmWmfIiGgGqsVd2pKbe4oj0MWHpIx88y8y90vXrSLDYmP4o6_dvMVcrP4N-Fa6GAA4ya8T7nZZ20cplt7NTfz-sUd_-FdQWMojgaReRi9BweOMfh9c_v6Tedy94BhEmYlxRaDna3DRTL6DH0twXEb',
            alt: 'BMS Control dashboard on tablet',
            titulo: 'Gerente de Operaciones y Retail',
            descripcion: 'Optimización del OPEX mediante automatización inteligente (BMS) y estrategias de ahorro energético sin comprometer la experiencia del usuario.'
        },
        {
            id: 4,
            imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqWI8JZw7pYrO0v1L2AFsCkf5pa0JNh4gdPUZH75zrtoprfadzg8r-x8HVSi7IIXacrBRumvySqjn_tuIi42ypF31kNhDJ60vmBykdIn6BHSRDU6wdJaKfXNJCzEsODp_-U5d3eV5LXZsoqIsmousnrJaKCjXA-ILqem5yWaP2CTmyhKuHTYyNVcTpinmd4kgNkZ6574YC5MOLeV8TcuXye9SBwCZxnUxs4kXU72FHJl4s5jI1gNxw',
            alt: 'Cold storage warehouse logistics',
            titulo: 'Gerente de Logística y Cadena de Frío',
            descripcion: 'Integridad total de productos termosensibles en los sectores farmacéutico y alimenticio mediante control riguroso de estabilidad térmica.'
        }
    ];

    const abrirModalContacto = () => {
        // Aquí puedes enlazar tu lógica real para abrir el modal global
        if (typeof window.openModal === "function") {
            window.openModal();
        } else {
            console.log("Abrir modal de contacto");
        }
    };

    return (
        <section className="seccion-tarjetas-persona">
            <div className="contenedor-tarjetas-max">
                <div className="rejilla-tarjetas">
                    {tarjetasData.map((tarjeta) => (
                        <TarjetaPersona
                            key={tarjeta.id}
                            imagen={tarjeta.imagen}
                            alt={tarjeta.alt}
                            titulo={tarjeta.titulo}
                            descripcion={tarjeta.descripcion}
                            alHacerClicModal={abrirModalContacto}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}