export const projectsData = [
  {
    id: 1,
    title: 'Sistema de Gestión Hospitalaria',
    category: 'medical',
    description: 'Plataforma integral para la gestión de pacientes, historiales médicos y administración hospitalaria con interfaz intuitiva y seguridad de nivel clínico.',
    longDescription: 'Sistema completo de gestión hospitalaria que digitaliza todos los procesos médicos y administrativos. Incluye módulos de admisión de pacientes, gestión de citas, historiales médicos electrónicos, facturación y reportes analíticos en tiempo real.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'Historiales médicos electrónicos',
      'Sistema de citas en línea',
      'Módulo de facturación',
      'Dashboard analítico',
      'Integración con equipos médicos'
    ],
    images: [
      '/images/projects/hospital-dashboard.jpg',
      '/images/projects/hospital-patients.jpg',
      '/images/projects/hospital-analytics.jpg'
    ],
    demo: 'https://demo.hospital-system.com',
    github: 'https://github.com/cfe-aeon/hospital-management',
    client: 'Hospital Regional San Carlos',
    duration: '8 meses',
    team: ['Dr. Elena Rodríguez', 'Carlos Mendoza'],
    status: 'completed',
    year: 2024
  },
  {
    id: 2,
    title: 'App de Monitoreo Cardíaco',
    category: 'medical',
    description: 'Aplicación móvil para monitoreo continuo de signos vitales con alertas en tiempo real y análisis predictivo para prevención de eventos cardíacos.',
    longDescription: 'Aplicación móvil innovadora que permite el monitoreo continuo de signos vitales a través de dispositivos wearables. Utiliza inteligencia artificial para detectar patrones anómalos y alertar tanto al paciente como al personal médico.',
    technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'IoT'],
    features: [
      'Monitoreo en tiempo real',
      'Alertas inteligentes',
      'Análisis predictivo con IA',
      'Sincronización con wearables',
      'Reportes médicos automatizados'
    ],
    images: [
      '/images/projects/cardiac-app-dashboard.jpg',
      '/images/projects/cardiac-app-monitoring.jpg',
      '/images/projects/cardiac-app-alerts.jpg'
    ],
    demo: 'https://demo.cardiac-monitor.com',
    github: 'https://github.com/cfe-aeon/cardiac-monitor-app',
    client: 'Clínica Cardio Especialistas',
    duration: '6 meses',
    team: ['Dr. Elena Rodríguez', 'Carlos Mendoza'],
    status: 'in-progress',
    year: 2024
  },
  {
    id: 3,
    title: 'Dashboard Empresarial Inteligente',
    category: 'business',
    description: 'Plataforma de inteligencia de negocios con visualización de datos en tiempo real, análisis predictivo y automatización de reportes ejecutivos.',
    longDescription: 'Dashboard empresarial avanzado que centraliza datos de múltiples fuentes, genera insights automáticos y proporciona visualizaciones interactivas para la toma de decisiones estratégicas.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'D3.js'],
    features: [
      'Visualización de datos interactiva',
      'Análisis predictivo',
      'Reportes automatizados',
      'Integración multi-fuente',
      'Alertas personalizables'
    ],
    images: [
      '/images/projects/business-dashboard-main.jpg',
      '/images/projects/business-dashboard-analytics.jpg',
      '/images/projects/business-dashboard-reports.jpg'
    ],
    demo: 'https://demo.business-intelligence.com',
    github: 'https://github.com/cfe-aeon/business-dashboard',
    client: 'Grupo Empresarial Chiapas',
    duration: '4 meses',
    team: ['Carlos Mendoza'],
    status: 'completed',
    year: 2023
  },
  {
    id: 4,
    title: 'Sistema de Telemedicina',
    category: 'medical',
    description: 'Plataforma completa de telemedicina con videoconferencias seguras, prescripciones digitales y seguimiento remoto de pacientes.',
    longDescription: 'Sistema integral de telemedicina que permite consultas médicas remotas seguras, gestión de prescripciones digitales, y seguimiento continuo de pacientes desde la comodidad de sus hogares.',
    technologies: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'Socket.io'],
    features: [
      'Videoconferencias HD seguras',
      'Prescripciones digitales',
      'Chat médico encriptado',
      'Seguimiento de tratamientos',
      'Integración con farmacias'
    ],
    images: [
      '/images/projects/telemedicine-consultation.jpg',
      '/images/projects/telemedicine-prescription.jpg',
      '/images/projects/telemedicine-dashboard.jpg'
    ],
    demo: 'https://demo.telemedicine.com',
    github: 'https://github.com/cfe-aeon/telemedicine-platform',
    client: 'Red de Salud Chiapas',
    duration: '10 meses',
    team: ['Dr. Elena Rodríguez', 'Carlos Mendoza'],
    status: 'in-progress',
    year: 2024
  },
  {
    id: 5,
    title: 'E-commerce con IA',
    category: 'business',
    description: 'Plataforma de comercio electrónico con recomendaciones personalizadas, chatbot inteligente y análisis predictivo de ventas.',
    longDescription: 'Solución de e-commerce avanzada que utiliza inteligencia artificial para personalizar la experiencia de compra, optimizar inventarios y predecir tendencias de mercado.',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'Stripe', 'Vercel'],
    features: [
      'Recomendaciones con IA',
      'Chatbot inteligente',
      'Análisis predictivo de ventas',
      'Personalización de contenido',
      'Optimización de inventario'
    ],
    images: [
      '/images/projects/ecommerce-homepage.jpg',
      '/images/projects/ecommerce-recommendations.jpg',
      '/images/projects/ecommerce-analytics.jpg'
    ],
    demo: 'https://demo.smart-ecommerce.com',
    github: 'https://github.com/cfe-aeon/ai-ecommerce',
    client: 'Retail Innovación',
    duration: '7 meses',
    team: ['Carlos Mendoza'],
    status: 'completed',
    year: 2023
  },
  {
    id: 6,
    title: 'App de Gestión de Inventario Médico',
    category: 'medical',
    description: 'Sistema móvil para control de inventario médico con códigos QR, alertas de vencimiento y optimización automática de pedidos.',
    longDescription: 'Aplicación móvil especializada en la gestión eficiente de inventarios médicos, con seguimiento automático de medicamentos, control de caducidad y optimización de compras.',
    technologies: ['Flutter', 'Firebase', 'QR Scanner', 'Machine Learning'],
    features: [
      'Escaneo QR automatizado',
      'Alertas de vencimiento',
      'Optimización de pedidos',
      'Trazabilidad completa',
      'Reportes de consumo'
    ],
    images: [
      '/images/projects/inventory-scanner.jpg',
      '/images/projects/inventory-dashboard.jpg',
      '/images/projects/inventory-alerts.jpg'
    ],
    demo: 'https://demo.medical-inventory.com',
    github: 'https://github.com/cfe-aeon/medical-inventory-app',
    client: 'Farmacia Hospitalaria Central',
    duration: '5 meses',
    team: ['Dr. Elena Rodríguez', 'Carlos Mendoza'],
    status: 'completed',
    year: 2024
  }
]

// Categorías de proyectos
export const projectCategories = [
  { id: 'all', name: 'Todos', count: projectsData.length },
  { id: 'medical', name: 'Médicos', count: projectsData.filter(p => p.category === 'medical').length },
  { id: 'business', name: 'Empresariales', count: projectsData.filter(p => p.category === 'business').length }
]

// Estados de proyectos
export const projectStatuses = {
  'completed': { name: 'Completado', color: 'bg-green-500' },
  'in-progress': { name: 'En Progreso', color: 'bg-blue-500' },
  'planning': { name: 'Planificación', color: 'bg-yellow-500' }
}