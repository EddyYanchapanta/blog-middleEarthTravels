import { ICategory } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

export const categoria: ICategory[] = [
  {
    id: 1,
    titulo: 'Festival',
  },
  {
    id: 2,
    titulo: 'Playa',
  },
  {
    id: 3,
    titulo: 'Montaña',
  },
  {
    id: 4,
    titulo: 'Ciudad',
  },
  {
    id: 5,
    titulo: 'Rural',
  },
];

export const posts: Post[] = [
  {
    id: 1,
    titulo: 'Bilbo Baggins Birthday',
    texto:
      'La fiesta de despedida de Bilbo fue una gran celebración organizada por Bilbo Baggins en su 111.º cumpleaños en el Campo de Fiestas, el 22 de septiembre de TA 3001',
    autor: 'Frodo Baggins',
    imagen: 'https://static.wikia.nocookie.net/lotr/images/3/36/Xtra17.jpg',
    fecha: new Date('2023/10/01'),
    categoria: {
      id: 1,
      titulo: 'Festival',
    },
  },
  {
    id: 2,
    titulo: 'Pelargir',
    texto:
      'Es una gran ciudad portuaria de Gondor, en la región de Lebennin, ubicada en la confluencia del río Sirith con el Anduin, muy cerca de la desembocadura',
    autor: 'Imrahil',
    imagen:
      'https://perdidosenlatierramedia.wordpress.com/wp-content/uploads/2015/06/pelargir-docks-heirs-of-numenor.png',
    fecha: new Date('2024-10-01'),
    categoria: {
      id: 2,
      titulo: 'Playa',
    },
  },
  {
    id: 3,
    titulo: 'Erebor',
    texto:
      'Se trata de una elevación aislada situada al noreste de Rhovanion, que fue arrebatada por un dragón, llamado Smaug, al rey Thrór de los enanos.',
    autor: 'Bilbo Baggins',
    imagen:
      'https://s.libertaddigital.com/fotos/noticias/1920/1080/fit/montanasolitaria.jpg',
    fecha: new Date('2007-10-01'),
    categoria: {
      id: 3,
      titulo: 'Montaña',
    },
  },
  {
    id: 4,
    titulo: 'Valmar',
    texto:
      'Situada en las faldas de Taniquetil, y es donde los Vanyar y los Valar residen. Otras ciudades son Alqualondë, Tirion y Avallónë, los respectivos hogares de los Teleri y los Noldor.',
    autor: 'Galadriel',
    imagen:
      'https://hips.hearstapps.com/hmg-prod/images/el-senor-de-los-anillos-2022-1662474209.jpeg',
    fecha: new Date('1995-10-01'),
    categoria: {
      id: 4,
      titulo: 'Ciudad',
    },
  },
  {
    id: 5,
    titulo: 'The Shire',
    texto:
      'Se encuentra, a su vez, dentro de la gran región de Eriador, donde anteriormente existió el reino de Arnor. Está poblada exclusivamente por hobbits, una raza emparentada con los hombres y caracterizada por su baja estatura.[',
    autor: 'Bilbo Baggins',
    imagen: 'https://i.blogs.es/865375/hobbiton/500_333.jpeg',
    fecha: new Date('2015-10-01'),
    categoria: {
      id: 5,
      titulo: 'Rural',
    },
  },
  {
    id: 6,
    titulo: 'Coronación de Elessar',
    texto:
      'Tras la derrota de Sauron, Aragorn fue coronado como el rey Elessar (un nombre quenya que Galadriel le dio, traducido como Piedra de Elfo), y se casó con Arwen poco después. Se convirtió en el vigésimo sexto rey de Arnor, trigésimo quinto rey de Gondor y el primer gran rey del Reino Unificado de Gondor y Arnor.',
    autor: 'Frodo Baggins',
    imagen:
      'https://prod.assets.earlygamecdn.com/images/What-Happened-To-Each-Member-Of-The-Fellowship-After-The-Lord-of-the-Rings-Aragorn-Coronation.PNG',
    fecha: new Date('2014-10-01'),
    categoria: {
      id: 1,
      titulo: 'Festival',
    },
  },
  {
    id: 7,
    titulo: 'Losgar',
    texto:
      'Situada al noroeste de la Tierra Media, entre las Ered Lómin, el estuario del Drengist y el Belegaer. Los vientos agrestes de Ered Lómin, de las más lejanas Ered Engrin y de Helcaraxë mantenían a Lammoth sin precipitaciones y tan yermo y sin vegetación ni otro tipo de vida que sus barrancos y acantilados producían eco de puro vacíos.',
    autor: 'Maedhros',
    imagen:
      'https://tolkiengateway.net/w/images/thumb/9/9b/Ted_Nasmith_-_The_Burning_of_the_Ships.jpg/375px-Ted_Nasmith_-_The_Burning_of_the_Ships.jpg',
    fecha: new Date('2009-10-01'),
    categoria: {
      id: 2,
      titulo: 'Playa',
    },
  },
  {
    id: 8,
    titulo: 'Gondolin',
    texto:
      'Ciudad secreta de los noldor de la Primera Edad fundada por Turgon, el segundo hijo de Fingolfin, en las montañas Circundantes, al norte de Beleriand. Se calcula que llegó a tener una población de cuarenta mil habitantes, deducida de la hueste de diez mil elfos enviados a la Nírnaeth Arnoediad.',
    autor: 'Thorondor',
    imagen:
      'https://vignette.wikia.nocookie.net/tolkien/images/9/9d/Gondolin_by_spartank42.jpg/revision/latest?cb=20180716135444&path-prefix=it',
    fecha: new Date('1998-11-01'),
    categoria: {
      id: 4,
      titulo: 'Ciudad',
    },
  },
];
