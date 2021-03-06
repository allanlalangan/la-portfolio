export const about = {
  name: 'Allan Lalangan',
  greeting: "Hello! I'm Allan;",
  info: "Former art major, community college dropout, turned developer. Over the past year I've rediscovered my love for coding and learning. I build responsive, beautiful, and satisfying user experiences.",
  actionCall: "Let's build together! ",
  actionCall_2: 'I can show you better than I can tell you...',
  actionCall_3: 'View my work',
  cv: '/',
};

export const contact = {
  me: { email: 'allanlalangan@gmail.com', phone: '666-420-1312' },
  socialMedia: [
    { name: 'linkedin', icon: '', url: '/' },
    { name: 'instagram', icon: '', url: '/' },
    { name: 'github', icon: '', url: 'https://github.com/allanlalangan' },
  ],
};

export const skills = [
  {
    name: 'html',
    icon: '',
    category: 'language',
    caption: 'base',
    favorite: false,
  },
  {
    name: 'css',
    icon: '',
    category: 'language',
    caption: 'base',
    favorite: false,
  },
  {
    name: 'javascript',
    icon: '',
    category: 'language',
    caption: 'base',
    favorite: false,
  },
  {
    name: 'node.js',
    icon: '',
    category: 'language',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'express',
    icon: '',
    category: 'framework',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'node.js',
    icon: '',
    category: 'language',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'mongoDb',
    icon: '',
    category: 'database',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'mongoose',
    icon: '',
    category: 'framework',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'react',
    icon: '',
    category: 'framework',
    caption: '',
    favorite: true,
  },
  { name: 'redux', icon: '', category: 'tool', caption: '', favorite: false },
  {
    name: 'next.js',
    icon: '',
    category: 'framework',
    caption: '',
    favorite: true,
  },
  {
    name: 'materialui',
    icon: '',
    category: 'library',
    caption: '',
    favorite: false,
  },
  {
    name: 'framer motion',
    icon: '',
    category: 'library',
    caption: 'animation',
    favorite: false,
  },
  {
    name: 'github',
    icon: '',
    category: 'version control',
    caption: '',
    favorite: false,
  },
  {
    name: 'git',
    icon: '',
    category: 'version control',
    caption: '',
    favorite: false,
  },
  {
    name: 'npm',
    icon: '',
    category: 'package manager',
    caption: '',
    favorite: false,
  },
  {
    name: 'axios',
    icon: '',
    category: 'tool',
    caption: 'http requests',
    favorite: false,
  },
  { name: 'rest', icon: '', category: 'tool', caption: '', favorite: false },
  {
    name: 'firebase',
    icon: '',
    category: 'service',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'stripe',
    icon: '',
    category: 'payments',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'json web tokens',
    icon: '',
    category: 'authentication',
    caption: 'beginner',
    favorite: false,
  },
];

export const projects = [
  {
    title: 'Nomad Travel',
    description:
      'SPA created with GoogleMaps and Travel APIs. Fetches popular restaurants, hotels, and attractions within map window boundaries. Autocomplete search allows users to quickly search and navigate anywhere on the map. Fetches weather data for map coordinates',
    tech: ['react', 'css', 'materialui', 'api', 'google maps'],
  },
  {
    title: 'project.Me',
    description:
      'A to-do app, but with a twist. Fullstack app allows registered users to save tasks, goals, and other activities. Users progress through goals as tasks are completed. Basic backend stores and protects unique user data in a database.',
    tech: [
      'express',
      'mongoDb',
      'react',
      'css',
      'redux',
      'api',
      'authentication',
    ],
  },
  {
    title: 'La Bodega',
    description:
      'E-commerce app that allows registered users to add items to a cart or wishlist, and rate and review products. Products data is fetched. App accepts mock payment with Stripe.',
    tech: ['next.js', 'react', 'css', 'rest', 'stripe'],
  },
  {
    title: 'Martial Masters Academy',
    description: 'A website for the best martial arts gym in all of Portland.',
    tech: ['next.js', 'react', 'css', 'api', 'stripe'],
  },
  {
    title: 'Portfolio',
    description:
      'This website was built with next.js, which has quickly become my go-to framework to build apps. An ongoing labor of love.',
    tech: ['next.js', 'react', 'css', 'api', 'stripe', 'framer motion'],
  },
];
