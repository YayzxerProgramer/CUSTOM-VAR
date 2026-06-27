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
                    Soluciones diseñadas para cada desafío operativo
                </h1>

                <p className="descripcion-soluciones text-on-surface-variant">
                    Elevamos el estándar de eficiencia con ingeniería de precisión. Garantizamos
                    el confort térmico, la continuidad operativa en ambientes críticos y la
                    optimización radical del consumo energético.
                </p>

            </div>

            {/* Fondo decorativo controlado 100% desde el CSS */}
            <div className="patron-rejilla-decorativa absolute inset-0 pointer-events-none" />
        </header>
    );
}
