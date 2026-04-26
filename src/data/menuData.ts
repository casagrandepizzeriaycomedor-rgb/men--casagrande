import type { MenuItem, Category } from '../types/menu';

export const categories: Category[] = [
  { id: 'pizzas', name: 'Pizzas', icon: '\uD83C\uDF55' },
  { id: 'entradas', name: 'Entradas', icon: '\uD83E\uDD56' },
  { id: 'comida', name: 'Comida', icon: '\uD83C\uDF56' },
  { id: 'pupusas', name: 'Pupusas', icon: '\uD83E\uDED3' },
  { id: 'antojitos', name: 'Antojitos', icon: '\uD83C\uDF2E' },
  { id: 'sopas', name: 'Sopas', icon: '\uD83C\uDF72' },
  { id: 'bebidas', name: 'Bebidas', icon: '\uD83E\uDD64' },
  { id: 'arma-pizza', name: 'Arma tu Pizza', icon: '\uD83C\uDF55' },
  { id: 'info', name: 'Info', icon: '\uD83D\uDCCD' },
  { id: 'siguenos', name: 'Síguenos', icon: '\uD83D\uDCF1' },
];

export const menuItems: MenuItem[] = [
  // === PIZZAS ===
  {
    id: 'pizza-pepperoni',
    name: 'Pepperoni',
    description: 'Pepperoni y queso mozzarella',
    category: 'pizzas',

    prices: [
      { size: 'Pequeña', slices: 6, price: 7.50 },
      { size: 'Mediana', slices: 10, price: 10.00 },
      { size: 'Grande', slices: 12, price: 12.00 },
    ],
  },
  {
    id: 'pizza-suprema',
    name: 'Suprema',
    description: 'Pepperoni, salchicha, chile, cebolla, champiñones y queso mozzarella',
    category: 'pizzas',
    prices: [
      { size: 'Pequeña', slices: 6, price: 8.00 },
      { size: 'Mediana', slices: 10, price: 11.00 },
      { size: 'Grande', slices: 12, price: 14.00 },
    ],
  },
  {
    id: 'pizza-4-carnes',
    name: '4 Carnes',
    description: 'Pepperoni, jamón, salchicha, carne y queso mozzarella',
    category: 'pizzas',
    prices: [
      { size: 'Pequeña', slices: 8, price: 9.00 },
      { size: 'Mediana', slices: 10, price: 11.00 },
      { size: 'Grande', slices: 12, price: 14.00 },
    ],
  },
  {
    id: 'pizza-hawaiana',
    name: 'Hawaiana',
    description: 'Piña, jamón y queso mozzarella',
    category: 'pizzas',
    prices: [
      { size: 'Pequeña', slices: 6, price: 9.00 },
      { size: 'Mediana', slices: 10, price: 11.00 },
      { size: 'Grande', slices: 12, price: 14.00 },
    ],
  },

  // === ENTRADAS ===
  {
    id: 'nudos-pan-ajo',
    name: 'Nudos de Pan con Ajo',
    description: '10 porciones',
    category: 'entradas',

    price: 2.00,
  },
  {
    id: 'pan-con-ajo',
    name: 'Pan con Ajo',
    description: '4 unidades',
    category: 'entradas',
    price: 2.50,
  },
  {
    id: 'nachos',
    name: 'Nachos',
    description: 'Nachos con queso y toppings',
    category: 'entradas',

    price: 4.50,
  },

  // === COMIDA ===
  {
    id: 'fajitas-pollo',
    name: 'Fajitas de Pollo',
    description: 'Pollo, arroz, vegetales y 2 tortillas',
    category: 'comida',

    price: 5.00,
  },
  {
    id: 'pechuga-plancha',
    name: 'Pechuga a la Plancha',
    description: 'Pechuga, arroz, vegetales y 2 tortillas',
    category: 'comida',
    price: 5.00,
  },
  {
    id: 'carne-asada',
    name: 'Carne Asada',
    description: 'Carne, arroz y 2 tortillas',
    category: 'comida',

    price: 6.00,
  },
  {
    id: 'camarónes-empanizados',
    name: 'Camarónes Empanizados',
    description: 'Camarónes empanizados con acompañamiento',
    category: 'comida',
    price: 6.95,
  },
  {
    id: 'pollo-parmesana',
    name: 'Pollo a la Parmesana',
    description: 'Pechuga de pollo empanizada cubierta con salsa de tomate y queso mozzarella al horno',
    category: 'comida',
    price: 6.95,
  },
  {
    id: 'pollo-francesa',
    name: 'Pollo a la Francesa',
    description: 'Pechuga de pollo en salsa de vino blanco y limón, servida con arroz y vegetales',
    category: 'comida',
    price: 6.95,
  },
  {
    id: 'cena-tipica',
    name: 'Cena Típica',
    description: 'Huevos, frijoles, plátano, queso y aguacate',
    category: 'comida',
    price: 3.50,
  },

  // === PUPUSAS (de 3:00 PM en adelante) ===
  {
    id: 'pupusa-queso',
    name: 'Queso',
    description: 'Pupusa de queso',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-revueltas',
    name: 'Revueltas',
    description: 'Pupusa revuelta',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-frijol-queso',
    name: 'Frijol con Queso',
    description: 'Pupusa de frijol con queso',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-jalapeño',
    name: 'Jalapeño',
    description: 'Pupusa de jalapeño',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-ajo',
    name: 'Ajo',
    description: 'Pupusa de ajo',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-pollo',
    name: 'Pollo',
    description: 'Pupusa de pollo',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-loroco',
    name: 'Loroco',
    description: 'Pupusa de loroco',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-champiñones',
    name: 'Champiñones',
    description: 'Pupusa de champiñones',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-ayote',
    name: 'Ayote',
    description: 'Pupusa de ayote',
    category: 'pupusas',
    price: 1.00,
  },
  {
    id: 'pupusa-camarón',
    name: 'Camarón',
    description: 'Pupusa de camarón',
    category: 'pupusas',
    price: 1.50,
  },
  {
    id: 'pupusa-especial',
    name: 'Especial con Todo',
    description: 'Pupusa especial con todos los ingredientes',
    category: 'pupusas',
    price: 2.00,
  },

  // === ANTOJITOS ===
  {
    id: 'hamburguesa-res',
    name: 'Hamburguesa de Res',
    description: 'Hamburguesa de carne de res con acompañamiento',
    category: 'antojitos',

    price: 4.50,
  },
  {
    id: 'espaguetis-pollo',
    name: 'Espaguetis de Pollo',
    description: 'Espaguetis con pollo',
    category: 'antojitos',
    price: 4.50,
  },
  {
    id: 'tacos-res',
    name: 'Tacos de Res',
    description: '3 tacos de carne de res',
    category: 'antojitos',

    price: 4.75,
  },
  {
    id: 'tacos-pollo',
    name: 'Tacos de Pollo',
    description: '3 tacos de pollo',
    category: 'antojitos',
    price: 4.75,
  },
  {
    id: 'tacos-mixtos',
    name: 'Tacos Mixtos',
    description: '3 tacos mixtos de res y pollo',
    category: 'antojitos',
    price: 4.75,
  },
  {
    id: 'torta-pollo',
    name: 'Torta de Pollo',
    description: 'Torta con pollo y vegetales',
    category: 'antojitos',
    price: 4.00,
  },
  {
    id: 'burrito-pollo',
    name: 'Burrito de Pollo',
    description: 'Burrito relleno de pollo',
    category: 'antojitos',
    price: 4.00,
  },
  {
    id: 'quesadilla-pollo',
    name: 'Quesadilla de Pollo',
    description: 'Quesadilla rellena de pollo y queso',
    category: 'antojitos',
    price: 4.00,
  },
  {
    id: 'ensalada-mixta',
    name: 'Ensalada Mixta',
    description: 'Ensalada fresca mixta',
    category: 'antojitos',
    price: 4.50,
  },

  // === SOPAS (Miércoles y Domingos) ===
  {
    id: 'sopa-mondongo',
    name: 'Sopa de Mondongo',
    description: 'Sopa tradicional de mondongo',
    category: 'sopas',

    price: 4.75,
    note: 'Miércoles y Domingos',
  },
  {
    id: 'sopa-res',
    name: 'Sopa de Res',
    description: 'Sopa de carne de res con verduras',
    category: 'sopas',
    price: 4.75,
    note: 'Miércoles y Domingos',
  },

  // === BEBIDAS ===
  {
    id: 'fresco-tamarindo',
    name: 'Fresco de Tamarindo',
    description: 'Refresco natural de tamarindo',
    category: 'bebidas',
    price: 0.75,
  },
  {
    id: 'fresco-jamaica',
    name: 'Fresco de Jamaica',
    description: 'Refresco natural de jamaica',
    category: 'bebidas',
    price: 0.75,
  },
  {
    id: 'fresco-horchata',
    name: 'Fresco de Horchata',
    description: 'Refresco natural de horchata',
    category: 'bebidas',
    price: 0.75,
  },
  {
    id: 'bebidas-frias',
    name: 'Bebidas Frías',
    description: 'Variedad de bebidas frías y refrescos',
    category: 'bebidas',
    price: 1.00,
  },
  {
    id: 'cafe',
    name: 'Café',
    description: 'Café caliente',
    category: 'bebidas',

    price: 0.60,
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    description: 'Chocolate caliente',
    category: 'bebidas',
    price: 0.60,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Cappuccino caliente',
    category: 'bebidas',
    price: 0.60,
  },
];
