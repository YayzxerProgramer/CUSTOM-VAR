import { useEffect, useRef } from 'react';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export default function TurnstileWidget() {
    const contenedorRef = useRef(null);

    useEffect(() => {
        if (!TURNSTILE_SITE_KEY || !contenedorRef.current) return;

        let widgetId = null;
        let intervalo = null;
        let reintentos = 0;
        const MAX_REINTENTOS = 2;

        const render = () => {
            if (!contenedorRef.current || !window.turnstile) return;
            widgetId = window.turnstile.render(contenedorRef.current, {
                sitekey: TURNSTILE_SITE_KEY,
                'error-callback': () => {
                    // Si el error persiste (ej. dominio no autorizado en Cloudflare),
                    // reintentar sin limite crea un loop infinito de reset -> error -> reset.
                    // Despues de MAX_REINTENTOS dejamos que Turnstile muestre su propio
                    // estado de error en vez de seguir parpadeando.
                    if (reintentos < MAX_REINTENTOS && widgetId !== null && window.turnstile) {
                        reintentos += 1;
                        window.turnstile.reset(widgetId);
                    }
                },
            });
        };

        // El script de Turnstile carga async; en una SPA puede terminar de cargar
        // antes o despues de que este componente monte, asi que esperamos a que
        // `window.turnstile` exista en vez de depender del escaneo automatico.
        if (window.turnstile) {
            render();
        } else {
            intervalo = setInterval(() => {
                if (window.turnstile) {
                    clearInterval(intervalo);
                    render();
                }
            }, 200);
        }

        return () => {
            if (intervalo) clearInterval(intervalo);
            if (widgetId !== null && window.turnstile) window.turnstile.remove(widgetId);
        };
    }, []);

    if (!TURNSTILE_SITE_KEY) return null;
    return <div ref={contenedorRef} />;
}
