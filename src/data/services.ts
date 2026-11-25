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
    slug: 'alteracions-en-la-lectura-i-o-escriptura',
    title: 'Alteracions en la lectura i/o escriptura',
    image: '/images/img-1024-768/img-4174-2.jpg',
    alt: 'Imatge Alteracions en la lectura i/o escriptura',
    intro:
      'Tant la lectura com l’escriptura són pilars fonamentals del llenguatge i ens permeten guanyar autonomia. Per tant, és important poder consolidar les seves bases durant l’edat escolar.',
    paragraphs: ['Actualment, es diagnostiquen trastorns de l’aprenentatge referits a la lectoescriptura:'],
    topics: [
      {
        title: 'Dislèxia o dificultats en la lectura',
        description: 'Dificultats per descodificar o reconèixer paraules.',
      },
      {
        title: 'Disortografia',
        description:
          'Dificultats en convertir el fonema (o so) a grafema (o lletra) i en l’aprenentatge de les normes ortogràfiques.',
      },
      {
        title: 'Disgrafia',
        description: 'Dificultats en l’escriptura de les lletres.',
      },
    ],
    gallery: ['img-4174-1.jpg', 'img-0011.jpg', 'img-4163.jpg', 'img-0024.jpg', 'img-4194.jpg'],
  },
  {
    id: 'parla',
    slug: 'alteracions-en-la-parla',
    title: 'Alteracions en la parla',
    image: '/images/img-1024-768/img-4182-3.jpg',
    alt: 'Imatge Alteracions en la parla',
    intro: 'Entenem la parla com l’expressió oral del llenguatge. Quan hi ha alguna alteració en aquest àmbit, parlem de:',
    paragraphs: [],
    topics: [
      {
        title: 'Dislàlia o trastorns dels sons de la parla',
        description:
          'Es coneix com la incapacitat o dificultat d’articulació dels fonemes. Pot ser (o no) a causa d’una alteració anatòmica, i pot referir-se a un fonema o a un grup de fonemes. Per exemple, l’articulació de /s/ o el conjunt del triangle alveolar (/d/, /r/ i /l/).',
      },
      {
        title: 'Retard de la parla',
        description: 'Consisteix en no haver adquirit alguns dels fonemes que es corresponen amb l’edat cronològica.',
      },
      {
        title: 'Disfèmia',
        description: 'Conegut popularment com a tartamudeig.',
      },
    ],
    closing: 'Les alteracions en la parla poden afectar la lectoescriptura, per això és important detectar-les.',
    gallery: ['img-4182-2.jpg', 'img-0055.jpg', 'img-0063.jpg'],
  },
  {
    id: 'veu',
    slug: 'alteracions-en-la-veu',
    title: 'Alteracions en la veu',
    image: '/images/img-1024-768/img-0119-2.jpg',
    alt: 'Imatge Alteracions en la veu',
    intro:
      'Entenem per veu el so que es produeix a la laringe en vibrar les cordes vocals gràcies al pas de l’aire que ve dels pulmons. Per tant, la veu és un engranatge. Quantes vegades al dia utilitzem la nostra veu?',
    paragraphs: [
      'Les alteracions de la veu venen donades per lesions com ara nòduls, pòlips, quists, edemes, sulcus, vergetures… o bé poden ser causades per fatiga vocal, entre altres factors, sense la presència d’una lesió.',
      'Les lesions es classifiquen en congènites (quan apareixen des del naixement) o adquirides (quan apareixen més tard). En aquest últim cas, hi ha professionals que tenen més risc de patir-ne. Com per exemple docents, cantants i actors, o comercials de venda; ja que utilitzen la veu moltes hores durant el dia.',
      'Tenir una veu còmoda, amb la qual ens sentim identificats i que ens permeti fer tot el que necessitem, és molt important per a comunicar-nos.',
    ],
    gallery: ['img-0119-3.jpg', 'img-0181.jpg', 'img-0165.jpg'],
  },
  {
    id: 'deglucio',
    slug: 'deglucio-atipica',
    title: 'Deglució atípica',
    image: '/images/img-1024-768/img-9842.jpg',
    alt: 'Imatge Deglució atípica',
    intro:
      'La deglució és l’acció d’empassar, tenint en compte els passos previs i posteriors d’aquest acte.',
    paragraphs: [
      'L’anomenem atípica quan es produeix una incorrecta col·locació de la musculatura orofacial i la postura. En la majoria de casos, la llengua, per diferents motius, adopta un patró inadequat que interfereix en l’eficàcia i seguretat de la deglució.',
      'A més, aquest mal hàbit pot tenir conseqüències directes en la respiració, la posició dentària i el son.',
    ],
    gallery: ['img-9842-2.jpg', 'img-9872.jpg', 'img-9874.jpg', 'img-9854.jpg'],
  },
  {
    id: 'llenguatge',
    slug: 'trastorns-del-llenguatge',
    title: 'Trastorns del llenguatge',
    image: '/images/img-1024-768/img-9931-2.jpg',
    alt: 'Imatge Trastorns del llenguatge',
    intro:
      'Entenem per llenguatge el pensament estructurat que ens permet comunicar-nos. Si és llenguatge oral, és a través de la parla; però també pot ser mitjançant l’ús d’altres sistemes augmentatius i/o alternatius, com ara els pictogrames.',
    paragraphs: [
      'Quan apareixen problemes en l’adquisició del llenguatge oral, d’entrada es manifesten com un retard de la parla; però si persisteixen fins a l’edat adulta parlem d’un trastorn del neurodesenvolupament anomenat trastorn del llenguatge.',
      'També podem trobar trastorns del llenguatge a conseqüència de Trastorns de l’Espectre Autista (TEA) i en altres síndromes o malformacions del sistema nerviós.',
    ],
    gallery: ['img-9931-3.jpg', 'img-9935.jpg', 'img-0071.jpg'],
  },
];
