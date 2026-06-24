const perfumes = [
  {
    id: 1,
    nombre: "Miss Dior",
    marca: "Dior",
    categoria: "Floral",
    precio: 7990,
    stock: 10,
    descripcion: "Miss Dior Eau de Parfum (2021) de Dior es una fragancia de la familia olfativa Oriental Floral para Mujeres. Miss Dior Eau de Parfum (2021) se lanzó en 2021. La Nariz detrás de esta fragrancia es François Demachy. Las Notas de Salida son iris, peonía y lirio de los valles (muguete); las Notas de Corazón son rosa, chabacano y durazno (melocotón); las Notas de Fondo son vainilla, almizcle, haba tonka, sándalo y benjuí.",
    imagen: "https://images.pexels.com/photos/28720745/pexels-photo-28720745.jpeg?_gl=1*jo88v*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTc2MDQkajQzJGwwJGgw"
  },

  {
    id: 2,
    nombre: "J'adore",
    marca: "Dior",
    categoria: "Floral",
    precio: 8490,
    stock: 8,
    descripcion: "J'adore de Dior es una fragancia de la familia olfativa Floral Frutal para Mujeres. Notas de Salida son pera, melón, magnolia, durazno (melocotón), mandarina y bergamota; las Notas de Corazón son jazmín, lirio de los valles (muguete), nardos, fresia, rosa, orquídea, violeta y ciruela; las Notas de Fondo son almizcle, vainilla, cedro y zarzamora (frambuesa negra).",
    imagen: "https://images.pexels.com/photos/17945897/pexels-photo-17945897.jpeg?_gl=1*ad2frp*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTY1NzgkajQyJGwwJGgw"
  },

  {
    id: 3,
    nombre: "Libre",
    marca: "Yves Saint Laurent",
    categoria: "Floral",
    precio: 7290,
    stock: 12,
    descripcion: "Libre Flowers & Flames de Yves Saint Laurent es una fragancia de la familia olfativa Floral para Mujeres. Esta fragrancia es nueva. Libre Flowers & Flames se lanzó en 2024. Las Notas de Salida son lavanda y bergamota; las Notas de Corazón son flor de azahar del naranjo, lavanda, coco, azucena y palmera; la Nota de Fondo es vainilla.",
    imagen: "https://images.pexels.com/photos/8981521/pexels-photo-8981521.jpeg?_gl=1*12xv7fi*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTc0OTUkajI5JGwwJGgw"
  },

  {
    id: 4,
    nombre: "Black Opium",
    marca: "Yves Saint Laurent",
    categoria: "Dulce",
    precio: 7590,
    stock: 9,
    descripcion: "Black Opium de Yves Saint Laurent es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Creada por Nathalie Lorson, Marie Salamagne, Olivier Cresp. Notas de Salida son pera, pimienta rosa y flor de azahar del naranjo; las Notas de Corazón son café, jazmín, almendra amarga y regaliz; las Notas de Fondo son vainilla, pachulí, madera de cachemira y cedro.",
    imagen: "https://images.pexels.com/photos/30405425/pexels-photo-30405425.jpeg"
  },

  {
    id: 5,
    nombre: "Good Girl",
    marca: "Carolina Herrera",
    categoria: "Dulce",
    precio: 6990,
    stock: 15,
    descripcion: "Good Girl de Carolina Herrera es una fragancia de la familia olfativa Oriental Floral para Mujeres. Notas de Salida son almendra, café, bergamota y limón; las Notas de Corazón son nardos, jazmín sambac, flor de azahar del naranjo, rosa de Bulgaria y raíz de lirio; las Notas de Fondo son haba tonka, cacao, vainilla, praliné, sándalo, almizcle, ámbar, madera de cachemira, pachulí, canela y cedro.",
    imagen: "https://floward.imgix.net/web/Files/thumPro/6a334e64-592b-4ae4-abcc-590c96c16a8f.jpg"
  },

  {
    id: 6,
    nombre: "Very Good Girl",
    marca: "Carolina Herrera",
    categoria: "Frutal",
    precio: 7490,
    stock: 10,
    descripcion: "Very Good Girl de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. Very Good Girl se lanzó en 2021. Very Good Girl fue creada por Quentin Bisch, Louise Turner y Shyamala Maisondieu. Las Notas de Salida son lichi y grosella roja; la Nota de Corazón es rosa; las Notas de Fondo son vainilla y vetiver.",
    imagen: "https://www.perfumerianormy.com.ar/wp-content/uploads/2023/02/Diseno-sin-titulo-15.png"
  },

  {
    id: 7,
    nombre: "Coco Mademoiselle",
    marca: "Chanel",
    categoria: "Floral",
    precio: 9490,
    stock: 6,
    descripcion: "Coco Mademoiselle de Chanel es una fragancia Oriental Floral para Mujeres. Las Notas de Salida son naranja, mandarina, bergamota y flor de azahar del naranjo; las Notas de Corazón son rosa turca, jazmín, mimosa y ylang-ylang; las Notas de Fondo son pachulí, almizcle blanco, vainilla, vetiver, haba tonka y opopónaco.",
    imagen: "https://images.pexels.com/photos/13380130/pexels-photo-13380130.jpeg?_gl=1*1wg302t*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTc4OTMkajI1JGwwJGgw"
  },

  {
    id: 8,
    nombre: "Chance Eau Tendre",
    marca: "Chanel",
    categoria: "Frutal",
    precio: 8990,
    stock: 7,
    descripcion: "Chance Eau Tendre de Chanel es una fragancia de la familia olfativa Floral Frutal para Mujeres. Chance Eau Tendre se lanzó en 2010. La Nariz detrás de esta fragrancia es Jacques Polge. Las Notas de Salida son membrillo y toronja (pomelo); las Notas de Corazón son jacinto y jazmín; las Notas de Fondo son almizcle, iris, cedro de Virginia y ámbar.",
    imagen: "https://images.pexels.com/photos/20591858/pexels-photo-20591858.jpeg"
  },

  {
    id: 9,
    nombre: "Sauvage",
    marca: "Dior",
    categoria: "Masculino",
    precio: 7990,
    stock: 14,
    descripcion: "Sauvage de Dior es una fragancia de la familia olfativa Aromática Fougère para Hombres. La Nariz detrás de esta fragrancia es François Demachy. Las Notas de Salida son bergamota de Calabria y pimienta; las Notas de Corazón son pimienta de Sichuan, lavanda, pimienta rosa, vetiver, pachulí, geranio y elemí; las Notas de Fondo son ambroxan, cedro y ládano.",
    imagen: "https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg"
  },

  {
    id: 10,
    nombre: "Bleu de Chanel",
    marca: "Chanel",
    categoria: "Masculino",
    precio: 9290,
    stock: 8,
    descripcion: "Bleu de Chanel Eau de Parfum de Chanel es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Bleu de Chanel Eau de Parfum se lanzó en 2014. Las Notas de Salida son toronja (pomelo), limón (lima ácida), menta, bergamota, pimienta rosa, aldehídos y cilantro; las Notas de Corazón son jengibre, nuez moscada, jazmín y melón; las Notas de Fondo son incienso, ámbar, cedro, sándalo, Amberwood, pachulí y ládano.",
    imagen: "https://images.pexels.com/photos/9202888/pexels-photo-9202888.jpeg"
  },

  {
    id: 11,
    nombre: "Invictus",
    marca: "Paco Rabanne",
    categoria: "Masculino",
    precio: 6790,
    stock: 12,
    descripcion: "Invictus de Rabanne es una fragancia de la familia olfativa Amaderada Acuática para Hombres. Las Notas de Salida son notas marinas, toronja (pomelo) y mandarina; las Notas de Corazón son hoja de laurel y jazmín; las Notas de Fondo son ámbar gris, madera de gaiac, musgo de roble y pachulí.",
    imagen: "https://farmalife.vtexassets.com/arquivos/ids/194749-1200-auto?v=638786164549570000&width=1200&height=auto&aspect=true"
  },

  {
    id: 12,
    nombre: "1 Million",
    marca: "Paco Rabanne",
    categoria: "Masculino",
    precio: 7190,
    stock: 10,
    descripcion: "1 Million Parfum de Rabanne es una fragancia de la familia olfativa Cuero para Hombres. 1 Million Parfum se lanzó en 2020. 1 Million Parfum fue creada por Quentin Bisch, Christophe Raynaud y Sonia Constant. La fragrancia contiene nardos, notas solares, sal, aceite de Monoi, ámbar gris, cuero, cachemira, ládano y pino.",
    imagen: "https://images.pexels.com/photos/19272234/pexels-photo-19272234.jpeg?_gl=1*rlmygc*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTcxNzQkajIyJGwwJGgw"
  },

  {
    id: 13,
    nombre: "Le Male Le Parfum",
    marca: "Jean Paul Gaultier",
    categoria: "Masculino",
    precio: 7490,
    stock: 9,
    descripcion: "Le Male de Jean Paul Gaultier es una fragancia de la familia olfativa Oriental Fougère para Hombres. Notas de Salida son lavanda, menta, cardamomo, bergamota y abrótano; las Notas de Corazón son canela, flor de azahar del naranjo y alcaravea; las Notas de Fondo son vainilla, haba tonka, ámbar, sándalo y cedro.",
    imagen: "https://images.pexels.com/photos/14466492/pexels-photo-14466492.jpeg?_gl=1*1xrco4j*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTY5MDEkajUkbDAkaDA."
  },

  {
    id: 14,
    nombre: "Acqua di Giò Profondo",
    marca: "Giorgio Armani",
    categoria: "Masculino",
    precio: 8290,
    stock: 8,
    descripcion: "Acqua di Giò Profondo de Giorgio Armani es una fragancia de la familia olfativa Aromática Fougère para Hombres. Notas de Salida son notas marinas, Aquozone, bergamota y mandarina verde; las Notas de Corazón son romero, lavanda, ciprés y resina almáciga del lentisco; las Notas de Fondo son Notas minerales, almizcle, pachulí y ámbar.",
    imagen: "https://images.pexels.com/photos/31132401/pexels-photo-31132401.jpeg?_gl=1*1sy4l2b*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTcwMjQkajE5JGwwJGgw"
  },

  {
    id: 15,
    nombre: "Stronger With You Intensely",
    marca: "Emporio Armani",
    categoria: "Amaderado",
    precio: 7890,
    stock: 11,
    descripcion: "Emporio Armani Because It’s You de Giorgio Armani es una fragancia de la familia olfativa Floral Frutal para Mujeres. Emporio Armani Because It’s You. Notas de Salida son frambuesa, limón (lima ácida) y neroli; la Nota de Corazón es rosa; las Notas de Fondo son vainilla, almizcle y Amberwood.",
    imagen: "https://images.pexels.com/photos/9202848/pexels-photo-9202848.jpeg?_gl=1*9sl2z2*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTgwMTckajMwJGwwJGgw"
  }
];

export default perfumes;
