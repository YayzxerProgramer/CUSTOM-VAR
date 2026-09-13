import React from 'react';

export default function Introduccion() {
    return (
        <header className="cabecera-introduccion relative overflow-hidden">
            <div className="contenedor-introduccion relative z-10">

                <div className="intro-eyebrow-row">
                    <span className="subtitulo-soluciones uppercase tracking-widest">
                        Soluciones CUSTOM
                    </span>
                    <span className="intro-eyebrow-punto" aria-hidden="true" />
                    <span className="intro-eyebrow-secundario uppercase tracking-widest">
                        Proyectos · Servicios
                    </span>
                </div>

                <h1 className="titulo-soluciones text-primary">
                    ¿Qué desafío está enfrentando?
                </h1>

                <p className="descripcion-soluciones text-on-surface-variant">
                    Cada proyecto tiene un reto diferente. Diseñamos, suministramos e implementamos soluciones de Ventilación, Aire Acondicionado y Refrigeración (V.A.R.) según las necesidades de cada operación, desde la etapa de diseño hasta la puesta en funcionamiento.
                </p>

            </div>

            {/* Fondo decorativo controlado 100% desde el CSS */}
            <div className="patron-rejilla-decorativa absolute inset-0 pointer-events-none" />
        </header>
    );
}
