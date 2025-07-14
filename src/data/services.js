export const servicesData = [
  {
    id: 1,
    icon: 'Activity',
    title: 'Software Médico',
    category: 'medical',
    description: 'Desarrollo de historiales clínicos digitales, sistemas de monitoreo en tiempo real y análisis predictivos para mejorar la atención médica.',
    longDescription: 'Creamos soluciones tecnológicas especializadas para el sector salud, desde sistemas de gestión hospitalaria hasta aplicaciones de telemedicina, siempre cumpliendo con los más altos estándares de seguridad y regulaciones médicas.',
    features: [
      'Historiales clínicos electrónicos seguros',
      'Sistemas de monitoreo en tiempo real',
      'Análisis predictivos con IA',
      'Integración con dispositivos médicos',
      'Cumplimiento de normativas HIPAA/FDA'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'HL7 FHIR'],
    benefits: [
      'Mejora en la calidad de atención',
      'Reducción de errores médicos',
      'Optimización de recursos hospitalarios',
      'Mejor experiencia del paciente'
    ],
    pricing: 'Desde $15,000 USD',
    timeline: '3-8 meses',
    support: '24/7 soporte técnico especializado'
  },
  {
    id: 2,
    icon: 'Code',
    title: 'Soluciones Empresariales',
    category: 'business',
    description: 'Automatización de procesos, dashboards inteligentes y aplicaciones personalizadas para optimizar la productividad empresarial.',
    longDescription: 'Desarrollamos aplicaciones web y móviles personalizadas que automatizan procesos empresariales, mejoran la eficiencia operativa y proporcionan insights valiosos para la toma de decisiones.',
    features: [
      'Automatización de procesos de negocio',
      'Dashboards ejecutivos interactivos',
      'Aplicaciones móviles empresariales',
      'Integración con sistemas existentes',
      'Análisis de datos y reportería'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'Cloud Services'],
    benefits: [
      'Aumento de productividad hasta 40%',
      'Reducción de costos operativos',
      'Mejor toma de decisiones',
      'Escalabilidad empresarial'
    ],
    pricing: 'Desde $8,000 USD',
    timeline: '2-6 meses',
    support: 'Soporte técnico y mantenimiento incluido'
  },
  {
    id: 3,
    icon: 'Brain',
    title: 'Inteligencia Artificial',
    category: 'ai',
    description: 'Implementación de modelos de machine learning y deep learning para análisis predictivo, automatización inteligente y optimización de procesos.',
    longDescription: 'Aplicamos técnicas avanzadas de inteligencia artificial para resolver problemas complejos, desde análisis predictivo en medicina hasta optimización de operaciones empresariales.',
    features: [
      'Modelos de machine learning personalizados',
      'Análisis predictivo avanzado',
      'Procesamiento de lenguaje natural',
      'Visión computacional',
      'Automatización inteligente'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    benefits: [
      'Predicciones precisas y confiables',
      'Automatización de tareas complejas',
      'Insights profundos de datos',
      'Ventaja competitiva'
    ],
    pricing: 'Desde $12,000 USD',
    timeline: '4-10 meses',
    support: 'Entrenamiento y soporte especializado'
  },
  {
    id: 4,
    icon: 'Shield',
    title: 'Consultoría Tecnológica',
    category: 'consulting',
    description: 'Asesoría especializada en transformación digital, arquitectura de software y estrategias tecnológicas para el crecimiento empresarial.',
    longDescription: 'Ofrecemos consultoría estratégica para guiar a las organizaciones en su proceso de transformación digital, optimizando procesos y tecnologías existentes.',
    features: [
      'Auditoría de sistemas existentes',
      'Estrategia de transformación digital',
      'Arquitectura de software escalable',
      'Evaluación de seguridad',
      'Roadmap tecnológico'
    ],
    technologies: ['Metodologías ágiles', 'DevOps', 'Cloud Computing', 'Microservicios'],
    benefits: [
      'Reducción de riesgos tecnológicos',
      'Optimización de inversiones',
      'Mejora en time-to-market',
      'Estrategia tecnológica clara'
    ],
    pricing: 'Desde $3,000 USD',
    timeline: '1-3 meses',
    support: 'Seguimiento post-implementación'
  }
]

// Categorías de servicios
export const serviceCategories = [
  { id: 'all', name: 'Todos los Servicios', icon: 'Grid' },
  { id: 'medical', name: 'Soluciones Médicas', icon: 'Activity' },
  { id: 'business', name: 'Empresariales', icon: 'Briefcase' },
  { id: 'ai', name: 'Inteligencia Artificial', icon: 'Brain' },
  { id: 'consulting', name: 'Consultoría', icon: 'Users' }
]

// Metodología de trabajo
export const workMethodology = [
  {
    step: 1,
    title: 'Análisis y Planificación',
    description: 'Entendemos tus necesidades y definimos la estrategia técnica',
    duration: '1-2 semanas',
    deliverables: ['Documento de requisitos', 'Arquitectura técnica', 'Timeline del proyecto']
  },
  {
    step: 2,
    title: 'Diseño y Prototipado',
    description: 'Creamos prototipos interactivos y validamos la experiencia de usuario',
    duration: '2-3 semanas',
    deliverables: ['Wireframes', 'Prototipos interactivos', 'Guía de estilo']
  },
  {
    step: 3,
    title: 'Desarrollo e Implementación',
    description: 'Desarrollamos la solución siguiendo las mejores prácticas',
    duration: '4-16 semanas',
    deliverables: ['Código fuente', 'Pruebas automatizadas', 'Documentación técnica']
  },
  {
    step: 4,
    title: 'Testing y Deployment',
    description: 'Realizamos pruebas exhaustivas y desplegamos la solución',
    duration: '1-2 semanas',
    deliverables: ['Aplicación en producción', 'Manual de usuario', 'Soporte técnico']
  }
]