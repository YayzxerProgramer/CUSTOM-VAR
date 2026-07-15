// Importaciones de fotos de proyectos (usadas por los carruseles)
import justicia1 from '../img/proyectos-img/JUSTICIA_1.jpg';
import justicia2 from '../img/proyectos-img/JUSTICIA_2.jpg';
import justicia3 from '../img/proyectos-img/JUSTICIA_3.jpg';
import justicia4 from '../img/proyectos-img/JUSTICIA_4.jpg';
import justicia5 from '../img/proyectos-img/JUSTICIA_5.jpg';

import biblioteca1 from '../img/proyectos-img/BIBLIOTECA_1.jpg';
import biblioteca2 from '../img/proyectos-img/BIBLIOTECA_2.jpeg';
import biblioteca3 from '../img/proyectos-img/BIBLIOTECA_3.jpg';
import biblioteca4 from '../img/proyectos-img/BIBLIOTECA_4.jpeg';
import biblioteca5 from '../img/proyectos-img/BIBLIOTECA_5.jpg';

import camara1 from '../img/proyectos-img/CAMARA_1.jpg';
import camara2 from '../img/proyectos-img/CAMARA_2.jpg';
import camara3 from '../img/proyectos-img/CAMARA_3.jpg';
import camara4 from '../img/proyectos-img/CAMARA_4.jpg';
import camara5 from '../img/proyectos-img/CAMARA_5.jpg';

import dimar1 from '../img/proyectos-img/DIMAR_1.jpg';
import dimar2 from '../img/proyectos-img/DIMAR_2.jpg';
import dimar3 from '../img/proyectos-img/DIMAR_3.jpg';
import dimar4 from '../img/proyectos-img/DIMAR_4.jpg';
import dimar5 from '../img/proyectos-img/DIMAR_5.jpg';

import roche1 from '../img/proyectos-img/ROCHE_1.jpg';
import roche2 from '../img/proyectos-img/ROCHE_2.jpg';
import roche3 from '../img/proyectos-img/ROCHE_3.jpg';
import roche4 from '../img/proyectos-img/ROCHE_4.jpg';
import roche5 from '../img/proyectos-img/ROCHE_5.jpg';

export const buyerPersonas = [
    {
        id: 'constructores',
        titulo: 'Constructores y/o Director de proyectos',
        subtitulo: 'Proyectos',
        dolor: 'Cambios de diseno y problemas de coordinacion retrasando su obra?',
        descripcion: 'Un error en el calculo o la falta de coordinacion entre especialidades puede costar semanas de retraso y millones en penalizaciones. Sabemos que su reputacion depende de entregar a tiempo y bajo el presupuesto acordado.',
        solucion: 'Experimente la tranquilidad de ejecutar cada proyecto con estrategias avanzadas, tiempos controlados, presupuesto claro y sin costos ocultos.',
        ruta: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'mantenimiento',
        titulo: 'Gerente/Director de mantenimiento e infraestructura',
        subtitulo: 'Continuidad operacional',
        dolor: 'Su operacion esta a una falla de HVAC de detenerse por completo?',
        descripcion: 'Los paros no programados en centros de datos, hospitales o lineas de produccion no son una opcion; representan perdidas millonarias y riesgos criticos.',
        solucion: 'Creamos alianzas a la medida para operar, conservar, reparar y modernizar los activos VAR a su cargo, garantizando eficiencia, respaldo y continuidad.',
        ruta: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'facilities-retail',
        titulo: 'Gerente de Operaciones/Facilidades - Administrador Retail',
        subtitulo: 'Confort y eficiencia',
        dolor: 'Las quejas por confort y las facturas de energia consumen su dia a dia?',
        descripcion: 'Un sistema VAR ineficiente dispara el consumo electrico y genera reportes constantes de usuarios insatisfechos. Frio, calor, olores o ruido arruinan la experiencia de marca.',
        solucion: 'Disenamos automatizacion y optimizacion para inyeccion, extraccion, climatizacion y refrigeracion, reduciendo el gasto energetico de forma medible.',
        ruta: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop',
    },
    {
        id: 'cadena-frio',
        titulo: 'Gerente de Logistica, Calidad o Cadena de Frio',
        subtitulo: 'Refrigeracion critica',
        dolor: 'Un solo grado de variacion en sus cuartos frios pone en riesgo millones en mercancia?',
        descripcion: 'En la conservacion de cadena de frio no hay margen de error. Una falla de refrigeracion, mala distribucion de aire o retrasos de deteccion generan mermas y sanciones.',
        solucion: 'Aseguramos estabilidad termica, continuidad de cadena de frio y cumplimiento estricto de normativas de calidad.',
        ruta: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop',
    },
];

export const categoriasIndustria = [
    { id: 'industria', titulo: 'Industria y Manufactura', subtitulo: 'Ventilacion', ruta: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200', descripcion: 'Controlamos el calor generado por maquinaria pesada y los gases de proceso para proteger a sus operadores y mantener la línea de producción activa. Diseñamos sistemas de ventilación industrial, climatización de zonas de trabajo y extracción de contaminantes adaptados a las exigencias de cada planta.' },
    { id: 'educativo', titulo: 'Educativo', subtitulo: 'Aire acondicionado', ruta: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop', descripcion: 'Garantizamos ambientes de aprendizaje con temperatura y calidad de aire óptimas para la concentración y el bienestar de estudiantes y docentes. Desde aulas hasta laboratorios, diseñamos soluciones que cumplen normativas de ventilación y eficiencia energética.' },
    { id: 'restaurantes', titulo: 'Restaurantes', subtitulo: 'Refrigeracion', ruta: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', descripcion: 'Mantenemos cocinas seguras con extracción eficiente de humos y grasas, y garantizamos el confort térmico en salas de comensales. Aseguramos también la cadena de frío en cámaras y equipos de refrigeración para preservar la calidad de sus alimentos.' },
    { id: 'datos', titulo: 'Centros de Datos', subtitulo: 'Ventilacion', ruta: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop', descripcion: 'Protegemos sus activos digitales con sistemas de enfriamiento de precisión que mantienen temperaturas y humedades estrictamente controladas. Diseñamos soluciones redundantes para centros de datos que garantizan disponibilidad continua y eficiencia energética medible.' },
    { id: 'var', titulo: 'VAR', subtitulo: 'Aire acondicionado', ruta: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop', descripcion: 'Ofrecemos consultoría integral en Ventilación, Aire Acondicionado y Refrigeración para proyectos que requieren visión técnica y estratégica. Acompañamos desde la ingeniería conceptual hasta la puesta en marcha y el mantenimiento de largo plazo.' },
    { id: 'oficinas', titulo: 'Oficinas y Edificios', subtitulo: 'Refrigeracion', ruta: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', descripcion: 'Optimizamos el confort térmico y la calidad del aire en oficinas y edificios corporativos para elevar la productividad y reducir el consumo energético. Integramos sistemas BMS para el control inteligente de la climatización por zonas.' },
    { id: 'hospitales', titulo: 'Hospitales', subtitulo: 'Ventilacion', ruta: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop', descripcion: 'Diseñamos sistemas de ventilación y climatización que cumplen las normas más exigentes de calidad de aire para entornos hospitalarios y quirúrgicos. Garantizamos presiones diferenciales, filtración HEPA y control térmico preciso en áreas críticas.' },
    { id: 'hoteles', titulo: 'Hoteles', subtitulo: 'Aire acondicionado', ruta: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop', descripcion: 'Creamos experiencias de confort personalizadas para huéspedes mediante sistemas de climatización silenciosos y eficientes en cada habitación y área común. Reducimos el consumo energético del hotel con estrategias de control inteligente y mantenimiento proactivo.' },
    { id: 'retail', titulo: 'Locales y Centros Comerciales', subtitulo: 'Refrigeracion', ruta: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop', descripcion: 'Aseguramos el confort de compradores y empleados con climatización eficiente en grandes superficies y locales comerciales. Gestionamos también los sistemas de refrigeración para exhibición y almacenaje de perecederos, cumpliendo normativas sanitarias.' },
];

export const proyectos = [
    {
        id: 'palacio-justicia-calarca',
        icono: 'gavel',
        titulo: 'Palacio de Justicia, Calarcá',
        imagen: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
        altPrefix: 'Palacio de Justicia de Calarcá',
        carrusel: [justicia1, justicia2, justicia3, justicia4, justicia5],
        descripcion: 'Sistema HVAC integral para el Complejo Judicial de Calarcá (Quindío): climatización VRF LG, ventilación mecánica en baterías sanitarias y extracción automatizada de CO en parqueaderos, con ductería fabricada en nuestra planta TECNICONDUCTOS.',
        detalle: {
            parrafos: [
                'CUSTOM Ventilación, Aire Acondicionado y Refrigeración participó en el desarrollo del sistema HVAC del Complejo Judicial de Calarcá, Quindío, una edificación destinada al funcionamiento de juzgados, salas de audiencias y dependencias administrativas del Consejo Superior de la Judicatura.',
                'El proyecto fue diseñado para proporcionar ambientes confortables, seguros y eficientes mediante la implementación de soluciones de climatización y ventilación de alto desempeño, garantizando el cumplimiento de los requerimientos de confort térmico, calidad del aire interior y eficiencia operativa.',
            ],
            alcance: [
                'Suministro e instalación del sistema de aire acondicionado tipo VRF marca LG.',
                'Instalación del sistema de ventilación mecánica en baterías sanitarias, garantizando el control permanente de olores y una adecuada renovación de aire.',
                'Instalación del sistema de extracción automatizada para parqueaderos, equipado para el control de concentraciones de monóxido de carbono (CO).',
                'Fabricación e instalación de ductería HVAC desarrollada en nuestra planta especializada TECNICONDUCTOS (Bogotá).',
            ],
            info: [
                { label: 'Cliente / Propietario', valor: 'Consejo Superior de la Judicatura' },
                { label: 'Contratista Principal', valor: 'Consorcio AMSI' },
                { label: 'Ubicación', valor: 'Calarcá, Quindío – Colombia' },
                { label: 'Año de ejecución', valor: '2017' },
            ],
        },
    },
    {
        id: 'biblioteca-piloto-medellin',
        icono: 'local_library',
        titulo: 'Biblioteca Pública Piloto de Medellín',
        imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
        altPrefix: 'Biblioteca Pública Piloto de Medellín',
        carrusel: [biblioteca1, biblioteca2, biblioteca3, biblioteca4, biblioteca5],
        descripcion: 'Solución integral de climatización y ventilación para la Biblioteca Pública Piloto Sede Carlos E. Restrepo, basada en tecnología VRV DAIKIN con control centralizado vía IP y ventilación para subestación eléctrica Soler & Palau.',
        detalle: {
            parrafos: [
                'La Biblioteca Pública Piloto Sede Carlos E. Restrepo de Medellín, una de las instituciones culturales más emblemáticas de Colombia y referente nacional en preservación del conocimiento, requirió una solución integral de climatización y ventilación que garantizara el confort de sus usuarios, protegiera sus espacios y respetara la arquitectura del edificio.',
                'Para atender este desafío, se desarrolló un sistema HVAC de alta eficiencia basado en tecnología VRV marca DAIKIN, complementado con soluciones de automatización y ventilación mecánica que optimizan el desempeño energético, mejoran la Calidad del Aire Interior (IAQ) y proporcionan un control inteligente de toda la infraestructura.',
                'Uno de los principales diferenciadores del proyecto fue el ajuste del diseño HVAC realizado por el equipo de ingeniería de CUSTOM, permitiendo adaptar la solución a las condiciones arquitectónicas y funcionales de la edificación sin comprometer su valor patrimonial.',
                'La implementación de un sistema de control centralizado vía IP permitió monitorear y administrar en tiempo real todos los equipos de climatización desde una plataforma única, facilitando la operación, el mantenimiento y la eficiencia del sistema.',
                'Como complemento, se diseñó e instaló un sistema de ventilación para la subestación eléctrica mediante equipos Soler & Palau, automatizado con controladores Full Gauge, garantizando una adecuada disipación térmica y la protección de los equipos eléctricos.',
                'El proyecto incorporó además una solución de integración arquitectónica, personalizando los equipos tipo Cassette 4 Vías con acabado en color negro para armonizar con el diseño interior del museo, preservando la estética del espacio sin afectar el rendimiento del sistema de climatización.',
            ],
            info: [
                { label: 'Propietario', valor: 'Municipio de Medellín – Ministerio de Cultura' },
                { label: 'Contratista Principal', valor: 'Consorcio Construir 21' },
                { label: 'Diseño HVAC', valor: 'Ajustado por CUSTOM' },
                { label: 'Ubicación', valor: 'Medellín, Antioquia – Colombia' },
                { label: 'Año de ejecución', valor: '2018' },
            ],
        },
    },
    {
        id: 'camara-comercio-soacha',
        icono: 'apartment',
        titulo: 'Cámara de Comercio de Bogotá – Sede Soacha',
        imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        altPrefix: 'Cámara de Comercio de Bogotá – Sede Soacha',
        carrusel: [camara1, camara2, camara3, camara4, camara5],
        descripcion: 'Solución integral de climatización VRF Samsung DVM, ventilación mecánica, automatización SIEMENS y presurización de escaleras contra incendio, ejecutada durante la pandemia con continuidad operativa garantizada.',
        detalle: {
            parrafos: [
                'La Cámara de Comercio de Bogotá, entidad privada sin ánimo de lucro encargada de administrar los registros mercantiles, fortalecer el tejido empresarial y promover el desarrollo económico de Bogotá y varios municipios de Cundinamarca, construyó su nueva sede en Soacha como un espacio moderno destinado a la atención de empresarios, emprendedores y ciudadanos.',
                'El proyecto fue desarrollado con el objetivo de proporcionar ambientes confortables, seguros y energéticamente eficientes mediante la implementación de soluciones integrales de climatización, ventilación mecánica y automatización, garantizando altos estándares de confort térmico, Calidad del Aire Interior (IAQ) y seguridad para los ocupantes de la edificación.',
                'La ejecución representó un importante desafío, ya que gran parte de la obra se desarrolló durante la emergencia sanitaria ocasionada por el COVID-19. A pesar de las restricciones y la suspensión temporal del proyecto, el equipo de CUSTOM permaneció en Soacha durante varios meses para garantizar la continuidad de los trabajos, demostrando compromiso, capacidad de adaptación y cumplimiento de los más altos estándares de calidad hasta la entrega final del proyecto.',
            ],
            alcance: [
                'Suministro e instalación del sistema de Aire Acondicionado VRF marca Samsung DVM.',
                'Instalación de sistemas de ventilación mecánica STARLIGHT y Soler & Palau, garantizando una adecuada renovación del aire y altos estándares de Calidad del Aire Interior (IAQ).',
                'Fabricación e instalación de ductería en fibra de vidrio FiberGlass.',
                'Integración de un sistema de automatización y control SIEMENS, permitiendo la supervisión y administración centralizada de los sistemas de climatización y ventilación.',
                'Implementación de un sistema de monitoreo permanente de CO₂ en oficinas, con generación automática de alarmas para preservar condiciones óptimas de calidad del aire.',
                'Diseño e instalación del sistema de presurización automática de escaleras contra incendio, activado desde el panel de detección de incendios para mantener las rutas de evacuación libres de humo durante una emergencia.',
                'Integración de las unidades exteriores con la azotea verde, respetando la arquitectura del edificio y los criterios de sostenibilidad del proyecto.',
            ],
            info: [
                { label: 'Cliente / Propietario', valor: 'Cámara de Comercio de Bogotá' },
                { label: 'Contratista Principal', valor: 'Alianza Civil Soacha' },
                { label: 'Ubicación', valor: 'Soacha, Cundinamarca – Colombia' },
                { label: 'Año de ejecución', valor: '2019 – 2020' },
            ],
        },
    },
    {
        id: 'roche-tenjo',
        icono: 'vaccines',
        titulo: 'Centro Logístico Farmacéutico ROCHE – Tenjo',
        imagen: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop',
        altPrefix: 'Centro Logístico Farmacéutico ROCHE – Tenjo',
        carrusel: [roche1, roche2, roche3, roche4, roche5],
        descripcion: 'Sistema de climatización confiable para el almacenamiento de productos farmacéuticos bajo condiciones controladas de temperatura, ejecutado en menos de 30 días con ductería fabricada en TECNICONDUCTOS Bogotá.',
        detalle: {
            parrafos: [
                'La multinacional farmacéutica ROCHE, líder mundial en investigación y desarrollo de medicamentos y soluciones para el sector salud, requería un sistema de climatización confiable para su nuevo centro logístico destinado al almacenamiento de productos farmacéuticos bajo condiciones controladas de temperatura.',
                'El proyecto fue desarrollado con el objetivo de garantizar la estabilidad de las condiciones ambientales requeridas para la conservación de medicamentos, asegurando un control preciso de la temperatura, eficiencia operativa y confiabilidad del sistema HVAC, elementos fundamentales para la cadena logística del sector farmacéutico.',
                'Uno de los principales desafíos fue el tiempo de ejecución, gracias a la planeación, coordinación y capacidad operativa del equipo de CUSTOM, el proyecto fue desarrollado en menos de 30 días, cumpliendo con los cronogramas establecidos y los altos estándares de calidad exigidos para este tipo de instalaciones.',
                'Como parte de la solución, toda la ductería HVAC fue fabricada en nuestra planta especializada TECNICONDUCTOS Bogotá, garantizando precisión en la fabricación, tiempos de entrega optimizados y un estricto control de calidad durante todo el proceso.',
            ],
            info: [
                { label: 'Cliente Final', valor: 'ROCHE' },
                { label: 'Operador Logístico', valor: 'BOMI' },
                { label: 'Ubicación', valor: 'Tenjo, Cundinamarca – Colombia' },
                { label: 'Año de ejecución', valor: '2022' },
            ],
        },
    },
    {
        id: 'dimar-turbo',
        icono: 'directions_boat',
        titulo: 'Capitanía de Puerto DIMAR – Turbo, Antioquia',
        imagen: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=1200&auto=format&fit=crop',
        altPrefix: 'Capitanía de Puerto DIMAR – Turbo',
        carrusel: [dimar1, dimar2, dimar3, dimar4, dimar5],
        descripcion: 'Solución integral de climatización VRF LG Multi V 5 y ventilación Soler & Palau para infraestructura marítima estratégica, con ductería fabricada en TECNICONDUCTOS Cartagena y diseño adaptado al clima del Caribe colombiano.',
        detalle: {
            parrafos: [
                'La Dirección General Marítima (DIMAR), entidad adscrita al Ministerio de Defensa Nacional, es la autoridad marítima de Colombia, responsable de regular, controlar y garantizar la seguridad de las actividades marítimas, fluviales y portuarias del país.',
                'Para la nueva Capitanía de Puerto de Turbo, se desarrolló una solución integral de climatización y ventilación orientada a garantizar ambientes confortables, seguros y energéticamente eficientes, acordes con las necesidades operativas de una infraestructura estratégica para el desarrollo marítimo y portuario de la región de Urabá.',
                'Este edificio adquiere una importancia especial al convertirse en el centro de vigilancia y control del tráfico marítimo asociado al desarrollo de Puerto Antioquia, uno de los proyectos logísticos más relevantes del país, fortaleciendo la capacidad operativa de la autoridad marítima nacional.',
            ],
            alcance: [
                'Suministro e instalación del sistema de Aire Acondicionado VRF LG Multi V 5.',
                'Instalación de extractores y ventiladores Jet Line de Soler & Palau, garantizando una adecuada ventilación mecánica y renovación del aire.',
                'Fabricación e instalación de la ductería HVAC, fabricada en nuestra planta especializada TECNICONDUCTOS (Cartagena).',
                'Desarrollo de una solución HVAC diseñada para operar de manera eficiente en las condiciones climáticas de alta temperatura y humedad propias de la región del Caribe colombiano.',
            ],
            info: [
                { label: 'Cliente / Propietario', valor: 'Ministerio de Defensa Nacional – Dirección General Marítima (DIMAR)' },
                { label: 'Contratista Principal', valor: 'UT Golfo de Urabá' },
                { label: 'Ubicación', valor: 'Turbo, Antioquia – Colombia' },
                { label: 'Año de ejecución', valor: '2023' },
            ],
        },
    },
    {
        id: 'centro-adulto-mayor-bogota',
        icono: 'volunteer_activism',
        titulo: 'Unidad Operativa de Atención al Adulto Mayor El Camino – Bogotá',
        imagen: 'https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=1200&auto=format&fit=crop',
        altPrefix: 'Unidad Operativa de Atención al Adulto Mayor El Camino – Bogotá',
        carrusel: [], // sin carrusel por ahora
        descripcion: 'Ingeniería en ventilación mecánica para la infraestructura social más grande de Bogotá destinada a la atención integral del adulto mayor, con extractores CFP Soler & Palau, CASALS y ductería metálica TECNICONDUCTOS.',
        detalle: {
            parrafos: [
                'La Secretaría Distrital de Integración Social, entidad de la Alcaldía Mayor de Bogotá, lidera programas orientados a la protección, inclusión y bienestar de las poblaciones más vulnerables. Como parte de este compromiso, desarrolló el Centro de Atención para Personas Mayores en Condición de Calle, considerado la infraestructura social más grande de Bogotá para la atención integral de esta población.',
                'El complejo reúne servicios de Centro Vida, Centro Día y Centro de Protección, ofreciendo espacios destinados al cuidado, atención médica, alimentación, acompañamiento psicosocial y actividades de bienestar para personas mayores, bajo condiciones que priorizan la seguridad, el confort y la salud.',
                'Para responder a las exigencias de este proyecto, se implementó una solución integral de ventilación mecánica diseñada para garantizar una adecuada renovación del aire, la extracción eficiente en áreas críticas y condiciones ambientales óptimas para usuarios, personal asistencial y visitantes.',
                'El sistema incorpora extractores CFP de Soler & Palau, extractores de cocina CASALS, campanas de extracción y una red de ductería metálica diseñada para asegurar un funcionamiento eficiente, confiable y acorde con las necesidades operativas de la edificación.',
                'Como parte del valor agregado del proyecto, toda la ductería metálica fue fabricada en nuestra planta especializada TECNICONDUCTOS (Bogotá), garantizando altos estándares de calidad, precisión en la fabricación y un estricto control durante todo el proceso constructivo.',
            ],
            info: [
                { label: 'Propietario', valor: 'Alcaldía Mayor de Bogotá – Secretaría Distrital de Integración Social' },
                { label: 'Contratista Principal', valor: 'Consorcio Bacatá' },
                { label: 'Ubicación', valor: 'Bogotá D.C. – Colombia' },
                { label: 'Año de ejecución', valor: '2024' },
            ],
        },
    },
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
        descripcion: 'Diseñamos sistemas de inyección, extracción y renovación de aire que garantizan ambientes seguros, libres de contaminantes y con la calidad de aire que cada espacio exige.',
    },
    {
        id: 'aire-acondicionado',
        tag: 'Pilar 02',
        icono: 'ac_unit',
        titulo: 'Aire Acondicionado',
        descripcion: 'Climatización de precisión y confort térmico para todo tipo de inmueble, con equipos de alta eficiencia que reducen el consumo energético de forma medible.',
    },
    {
        id: 'refrigeracion',
        tag: 'Pilar 03',
        icono: 'severe_cold',
        titulo: 'Refrigeración',
        descripcion: 'Aseguramos estabilidad térmica y continuidad de la cadena de frío en cámaras, CEDIS y procesos industriales donde no hay margen de error.',
    },
];

export const industriasFormulario = [
    'Industria y Manufactura',
    'Educativo',
    'Restaurantes',
    'Centros de Datos',
    'VAR',
    'Oficinas y Edificios',
    'Hospitales',
    'Hoteles',
    'Locales y Centros Comerciales',
];
