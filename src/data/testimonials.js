export const testimonialsData = [
  {
    id: 1,
    name: 'Dr. María González',
    position: 'Directora Médica',
    company: 'Hospital Regional San Carlos',
    rating: 5,
    comment: 'El sistema de gestión hospitalaria desarrollado por CFE Aeon ha transformado completamente nuestros procesos. La eficiencia operativa mejoró un 45% y nuestros médicos pueden dedicar más tiempo a los pacientes.',
    project: 'Sistema de Gestión Hospitalaria',
    avatar: '👩‍⚕️',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Ing. Roberto Sánchez',
    position: 'CTO',
    company: 'Grupo Empresarial Chiapas',
    rating: 5,
    comment: 'El dashboard empresarial inteligente nos ha dado insights increíbles sobre nuestro negocio. Las predicciones de ventas han sido 92% precisas, lo que nos ha permitido optimizar inventarios y aumentar rentabilidad.',
    project: 'Dashboard Empresarial Inteligente',
    avatar: '👨‍💼',
    date: '2023-11-20'
  },
  {
    id: 3,
    name: 'Dra. Carmen López',
    position: 'Cardióloga',
    company: 'Clínica Cardio Especialistas',
    rating: 5,
    comment: 'La app de monitoreo cardíaco ha revolucionado el seguimiento de mis pacientes. Los algoritmos de IA han detectado arritmias que pasaban desapercibidas, salvando vidas literalmente.',
    project: 'App de Monitoreo Cardíaco',
    avatar: '👩‍⚕️',
    date: '2024-02-08'
  },
  {
    id: 4,
    name: 'Lic. Fernando Martínez',
    position: 'Director de Operaciones',
    company: 'Retail Innovación',
    rating: 5,
    comment: 'El e-commerce con IA que desarrollaron superó todas nuestras expectativas. Las ventas aumentaron 67% en los primeros 6 meses y la experiencia del cliente mejoró significativamente.',
    project: 'E-commerce con IA',
    avatar: '👨‍💼',
    date: '2023-09-12'
  },
  {
    id: 5,
    name: 'Dr. Antonio Ruiz',
    position: 'Director Médico',
    company: 'Red de Salud Chiapas',
    rating: 5,
    comment: 'La plataforma de telemedicina nos permitió mantener la atención médica durante la pandemia y ahora es parte integral de nuestros servicios. La calidad de las consultas virtuales es excepcional.',
    project: 'Sistema de Telemedicina',
    avatar: '👨‍⚕️',
    date: '2024-01-30'
  },
  {
    id: 6,
    name: 'Farm. Ana Patricia Morales',
    position: 'Jefa de Farmacia',
    company: 'Farmacia Hospitalaria Central',
    rating: 5,
    comment: 'El sistema de inventario médico ha eliminado completamente los errores de stock y las pérdidas por vencimiento. El ROI se vio reflejado en los primeros 3 meses de implementación.',
    project: 'App de Gestión de Inventario Médico',
    avatar: '👩‍⚕️',
    date: '2024-03-05'
  }
]

// Estadísticas de testimonios
export const testimonialStats = {
  totalClients: testimonialsData.length,
  averageRating: testimonialsData.reduce((acc, t) => acc + t.rating, 0) / testimonialsData.length,
  satisfactionRate: 100, // 100% de clientes satisfechos
  projectsCompleted: 12,
  yearsExperience: 3
}

// Categorías de testimonios
export const testimonialCategories = [
  { id: 'all', name: 'Todos', count: testimonialsData.length },
  { id: 'medical', name: 'Sector Médico', count: testimonialsData.filter(t => t.company.includes('Hospital') || t.company.includes('Clínica') || t.company.includes('Salud') || t.company.includes('Farmacia')).length },
  { id: 'business', name: 'Empresarial', count: testimonialsData.filter(t => t.company.includes('Grupo') || t.company.includes('Retail') || t.company.includes('Empresarial')).length }
]