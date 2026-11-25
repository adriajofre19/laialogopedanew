export type ServiceTopic = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  image: string;
  alt: string;
  intro: string;
  paragraphs: string[];
  topics?: ServiceTopic[];
  closing?: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    id: 'lectoescriptura',
    slug: 'alteraciones-en-la-lectura-y-o-escritura',
    title: 'Alteraciones en la lectura y/o escritura',
    image: '/images/img-1024-768/img-4174-2.jpg',
    alt: 'Imagen Alteraciones en la lectura y/o escritura',
    intro:
      'Tanto la lectura como la escritura son pilares fundamentales del lenguaje y nos permiten ganar autonomía. Por tanto, es importante poder consolidar sus bases durante la edad escolar.',
    paragraphs: ['Actualmente, se diagnostican trastornos del aprendizaje referidos a la lectoescritura:'],
    topics: [
      {
        title: 'Dislexia o dificultades en la lectura',
        description: 'Dificultades por decodificar o reconocer palabras.',
      },
      {
        title: 'Disortografía',
        description:
          'Dificultades en convertir el fonema (o sonido) en grafema (o letra) y en el aprendizaje de las normas ortográficas.',
      },
      {
        title: 'Disgrafía',
        description: 'Dificultades en la escritura de las letras.',
      },
    ],
    gallery: ['img-4174-1.jpg', 'img-0011.jpg', 'img-4163.jpg', 'img-0024.jpg', 'img-4194.jpg'],
  },
  {
    id: 'parla',
    slug: 'alteraciones-en-el-habla',
    title: 'Alteraciones en el habla',
    image: '/images/img-1024-768/img-4182-3.jpg',
    alt: 'Imagen Alteraciones en el habla',
    intro: 'Entendemos el habla como la expresión oral del lenguaje. Cuando existe alguna alteración en este ámbito, hablamos de:',
    paragraphs: [],
    topics: [
      {
        title: 'Dislalia o trastornos de los sonidos del habla',
        description:
          'Se conoce como la incapacidad o dificultad de articulación de los fonemas. Puede ser (o no) a causa de una alteración anatómica y puede referirse a un fonema o a un grupo de fonemas. Por ejemplo, la articulación de la /s/ o el conjunto del triángulo alveolar ( /d/, /r/ y /l/).',
      },
      {
        title: 'Retraso del habla',
        description: 'Consiste en no haber adquirido algunos de los fonemas que se corresponderían por edad cronológica.',
      },
      {
        title: 'Disfemia',
        description: 'Conocida popularmente como tartamudez.',
      },
    ],
    closing: 'Las alteraciones en el habla pueden afectar la lectoescriptura, por lo que es importante detectarlas.',
    gallery: ['img-4182-2.jpg', 'img-0055.jpg', 'img-0063.jpg'],
  },
  {
    id: 'veu',
    slug: 'alteraciones-en-la-voz',
    title: 'Alteraciones en la voz',
    image: '/images/img-1024-768/img-0119-2.jpg',
    alt: 'Imagen Alteraciones en la voz',
    intro:
      'Entendemos por voz el sonido que se produce en la laringe al vibrar las cuerdas vocales gracias al paso del aire que viene de los pulmones. Por lo tanto, la voz es un engranaje. ¿Cuántas veces al día utilizamos nuestra voz?',
    paragraphs: [
      'Las alteraciones de la voz vienen dadas por lesiones como nódulos, pólipos, quistes, edemas, sulcus, estrías… o bien pueden estar causadas por fatiga vocal, entre otros factores, sin la presencia de una lesión.',
      'Las lesiones se clasifican en congénitas (cuando aparecen desde el nacimiento) o adquiridas (cuando aparecen más tarde). En este último caso, hay profesionales que tienen más riesgo de padecerlas. Como, por ejemplo, docentes, cantantes y actores, o comerciales de ventas; ya que utilizan la voz muchas horas durante el día.',
      'Tener una voz cómoda, con la que nos sintamos identificados y que nos permita hacer todo lo que necesitamos, es muy importante para comunicarnos.',
    ],
    gallery: ['img-0119-3.jpg', 'img-0181.jpg', 'img-0165.jpg'],
  },
  {
    id: 'deglucio',
    slug: 'deglucion-atipica',
    title: 'Deglución atípica',
    image: '/images/img-1024-768/img-9842.jpg',
    alt: 'Imagen Deglución atípica',
    intro:
      'La deglución es la acción de tragar, teniendo en cuenta los pasos previos y posteriores a este acto.',
    paragraphs: [
      'La denominamos atípica cuando se produce una incorrecta colocación de la musculatura orofacial y la postura. En la mayoría de los casos, la lengua, por diferentes motivos, adopta un patrón inadecuado que interfiere en la eficacia y seguridad de la deglución.',
      'Además, este mal hábito puede tener consecuencias directas en la respiración, la posición dentaria y el sueño.',
    ],
    gallery: ['img-9842-2.jpg', 'img-9872.jpg', 'img-9874.jpg', 'img-9854.jpg'],
  },
  {
    id: 'llenguatge',
    slug: 'trastornos-del-lenguaje',
    title: 'Trastornos del lenguaje',
    image: '/images/img-1024-768/img-9931-2.jpg',
    alt: 'Imagen Trastornos del lenguaje',
    intro:
      'Entendemos por lenguaje el pensamiento estructurado que nos permite comunicarnos. Si es lenguaje oral, es a través del habla; pero también puede ser mediante el uso de otros sistemas aumentativos y/o alternativos, como los pictogramas.',
    paragraphs: [
      'Cuando aparecen problemas en la adquisición del lenguaje oral, en un primer momento, se manifiestan como un retraso en el habla; pero si persisten hasta la edad adulta hablamos de un trastorno en el neurodesarrollo llamado trastorno del lenguaje.',
      'También podemos encontrar trastornos del lenguaje como consecuencia de Trastornos del Espectro Autista (TEA) y de otros síndromes o malformaciones del sistema nervioso.',
    ],
    gallery: ['img-9931-3.jpg', 'img-9935.jpg', 'img-0071.jpg'],
  },
];
