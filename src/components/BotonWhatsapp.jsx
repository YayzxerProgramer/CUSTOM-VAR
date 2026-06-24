import { useState, useEffect } from "react";
import "../css/BotonWhatsapp.css"

function BotonWhatsapp() {
    const [showBubble, setShowBubble] = useState(false);

    const telefono = "+573006830303";
    const mensajePredeterminado = "Hola, me interesa recibir asesoría sobre sus soluciones térmicas y de ingeniería.";
    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajePredeterminado)}`;

    useEffect(() => {
        const yaCerrada = sessionStorage.getItem("wsp_bubble_closed");
        if (yaCerrada) return;

        const timer = setTimeout(() => {
            setShowBubble(true);
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []);

    const handleClose = () => {
        setShowBubble(false);
        sessionStorage.setItem("wsp_bubble_closed", "true");
    };

    return (
        <div className="wsp-widget">
            {showBubble && (
                <div className="wsp-bubble">
                    <button
                        className="wsp-bubble-close"
                        onClick={handleClose}
                        aria-label="Cerrar"
                    >
                        ×
                    </button>
                    <p className="wsp-bubble-title">¿Necesitas asesoría?</p>

                    <a href={urlWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wsp-bubble-link"
                    >
                        Contáctanos aquí
                    </a>
                </div>
            )
            }


            <a href={urlWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="wsp-float-btn"
            >
                <img src="/src/img/BtnWsp.png" alt="Contacto WhatsApp" />
            </a >
        </div >
    );
}

export default BotonWhatsapp;