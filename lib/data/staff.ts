export type StaffMember = {
  name: string;
  role: string;
  bio?: string;
  photo: string;
};

export const staff: StaffMember[] = [
  {
    name: "Harold Sánchez",
    role: "Presidente",
    photo: "/staff/harold-sanchez.jpg",
  },
  {
    name: "DJ Chepe Salsa",
    role: "Programador",
    photo: "/staff/chepe-salsa.jpg",
  },
  {
    name: "Bembe Cuyabro",
    role: "DJ de Planta",
    photo: "/staff/bembe-cuyabro.jpg",
  },
  {
    name: "Julieta Parra",
    role: "DJ de Planta",
    bio: "Programadora, investigadora, comunicadora social. Redes sociales y estrategia de comunicaciones.",
    photo: "/staff/julieta-parra.jpg",
  },
  {
    name: "Ricky Ray",
    role: "DJ de Planta",
    bio: "Presidente de la comunidad salsera Salsa Na'ma, en Santiago de Chile.",
    photo: "/staff/ricky-ray.jpg",
  },
  {
    name: "Juan Carlos Parra",
    role: "Administrador Miami",
    bio: "Fundador de Rumba y Guateque Radio. Since 2009.",
    photo: "/staff/juan-carlos-parra.jpg",
  },
  {
    name: "Luis Carlos Delgado",
    role: "Administrador Cali, Colombia",
    bio: "Melómano y coleccionista. Presidente de La Máquina de la Salsa.",
    photo: "/staff/luis-carlos-delgado.jpg",
  },
  {
    name: "Harold H. Sánchez",
    role: "Melómano",
    bio: "Fundador de Rumba y Guateque Radio. Since 2009.",
    photo: "/staff/harold-h-sanchez.jpg",
  },
  {
    name: "Juan Carlos Olarte",
    role: "DJ de Planta",
    bio: "\"DJ Sonero\". Propietario de La Esquina del Movimiento.",
    photo: "/staff/juan-carlos-olarte.jpg",
  },
  {
    name: "William Jaramillo Aguirre",
    role: "DJ de Planta",
    bio: "DJ WilliSalsa. Melómano y coleccionista.",
    photo: "/staff/william-jaramillo.jpg",
  },
];

export const inMemoriam: StaffMember[] = [
  {
    name: "Jake de la Loma",
    role: "Q.E.P.D.",
    photo: "/staff/memoriam/jake-de-la-loma.jpg",
  },
  {
    name: "Jorge Molina",
    role: "Q.E.P.D.",
    photo: "/staff/memoriam/jorge-molina.jpg",
  },
  {
    name: "Esperanza Perafán",
    role: "Q.E.P.D.",
    photo: "/staff/memoriam/esperanza-perafan.jpg",
  },
];
