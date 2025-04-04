import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

export const categoria: Category[] = [
  {
    id: 1,
    Titulo: 'Festival',
  },
  {
    id: 2,
    Titulo: 'Playa',
  },
  {
    id: 3,
    Titulo: 'Montaña',
  },
  {
    id: 4,
    Titulo: 'Ciudad',
  },
  {
    id: 5,
    Titulo: 'Rural',
  },
];

export const post: Post[] = [
  {
    id: 1,
    Titulo: 'Bilbo Birthday',
    texto:
      'La fiesta de despedida de Bilbo fue una gran celebración organizada por Bilbo Baggins en su 111.º cumpleaños en el Campo de Fiestas, el 22 de septiembre de TA 3001',
    autor: 'Frodo Baggins',
    imagen: 'https://static.wikia.nocookie.net/lotr/images/3/36/Xtra17.jpg',
    fecha: new Date('2023/10/01'),
    categoria: {
      id: 1,
      Titulo: 'Festival',
    },
  },
  {
    id: 2,
    Titulo: 'Pelargir',
    texto:
      'Es una gran ciudad portuaria de Gondor, en la región de Lebennin, ubicada en la confluencia del río Sirith con el Anduin, muy cerca de la desembocadura',
    autor: 'Imrahil',
    imagen:
      'https://perdidosenlatierramedia.wordpress.com/wp-content/uploads/2015/06/pelargir-docks-heirs-of-numenor.png',
    fecha: new Date('2024-10-01'),
    categoria: {
      id: 2,
      Titulo: 'Playa',
    },
  },
  {
    id: 3,
    Titulo: 'Erebor',
    texto:
      'Se trata de una elevación aislada situada al noreste de Rhovanion, que fue arrebatada por un dragón, llamado Smaug, al rey Thrór de los enanos.',
    autor: 'Bilbo Baggins',
    imagen:
      'https://s.libertaddigital.com/fotos/noticias/1920/1080/fit/montanasolitaria.jpg',
    fecha: new Date('2007-10-01'),
    categoria: {
      id: 3,
      Titulo: 'Montaña',
    },
  },
  {
    id: 4,
    Titulo: 'Valmar',
    texto:
      'Situada en las faldas de Taniquetil, y es donde los Vanyar y los Valar residen. Otras ciudades son Alqualondë, Tirion y Avallónë, los respectivos hogares de los Teleri y los Noldor.',
    autor: 'Galadriel',
    imagen:
      'https://hips.hearstapps.com/hmg-prod/images/el-senor-de-los-anillos-2022-1662474209.jpeg',
    fecha: new Date('1995-10-01'),
    categoria: {
      id: 4,
      Titulo: 'Ciudad',
    },
  },
  {
    id: 5,
    Titulo: 'The Shire',
    texto:
      'Se encuentra, a su vez, dentro de la gran región de Eriador, donde anteriormente existió el reino de Arnor. Está poblada exclusivamente por hobbits, una raza emparentada con los hombres y caracterizada por su baja estatura.[',
    autor: 'Bilbo Baggins',
    imagen: 'https://i.blogs.es/865375/hobbiton/500_333.jpeg',
    fecha: new Date('2015-10-01'),
    categoria: {
      id: 5,
      Titulo: 'Rural',
    },
  },
];
