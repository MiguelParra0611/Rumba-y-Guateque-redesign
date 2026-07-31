export type ScheduleEntry = {
  day: string;
  start: string; // 24h "HH:mm"
  end: string; // 24h "HH:mm", "24:00" means "en adelante" / end of day
  show: string;
  host?: string;
  openSlot?: boolean; // true = "Disponible" (AutoDJ fills in)
};

export const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
] as const;

export const schedule: ScheduleEntry[] = [
  // Mañanas
  { day: "Lunes", start: "09:00", end: "12:00", show: "Salsa y Café", host: "Juliet Parra" },
  { day: "Martes", start: "09:00", end: "12:00", show: "Salsa y Café", host: "Juliet Parra" },
  { day: "Miércoles", start: "09:00", end: "12:00", show: "Salsa y Café", host: "Juliet Parra" },
  { day: "Jueves", start: "09:00", end: "12:00", show: "Salsa y Café", host: "Juliet Parra" },
  { day: "Viernes", start: "09:00", end: "12:00", show: "Salsa y Café", host: "Juliet Parra" },
  { day: "Sábado", start: "09:00", end: "12:00", show: "Todos son Boleros", host: "Juliet Parra" },
  { day: "Domingo", start: "09:00", end: "12:00", show: "Rumba Cubana", host: "Harold Sánchez" },

  // Medio día
  { day: "Martes", start: "12:00", end: "15:00", show: "Martes Nite-Cases", host: "Bembe Cuyabro" },
  { day: "Sábado", start: "12:00", end: "14:00", show: "Hard Salsa", host: "Harold Sánchez" },
  { day: "Domingo", start: "12:00", end: "14:30", show: "Willy Salsa" },
  { day: "Lunes", start: "12:00", end: "17:00", show: "Disponible", openSlot: true },
  { day: "Miércoles", start: "12:00", end: "17:00", show: "Disponible", openSlot: true },
  { day: "Jueves", start: "12:00", end: "15:00", show: "Disponible", openSlot: true },
  { day: "Jueves", start: "15:00", end: "17:00", show: "Échale Salsita", host: "Angelita" },
  { day: "Viernes", start: "12:00", end: "17:00", show: "Disponible", openSlot: true },

  // Tarde
  { day: "Sábado", start: "14:00", end: "16:00", show: "Paco Son" },
  { day: "Domingo", start: "14:30", end: "17:00", show: "Paco Son" },
  { day: "Sábado", start: "16:00", end: "20:00", show: "Over García, El Teacher de la Melodía" },

  // 5pm - 7pm
  { day: "Lunes", start: "17:00", end: "19:00", show: "Gozadera Total", host: "Chepe Salsa" },
  { day: "Martes", start: "17:00", end: "19:00", show: "Identidad Sonera", host: "Juan C. Olarte" },
  { day: "Miércoles", start: "17:00", end: "19:00", show: "Gozadera Total", host: "Chepe Salsa" },
  { day: "Jueves", start: "17:00", end: "19:00", show: "Gozadera Total", host: "Chepe Salsa" },
  { day: "Viernes", start: "17:00", end: "19:00", show: "Gozadera Total", host: "Chepe Salsa" },
  { day: "Domingo", start: "17:00", end: "24:00", show: "Disponible", openSlot: true },

  // Noche
  { day: "Lunes", start: "19:00", end: "24:00", show: "Disponible", openSlot: true },
  { day: "Martes", start: "19:00", end: "21:00", show: "Mary Salsa" },
  { day: "Martes", start: "21:00", end: "24:00", show: "Disponible", openSlot: true },
  { day: "Miércoles", start: "19:00", end: "21:00", show: "Bembe Cuyabro" },
  { day: "Miércoles", start: "21:00", end: "22:00", show: "Disponible", openSlot: true },
  { day: "Miércoles", start: "22:00", end: "23:00", show: "Watusy" },
  { day: "Miércoles", start: "23:00", end: "24:00", show: "Disponible", openSlot: true },
  { day: "Jueves", start: "19:00", end: "22:00", show: "Disponible", openSlot: true },
  { day: "Jueves", start: "22:00", end: "24:00", show: "Disponible", openSlot: true },
  { day: "Viernes", start: "19:00", end: "24:00", show: "Disponible", openSlot: true },
  { day: "Sábado", start: "20:00", end: "24:00", show: "DJ Choludo" },
];
