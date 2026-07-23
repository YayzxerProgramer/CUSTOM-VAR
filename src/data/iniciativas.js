import eslam1 from '../img/iniciativas/eslam1.jpeg';
import eslam2 from '../img/iniciativas/eslam2.jpeg';
import beisbol1 from '../img/iniciativas/beisbol1.jpeg';
import beisbol2 from '../img/iniciativas/beisbol2.jpeg';
import beisbol3 from '../img/iniciativas/beisbol3.jpeg';

export const pilaresIniciativas = [
    {
        id: 'cultura-deporte',
        titulo: 'Clima para la Cultura y el Deporte',
        icono: 'diversity_3',
        color: '#DB2D2C',
        soft: 'rgba(219,45,44,.1)',
        ods: 'ODS 3 y 10',
        texto:
            'Impulsamos el bienestar social apoyando iniciativas externas de danzas y deportes, ofreciendo alternativas de vida saludables para la juventud.',
    },
    {
        id: 'regiones',
        titulo: 'Clima para las Regiones',
        icono: 'school',
        color: '#2A6FDB',
        soft: 'rgba(42,111,219,.1)',
        ods: 'ODS 4 y 8',
        texto:
            'Profesionalizamos el sector VAR capacitando técnicamente a jóvenes de comunidades vulnerables. Enseñamos «desde el hacer» en cada región, generando empleo local y oportunidades reales de futuro.',
    },
    {
        id: 'planeta',
        titulo: 'Clima para el Planeta',
        icono: 'eco',
        color: '#1DA66B',
        soft: 'rgba(29,166,107,.12)',
        ods: 'ODS 12 y 13',
        texto:
            'Protegemos el medio ambiente mediante la clasificación de residuos en la fuente y nuestra vinculación a la red de reciclaje de refrigerantes, mitigando el impacto ambiental de nuestra operación.',
    },
];

// Texto introductorio del bloque "Iniciativas" (provisto por el cliente).
export const introduccionIniciativas = {
    titulo: 'Iniciativas',
    parrafos: [
        'En CUSTOM Ventilación, Aire Acondicionado y Refrigeración creemos que nuestro propósito va más allá de diseñar e implementar soluciones HVAC, también creemos en generar un impacto positivo en las comunidades donde estamos presentes, apoyando iniciativas que promuevan el desarrollo social, la cultura, el deporte y las nuevas generaciones.',
        'Cada proyecto que realizamos representa una oportunidad para contribuir al crecimiento de nuestra región y respaldar a quienes, con esfuerzo y dedicación, trabajan por alcanzar sus sueños. Nuestro compromiso con la responsabilidad social refleja los valores que nos identifican como empresa: solidaridad, trabajo en equipo, inclusión y construcción de oportunidades.',
        'En CUSTOM entendemos que el verdadero crecimiento empresarial también se mide por el impacto positivo que dejamos en las personas.',
    ],
};

export const iniciativasApoyadas = [
    {
        id: 'eslam-talento',
        categoria: 'Cultura y danza',
        titulo: 'Estrellas Latinoamericanas – ESLAM',
        eslogan: 'Impulsando el talento artístico de nuestra niñez',
        icono: 'music_note',
        fotoTag: 'ESLAM',
        img: eslam1,
        texto:
            'La cultura transforma vidas y fortalece el sentido de pertenencia. Por eso, apoyamos a la Academia de Baile Estrellas Latinoamericanas – ESLAM mediante la donación de un equipo de aire acondicionado rifado en uno de sus eventos artísticos. Con lo recaudado, niños y jóvenes pudieron participar en presentaciones culturales, desarrollar su formación artística y representar con orgullo el talento cartagenero.',
    },
    {
        id: 'beisbol-femenino',
        categoria: 'Deporte femenino',
        titulo: 'Equipo de Béisbol Femenino de Bolívar',
        eslogan: 'Creemos en el poder del deporte femenino',
        icono: 'sports_baseball',
        fotoTag: 'BEISBOL',
        img: beisbol1,
        carrusel: [beisbol1, beisbol2, beisbol3],
        texto:
            'El deporte inspira disciplina, liderazgo y perseverancia. Como parte de nuestro compromiso con la equidad, apoyamos al Equipo de Béisbol Femenino de Bolívar en su participación en el I Campeonato Regional Femenino, realizado en Barranquilla. Con este aporte contribuimos a que las deportistas representaran a su región en una competencia de alto nivel, promoviendo el crecimiento del deporte femenino y respaldando a mujeres que continúan abriendo camino para las nuevas generaciones.',
    },
    {
        id: 'eslam-tradiciones',
        categoria: 'Cultura y tradiciones',
        titulo: 'Estrellas Latinoamericanas – ESLAM',
        eslogan: 'Preservando tradiciones',
        icono: 'celebration',
        fotoTag: 'ESLAM',
        img: eslam2,
        texto:
            'Las Fiestas de Independencia de Cartagena son una de las expresiones culturales más importantes del Caribe colombiano. Para contribuir a su preservación, apoyamos nuevamente a la Academia Estrellas Latinoamericanas – ESLAM y a su comparsa "Cartagena de Indias la Fantástica". Nuestro aporte apoyó traslados y refrigerios de los niños durante el tradicional Bando de las Fiestas, reafirmando nuestro compromiso con la identidad cultural, el trabajo en equipo y la juventud cartagenera.',
    },
];

export const opcionesIniciativa = [
    'Estrellas Latinoamericanas – ESLAM',
    'Equipo de Béisbol Femenino de Bolívar',
    'Fiestas de Independencia de Cartagena',
    'Otra / general',
];
