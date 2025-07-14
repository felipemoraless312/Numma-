// Información de la empresa
export const COMPANY_INFO = {
  name: 'CFE Aeon',
  fullName: 'CFE Aeon - Innovación Médica y Tecnológica',
  tagline: 'Innovación que transforma la salud y el futuro digital',
  description: 'Empresa especializada en el desarrollo de soluciones tecnológicas innovadoras para el sector médico y empresarial',
  founded: '2022',
  location: 'Tuxtla Gutiérrez, Chiapas, México',
  email: 'info@cfeaeon.com',
  phone: '+52 961 123 4567',
  website: 'https://www.cfeaeon.com'
}

// Redes sociales
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/cfe-aeon',
  twitter: 'https://twitter.com/cfeaeon',
  github: 'https://github.com/cfe-aeon',
  instagram: 'https://instagram.com/cfeaeon',
  facebook: 'https://facebook.com/cfeaeon'
}

// Navegación
export const NAVIGATION_ITEMS = [
  { label: 'Inicio', href: '#home', id: 'home' },
  { label: 'Servicios', href: '#services', id: 'services' },
  { label: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Equipo', href: '#team', id: 'team' },
  { label: 'Sobre Nosotros', href: '#about', id: 'about' },
  { label: 'Contacto', href: '#contact', id: 'contact' }
]

// Tecnologías que manejamos
export const TECHNOLOGIES = {
  frontend: [
    { name: 'React', icon: '⚛️', level: 'Expert' },
    { name: 'Next.js', icon: '▲', level: 'Expert' },
    { name: 'Vue.js', icon: '💚', level: 'Advanced' },
    { name: 'TypeScript', icon: '📘', level: 'Expert' },
    { name: 'Tailwind CSS', icon: '🎨', level: 'Expert' }
  ],
  backend: [
    { name: 'Node.js', icon: '💚', level: 'Expert' },
    { name: 'Python', icon: '🐍', level: 'Expert' },
    { name: 'FastAPI', icon: '⚡', level: 'Advanced' },
    { name: 'Express.js', icon: '🚀', level: 'Expert' },
    { name: 'PostgreSQL', icon: '🐘', level: 'Advanced' }
  ],
  mobile: [
    { name: 'React Native', icon: '📱', level: 'Advanced' },
    { name: 'Flutter', icon: '🦋', level: 'Intermediate' },
    { name: 'Expo', icon: '📲', level: 'Advanced' }
  ],
  ai: [
    { name: 'TensorFlow', icon: '🧠', level: 'Advanced' },
    { name: 'PyTorch', icon: '🔥', level: 'Intermediate' },
    { name: 'Scikit-learn', icon: '📊', level: 'Expert' },
    { name: 'OpenCV', icon: '👁️', level: 'Advanced' }
  ],
  cloud: [
    { name: 'AWS', icon: '☁️', level: 'Expert' },
    { name: 'Google Cloud', icon: '🌐', level: 'Advanced' },
    { name: 'Azure', icon: '🔷', level: 'Intermediate' },
    { name: 'Docker', icon: '🐳', level: 'Expert' },
    { name: 'Kubernetes', icon: '⚙️', level: 'Advanced' }
  ]
}

// Estadísticas de la empresa
export const COMPANY_STATS = [
  { label: 'Proyectos Completados', value: '12+', icon: '🚀' },
  { label: 'Clientes Satisfechos', value: '100%', icon: '😊' },
  { label: 'Años de Experiencia', value: '3+', icon: '⭐' },
  { label: 'Tecnologías Dominadas', value: '20+', icon: '💻' }
]

// Certificaciones y reconocimientos
export const CERTIFICATIONS = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional Developer',
  'FDA Medical Device Certification',
  'ISO 13485 Quality Management',
  'HIPAA Compliance Specialist',
  'Scrum Master Certified'
]

// Sectores que atendemos
export const INDUSTRY_SECTORS = [
  {
    name: 'Salud y Medicina',
    description: 'Hospitales, clínicas, consultorios médicos',
    icon: '🏥',
    projects: 8
  },
  {
    name: 'Retail y E-commerce',
    description: 'Tiendas online, marketplaces, retail',
    icon: '🛒',
    projects: 3
  },
  {
    name: 'Educación',
    description: 'Universidades, escuelas, plataformas educativas',
    icon: '🎓',
    projects: 2
  },
  {
    name: 'Fintech',
    description: 'Servicios financieros, banca digital',
    icon: '💰',
    projects: 1
  }
]

// Valores de la empresa
export const COMPANY_VALUES = [
  {
    title: 'Innovación',
    description: 'Siempre buscamos las últimas tecnologías para crear soluciones disruptivas',
    icon: '💡'
  },
  {
    title: 'Calidad',
    description: 'Nos comprometemos con la excelencia en cada línea de código',
    icon: '⭐'
  },
  {
    title: 'Seguridad',
    description: 'La protección de datos y la privacidad son nuestra prioridad',
    icon: '🔒'
  },
  {
    title: 'Impacto Social',
    description: 'Creamos tecnología que mejora la vida de las personas',
    icon: '🌍'
  }
]

// Precios base (en USD)
export const BASE_PRICING = {
  consulting: { min: 3000, max: 10000 },
  webapp: { min: 8000, max: 25000 },
  mobile: { min: 12000, max: 30000 },
  medical: { min: 15000, max: 50000 },
  ai: { min: 12000, max: 40000 }
}

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0
  },
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1]
  },
  stagger: {
    children: 0.1,
    delay: 0.3
  }
}

// Configuración de breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Meta tags por página
export const META_TAGS = {
  home: {
    title: 'CFE Aeon - Innovación Médica y Tecnológica',
    description: 'Desarrollamos soluciones tecnológicas innovadoras para el sector médico y empresarial. Especialistas en software médico, telemedicina y aplicaciones empresariales.',
    keywords: 'desarrollo software médico, telemedicina, aplicaciones empresariales, inteligencia artificial, Chiapas'
  },
  services: {
    title: 'Servicios - CFE Aeon',
    description: 'Conoce nuestros servicios especializados en software médico, soluciones empresariales, inteligencia artificial y consultoría tecnológica.',
    keywords: 'servicios desarrollo software, consultoria tecnológica, software médico, aplicaciones empresariales'
  },
  projects: {
    title: 'Proyectos - CFE Aeon',
    description: 'Descubre nuestros casos de éxito en desarrollo de software médico y soluciones empresariales. Proyectos innovadores que transforman industrias.',
    keywords: 'portafolio proyectos, casos éxito, software médico, aplicaciones empresariales'
  }
}