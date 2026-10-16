// Source: Google Maps Platform Code Assist
import { useEffect, useRef, useState } from 'react';
import '../css/MapaGoogle.css';

const LATITUD = 10.39833;
const LONGITUD = -75.49780;
const DIRECCION_COMPLETA = "Cl. 30 #55-139, Escallón Villa, Cartagena de Indias, Bolívar";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION_COMPLETA)}`;

export default function MapaGoogle() {
    const contenedorMapaRef = useRef(null);
    const [mapaJsCargado, setMapaJsCargado] = useState(false);
    const [errorCargaJs, setErrorCargaJs] = useState(false);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

        // Si no hay API Key configurada en .env, se utilizará la vista embebida de Google Maps
        if (!apiKey) {
            return;
        }

        let cancelado = false;

        const inicializarMapaJs = () => {
            if (!contenedorMapaRef.current || !window.google || !window.google.maps) return;

            try {
                // Configuración de mapa estático (interacción desactivada para evitar capturar el scroll)
                const mapInstance = new window.google.maps.Map(contenedorMapaRef.current, {
                    center: { lat: LATITUD, lng: LONGITUD },
                    zoom: 16,
                    disableDefaultUI: true,
                    gestureHandling: 'none',
                    keyboardShortcuts: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    zoomControl: false,
                    styles: [
                        { elementType: 'geometry', stylers: [{ color: '#1a2936' }] },
                        { elementType: 'labels.text.stroke', stylers: [{ color: '#1a2936' }] },
                        { elementType: 'labels.text.fill', stylers: [{ color: '#8aaec7' }] },
                        {
                            featureType: 'administrative.locality',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#e09865' }]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#77a0bf' }]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{ color: '#273849' }]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: '#192634' }]
                        },
                        {
                            featureType: 'road',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#9bb8cc' }]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{ color: '#354d63' }]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{ color: '#002132' }]
                        }
                    ]
                });

                // Marcador en la sede Cartagena
                new window.google.maps.Marker({
                    position: { lat: LATITUD, lng: LONGITUD },
                    map: mapInstance,
                    title: 'CUSTOM V.A.R. - Cartagena',
                });

                if (!cancelado) {
                    setMapaJsCargado(true);
                }
            } catch (err) {
                console.warn('Error inicializando mapa de Google con JS:', err);
                if (!cancelado) {
                    setErrorCargaJs(true);
                }
            }
        };

        if (window.google && window.google.maps) {
            inicializarMapaJs();
        } else {
            const scriptExistente = document.getElementById('google-maps-js-sdk');
            if (!scriptExistente) {
                const script = document.createElement('script');
                script.id = 'google-maps-js-sdk';
                script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&solution_channel=gmp_git_agentskills_v1`;
                script.async = true;
                script.defer = true;
                script.onload = () => inicializarMapaJs();
                script.onerror = () => {
                    if (!cancelado) setErrorCargaJs(true);
                };
                document.head.appendChild(script);
            } else {
                const interval = setInterval(() => {
                    if (window.google && window.google.maps) {
                        clearInterval(interval);
                        inicializarMapaJs();
                    }
                }, 100);
                return () => clearInterval(interval);
            }
        }

        return () => {
            cancelado = true;
        };
    }, []);

    const mostrarIframe = !mapaJsCargado || errorCargaJs;

    return (
        <div className="tarjeta-mapa-footer">
            <div className="tarjeta-mapa-footer__header">
                <span className="tarjeta-mapa-footer__etiqueta">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Sede Cartagena
                </span>
                <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tarjeta-mapa-footer__enlace"
                    title="Abrir en Google Maps"
                >
                    Ver en Maps ↗
                </a>
            </div>

            <div className="tarjeta-mapa-footer__cuerpo">
                {/* Contenedor donde la API JS de Google Maps monta el mapa estático */}
                <div
                    ref={contenedorMapaRef}
                    className="tarjeta-mapa-footer__canvas"
                    style={{ display: mapaJsCargado ? 'block' : 'none' }}
                />

                {/* Si no hay API key o aún no cargó el SDK JS, se visualiza el embed de Google Maps */}
                {mostrarIframe && (
                    <iframe
                        title="Ubicación de CUSTOM VAR en Google Maps"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(DIRECCION_COMPLETA)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        className="tarjeta-mapa-footer__iframe"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                )}

                {/* Capa clicable para abrir directamente en Google Maps */}
                <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tarjeta-mapa-footer__overlay"
                    aria-label="Abrir ubicación de CUSTOM VAR en Google Maps"
                >
                    <span className="tarjeta-mapa-footer__badge-overlay">
                        Abrir en Google Maps
                    </span>
                </a>
            </div>
        </div>
    );
}
