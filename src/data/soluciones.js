import ventilacionImg from '../img/ventilacion.avif';
import aireImg from '../img/aire.jpeg';
import refrigeracionImg from '../img/refrigeracion.jpg';

export const buyerPersonas = [
    {
        id: 'constructores',
        titulo: 'Constructor/Director de Proyecto',
        subtitulo: 'Proyectos V.A.R.',
        dolor: '¿Diseño, presupuesto y ejecución están realmente alineados?',
        descripcion: 'Un error de coordinación en V.A.R. puede convertirse en retrasos, reprocesos, sobrecostos y entregas fuera de plazo, en CUSTOM integramos ingeniería, suministro, fabricación e implementación para que la solución V.A.R. avance de acuerdo con el proyecto, con mayor control sobre tiempos, costos y ejecución.',
        solucion: 'MENOS IMPREVISTOS. MÁS CONTROL.',
        ruta: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'mantenimiento',
        titulo: 'Gerente de Mantenimiento e Infraestructura',
        subtitulo: 'Continuidad Operativa',
        dolor: '¿Una falla de climatización puede detener su operación?',
        descripcion: 'Prevenir paradas, atender fallas críticas y mantener sus sistemas V.A.R. operativos requiere respuesta técnica y planificación.',
        solucion: 'PROTEGEMOS LA CONTINUIDAD DE SU OPERACIÓN.',
        ruta: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'facilities-retail',
        titulo: 'Gerente de Operación/Administrador Retail',
        subtitulo: 'Confort y Desempeño',
        dolor: 'El confort también impacta la operación.',
        descripcion: 'Temperatura, calidad del aire y eficiencia energética influyen en la experiencia del usuario, productividad y desempeño de sus instalaciones. Diseñamos soluciones V.A.R. pensadas para confort, eficiencia y operación continua.',
        solucion: 'CONFORT, EFICIENCIA Y OPERACIÓN CONTINUA.',
        ruta: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'cadena-frio',
        titulo: 'Gerente de Logística / Cadena de Frío',
        subtitulo: 'Control Térmico Crítico',
        dolor: '¿Una variación de temperatura puede poner en riesgo su operación?',
        descripcion: 'En almacenamiento y distribución, mantener las condiciones térmicas adecuadas es parte crítica de la operación, integramos soluciones de refrigeración, climatización y control térmico para operaciones que requieren confiabilidad y precisión.',
        solucion: 'CONFIABILIDAD Y PRECISIÓN EN CONTROL TÉRMICO.',
        ruta: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'compras',
        titulo: 'Compras Y Abastecimiento',
        subtitulo: 'Respaldo y Suministro',
        dolor: '¿Necesita un proveedor que responda a tiempo y a escala?',
        descripcion: 'Equipos, componentes y soluciones V.A.R. con respaldo técnico, disponibilidad y capacidad de suministro.',
        solucion: 'RESPALDO TÉCNICO Y CAPACIDAD DE SUMINISTRO.',
        ruta: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop',
    },
];

export const categoriasIndustria = [
    { id: 'industria', titulo: 'Industria y Manufactura', subtitulo: 'Ventilacion', ruta: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200', descripcion: 'Controlamos el calor generado por maquinaria pesada y los gases de proceso para proteger a sus operadores y mantener la línea de producción activa. Diseñamos sistemas de ventilación industrial, climatización de zonas de trabajo y extracción de contaminantes adaptados a las exigencias de cada planta.' },
    { id: 'educativo', titulo: 'Educativo', subtitulo: 'Aire acondicionado', ruta: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop', descripcion: 'Garantizamos ambientes de aprendizaje con temperatura y calidad de aire óptimas para la concentración y el bienestar de estudiantes y docentes. Desde aulas hasta laboratorios, diseñamos soluciones que cumplen normativas de ventilación y eficiencia energética.' },
    { id: 'restaurantes', titulo: 'Restaurantes', subtitulo: 'Refrigeracion', ruta: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', descripcion: 'Mantenemos cocinas seguras con extracción eficiente de humos y grasas, y garantizamos el confort térmico en salas de comensales. Aseguramos también la cadena de frío en cámaras y equipos de refrigeración para preservar la calidad de sus alimentos.' },
    { id: 'datos', titulo: 'Centros de Datos', subtitulo: 'Ventilacion', ruta: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop', descripcion: 'Protegemos sus activos digitales con sistemas de enfriamiento de precisión que mantienen temperaturas y humedades estrictamente controladas. Diseñamos soluciones redundantes para centros de datos que garantizan disponibilidad continua y eficiencia energética medible.' },
    { id: 'laboratorios', titulo: 'Laboratorios y Farmacéuticas', subtitulo: 'Condiciones controladas', ruta: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop', descripcion: '¿Sus procesos requieren condiciones ambientales controladas para garantizar la calidad de sus productos? Implementamos soluciones de climatización y ventilación que mantienen ambientes estables, confiables y adecuados para procesos de alta exigencia.' },
    { id: 'oficinas', titulo: 'Oficinas y Edificios', subtitulo: 'Refrigeracion', ruta: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', descripcion: 'Optimizamos el confort térmico y la calidad del aire en oficinas y edificios corporativos para elevar la productividad y reducir el consumo energético. Integramos sistemas BMS para el control inteligente de la climatización por zonas.' },
    { id: 'hospitales', titulo: 'Hospitales', subtitulo: 'Ventilacion', ruta: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop', descripcion: 'Diseñamos sistemas de ventilación y climatización que cumplen las normas más exigentes de calidad de aire para entornos hospitalarios y quirúrgicos. Garantizamos presiones diferenciales, filtración HEPA y control térmico preciso en áreas críticas.' },
    { id: 'hoteles', titulo: 'Hoteles', subtitulo: 'Aire acondicionado', ruta: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop', descripcion: 'Creamos experiencias de confort personalizadas para huéspedes mediante sistemas de climatización silenciosos y eficientes en cada habitación y área común. Reducimos el consumo energético del hotel con estrategias de control inteligente y mantenimiento proactivo.' },
    { id: 'retail', titulo: 'Locales y Centros Comerciales', subtitulo: 'Refrigeracion', ruta: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop', descripcion: 'Aseguramos el confort de compradores y empleados con climatización eficiente en grandes superficies y locales comerciales. Gestionamos también los sistemas de refrigeración para exhibición y almacenaje de perecederos, cumpliendo normativas sanitarias.' },
];

export const servicios = [
    {
        id: 'auditoria',
        icono: 'energy_savings_leaf',
        titulo: 'Auditoría y Diagnóstico de Eficiencia Energética',
        imagen: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop',
        descripcion: 'No asumimos que necesita equipos nuevos; descubrimos dónde está perdiendo dinero. Evaluamos el rendimiento térmico real de su infraestructura actual mediante mediciones de consumo e identificación de fugas operativas. Le entregamos un reporte estratégico con acciones concretas que reducen su OpEx de forma inmediata, permitiéndole tomar decisiones de inversión basadas en datos duros de retorno financiero.',
    },
    {
        id: 'opex-care',
        icono: 'engineering',
        titulo: 'Mantenimiento Proactivo y Gestión de Activos (OpEx Care)',
        imagen: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
        descripcion: 'No somos un servicio que atiende emergencias cuando el aire ya falló; somos su socio en la preservación de activos. Desarrollamos planes de mantenimiento preventivo basados en el análisis de condiciones, termografía y analítica operativa. Minimizamos los paros imprevistos de su operación, mantenemos los niveles de eficiencia energética de diseño y programamos los costos de mantenimiento de forma controlada a largo plazo.',
    },
    {
        id: 'retrofitting-servicios',
        icono: 'autorenew',
        titulo: 'Conversión y Modernización Tecnológica (Retrofitting)',
        imagen: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop',
        descripcion: 'Renovamos el valor de su infraestructura obsoleta sin necesidad de cambiarla por completo. Analizamos sus sistemas HVAC antiguos y sustituimos componentes clave —como compresores tradicionales por tecnología inverter, refrigerantes ecológicos o chillers de última generación—. Esta intervención estratégica extiende la vida útil de sus plantas de agua helada, eleva la eficiencia y minimiza el impacto ambiental con una fracción del costo de un sistema nuevo.',
    },
    {
        id: 'cai',
        icono: 'air',
        titulo: 'Filtración Avanzada y Calidad de Aire Interior (CAI)',
        imagen: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
        descripcion: 'Convertimos la salud ambiental en un motor de productividad y confianza. Evaluamos las tasas de renovación de aire de sus oficinas, escuelas o locales comerciales para implementar sistemas de inyección, extracción y filtración de alta eficiencia (HEPA / UV). Protegemos a sus colaboradores y clientes de virus, olores y contaminantes, alineando sus espacios con las certificaciones de salud laboral y bienestar más exigentes.',
    },
    {
        id: 'ventilacion-dinamica',
        icono: 'mode_fan',
        titulo: 'Ingeniería de Ventilación Dinámica y Extracción',
        imagen: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop',
        descripcion: 'Optimizamos los entornos gastronómicos, comerciales e industriales combinando confort y seguridad. Calculamos y diseñamos sistemas integrales de inyección y extracción de aire especializados en campanas de cocina y áreas de comensales. Logramos el balance de presiones perfecto para contener grasas o contaminantes, eliminar humos y erradicar olores desagradables.',
    },
];

export const pilares = [
    {
        id: 'ventilacion',
        tag: 'Pilar 01',
        icono: 'air',
        titulo: 'Ventilación',
        imagen: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
        descripcion: 'Diseñamos sistemas de inyección, extracción y renovación de aire que garantizan ambientes seguros, libres de contaminantes y con la calidad de aire que cada espacio exige.',
    },
    {
        id: 'aire-acondicionado',
        tag: 'Pilar 02',
        icono: 'ac_unit',
        titulo: 'Aire Acondicionado',
        imagen: aireImg,
        descripcion: 'Climatización de precisión y confort térmico para todo tipo de inmueble, con equipos de alta eficiencia que reducen el consumo energético de forma medible.',
    },
    {
        id: 'refrigeracion',
        tag: 'Pilar 03',
        icono: 'severe_cold',
        titulo: 'Refrigeración',
        imagen: refrigeracionImg,
        descripcion: 'Aseguramos estabilidad térmica y continuidad de la cadena de frío en cámaras, CEDIS y procesos industriales donde no hay margen de error.',
    },
];

export const industriasFormulario = [
    'Industria y Manufactura',
    'Educativo',
    'Restaurantes',
    'Centros de Datos',
    'Laboratorios y Farmacéuticas',
    'Oficinas y Edificios',
    'Hospitales',
    'Hoteles',
    'Locales y Centros Comerciales',
];

export const solucionesAplicadasProyectos = [
    {
        id: 'bim',
        titulo: 'DISEÑO E INGENIERÍA V.A.R. CON MODELADO BIM',
        icono: 'architecture',
        descripcion: 'Desarrollamos ingeniería conceptual, básica y de detalle para sistemas de ventilación, aire acondicionado y refrigeración, incorporando modelado BIM en tres dimensiones para coordinar las diferentes especialidades, identificar interferencias y optimizar recorridos, espacios técnicos y puntos de instalación. Nuestro enfoque permite anticipar restricciones constructivas y tomar decisiones técnicas con mayor información antes de la ejecución en obra, contribuyendo a una implementación más coordinada, eficiente y técnicamente viable.',
    },
    {
        id: 'critica',
        titulo: 'SOLUCIONES DE CLIMATIZACIÓN PARA INFRAESTRUCTURA CRÍTICA',
        icono: 'domain',
        descripcion: 'Desarrollamos soluciones de climatización, ventilación y control para centros de datos, hospitales, laboratorios farmacéuticos y otras instalaciones que requieren condiciones ambientales controladas. Definimos estrategias de redundancia, capacidad, distribución de aire y control de temperatura y humedad de acuerdo con los requerimientos particulares de cada aplicación, buscando minimizar los riesgos asociados a fallas de los sistemas y proteger la continuidad de las operaciones y los activos.',
    },
    {
        id: 'bms',
        titulo: 'AUTOMATIZACIÓN Y CONTROL INTELIGENTE — SISTEMAS BMS',
        icono: 'precision_manufacturing',
        descripcion: 'Diseñamos e integramos soluciones de Building Management System (BMS) que permiten supervisar, controlar y gestionar centralizadamente los sistemas de climatización y otros equipos asociados a la infraestructura. La automatización permite ajustar la operación de los sistemas de acuerdo con variables como ocupación, horarios y condiciones ambientales, facilitando la supervisión del desempeño, la optimización de los tiempos de operación y una gestión más eficiente del consumo energético.',
    },
    {
        id: 'comisionamiento',
        titulo: 'COMISIONAMIENTO Y VALIDACIÓN DE SISTEMAS',
        icono: 'fact_check',
        descripcion: 'Desarrollamos procesos de commissioning orientados a comprobar el desempeño funcional de los sistemas HVAC antes de su puesta en operación definitiva. Realizamos pruebas, verificaciones y ajustes sobre variables como caudales de aire, temperaturas, presiones, balanceo y secuencias de control, contrastando los resultados obtenidos con los criterios de diseño y las condiciones de operación establecidas. El objetivo es identificar desviaciones, documentar resultados y facilitar la entrega de sistemas correctamente configurados y operativos.',
    },
    {
        id: 'retrofitting-proyectos',
        titulo: 'CONVERSIÓN Y MODERNIZACIÓN TECNOLÓGICA — RETROFITTING',
        icono: 'published_with_changes',
        descripcion: 'Actualizamos sistemas HVAC existentes para mejorar su desempeño y extender su vida útil. Evaluamos la infraestructura instalada para identificar oportunidades de modernización tecnológica y optimización de sus componentes. Las estrategias de retrofit pueden incluir la actualización de sistemas de control, sustitución de componentes, incorporación de tecnología inverter, migración a refrigerantes de menor impacto ambiental o modernización de equipos de producción de agua helada, según las condiciones y requerimientos de cada instalación. Estas intervenciones permiten aprovechar parte de la infraestructura existente, mejorar la eficiencia operacional y reducir la necesidad de realizar reemplazos integrales cuando técnicamente no son necesarios.',
    },
    {
        id: 'frio-industrial',
        titulo: 'GESTIÓN DE CADENA DE FRÍO Y REFRIGERACIÓN INDUSTRIAL',
        icono: 'kitchen',
        descripcion: 'Desarrollamos sistemas de refrigeración para centros de distribución, cámaras de conservación y congelación, cuartos fríos, zonas de despacho y otras aplicaciones industriales que requieren control térmico. Integramos soluciones de monitoreo y control de variables como temperatura y humedad, de acuerdo con los requerimientos de cada operación, contribuyendo a mantener condiciones estables durante las diferentes etapas de almacenamiento y distribución. Nuestro enfoque considera las características del producto, las condiciones de operación, las cargas térmicas y los requerimientos específicos de cada instalación.',
    },
];

export const solucionesAplicadasServicios = [
    {
        id: 'auditoria-serv',
        titulo: 'AUDITORÍA Y DIAGNÓSTICO DE EFICIENCIA ENERGÉTICA',
        icono: 'energy_savings_leaf',
        descripcion: 'Evaluamos el desempeño energético y operativo de los sistemas de climatización y refrigeración existentes mediante mediciones, análisis de consumo, revisión de condiciones de operación e identificación de oportunidades de mejora. A partir del diagnóstico, estructuramos recomendaciones técnicas orientadas a optimizar el consumo energético, mejorar el desempeño de los equipos y priorizar inversiones de acuerdo con su impacto técnico y económico. El resultado es una base objetiva para la toma de decisiones, soportada en información real de la instalación y criterios de retorno de inversión.',
    },
    {
        id: 'opex-care-serv',
        titulo: 'MANTENIMIENTO PROACTIVO Y GESTIÓN DE ACTIVOS — OPEX CARE',
        icono: 'engineering',
        descripcion: 'Desarrollamos estrategias de mantenimiento orientadas a preservar la confiabilidad, disponibilidad y eficiencia de los sistemas de climatización y refrigeración. Combinamos mantenimiento preventivo con herramientas de diagnóstico como análisis de condiciones, inspecciones técnicas y termografía, permitiendo identificar desviaciones antes de que evolucionen hacia fallas operativas. Nuestro enfoque busca reducir paradas no programadas, conservar el desempeño de los equipos y facilitar una gestión controlada de los costos asociados a la operación y mantenimiento de los activos.',
    },
    {
        id: 'retrofitting-serv',
        titulo: 'CONVERSIÓN Y MODERNIZACIÓN TECNOLÓGICA — RETROFITTING',
        icono: 'autorenew',
        descripcion: 'Modernizamos sistemas existentes para responder a nuevas exigencias de eficiencia y operación. Analizamos la condición y desempeño de los sistemas HVAC existentes para determinar qué componentes pueden ser actualizados, reemplazados o integrados con nuevas tecnologías. Las soluciones pueden contemplar modernización de controles, actualización de componentes, incorporación de tecnología inverter, adecuación a nuevos refrigerantes o renovación de equipos de producción de agua helada, siempre a partir de un análisis técnico de factibilidad. El retrofit permite aprovechar infraestructura existente y orientar la inversión hacia los componentes que generan mayor impacto en el desempeño del sistema.',
    },
    {
        id: 'cai-serv',
        titulo: 'FILTRACIÓN AVANZADA Y CALIDAD DE AIRE INTERIOR — CAI',
        icono: 'air',
        descripcion: 'Evaluamos las condiciones de ventilación y renovación de aire de oficinas, instituciones educativas, establecimientos comerciales, instalaciones industriales y otros espacios ocupados. A partir de las características de cada aplicación, diseñamos soluciones de inyección, extracción, filtración y tratamiento de aire que pueden incorporar tecnologías de alta eficiencia, incluyendo filtración HEPA y sistemas de tratamiento mediante UV cuando las condiciones del proyecto lo requieren. Estas soluciones contribuyen al control de partículas y contaminantes, a una adecuada renovación de aire y a la generación de ambientes interiores más confortables y controlados.',
    },
    {
        id: 'ventilacion-dinamica-serv',
        titulo: 'INGENIERÍA DE VENTILACIÓN DINÁMICA Y EXTRACCIÓN',
        icono: 'mode_fan',
        descripcion: 'Diseñamos sistemas de ventilación y extracción adaptados a las condiciones reales de cada instalación. Desarrollamos soluciones de inyección, extracción y renovación de aire para aplicaciones comerciales, gastronómicas e industriales, considerando las cargas contaminantes, caudales requeridos, condiciones de presión y características arquitectónicas del espacio. En aplicaciones gastronómicas, diseñamos sistemas asociados a campanas de extracción, extracción de humos y control de olores, buscando un adecuado balance entre extracción e inyección de aire. Nuestro diseño considera los requerimientos específicos de cada ambiente para lograr condiciones de operación seguras, funcionales y técnicamente coherentes con la infraestructura.',
    },
];
