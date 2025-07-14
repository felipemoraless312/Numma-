import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Calendar, Users, ExternalLink, Github, Tag, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const [ref, isVisible] = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Hospitalaria MedFlow',
      category: 'medical',
      status: 'completed',
      description: 'Plataforma integral para la gestión de pacientes, historiales médicos y administración hospitalaria con interfaz intuitiva y seguridad de nivel clínico.',
      image: 'https://advantecnia.com/wp-content/uploads/2024/02/imagen-1-1024x682.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      client: 'Sector Privado',
      duration: '8 meses',
      team: 2,
      year: '2024',
      features: [
        'Historiales médicos electrónicos seguros',
        'Sistema de citas en línea',
        'Módulo de facturación integrado',
        'Dashboard analítico en tiempo real'
      ]
    },
    {
      id: 2,
      title: 'CardioMonitor AI',
      category: 'medical',
      status: 'in-progress',
      description: 'Aplicación móvil para monitoreo continuo de signos vitales con alertas en tiempo real y análisis predictivo para prevención de eventos cardíacos.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'IoT'],
      client: 'Sector Privado',
      duration: '6 meses',
      team: 2,
      year: '2024',
      features: [
        'Monitoreo en tiempo real 24/7',
        'Alertas inteligentes con IA',
        'Sincronización con wearables',
        'Reportes médicos automatizados'
      ]
    },
    {
      id: 3,
      title: 'IntelliDash Pro',
      category: 'business',
      status: 'completed',
      description: 'Dashboard empresarial avanzado con visualización de datos en tiempo real, análisis predictivo y automatización de reportes ejecutivos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'D3.js'],
      client: 'Grupo Empresarial Chiapas',
      duration: '6 meses',
      team: 2,
      year: '2023',
      features: [
        'Visualización de datos interactiva',
        'Análisis predictivo con ML',
        'Reportes automatizados',
        'Integración multi-fuente'
      ]
    },
    {
      id: 4,
      title: 'TeleMed Connect',
      category: 'medical',
      status: 'in-progress',
      description: 'Plataforma completa de telemedicina con videoconferencias seguras, prescripciones digitales y seguimiento remoto de pacientes.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      technologies: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'Socket.io'],
      client: 'Sector Privado',
      duration: '10 meses',
      team: 2,
      year: '2024',
      features: [
        'Videoconferencias HD seguras',
        'Prescripciones digitales',
        'Chat médico encriptado',
        'Seguimiento de tratamientos'
      ]
    },
    {
      id: 5,
      title: 'SmartCommerce AI',
      category: 'business',
      status: 'completed',
      description: 'Plataforma de e-commerce con recomendaciones personalizadas, chatbot inteligente y análisis predictivo de ventas y análisis de sentimientos',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'Stripe', 'Vercel'],
      client: 'TOkkiSoft',
      duration: '7 meses',
      team: 2,
      year: '2023',
      features: [
        'Recomendaciones con IA',
        'Chatbot inteligente',
        'Análisis predictivo de ventas',
        'Optimización de inventario'
      ]
    },
    {
      id: 6,
      title: 'MedInventory QR',
      category: 'medical',
      status: 'completed',
      description: 'Sistema móvil para control de inventario médico con códigos QR, alertas de vencimiento y optimización automática de pedidos.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'QR Scanner', 'Machine Learning'],
      client: 'Farmacias Médico Amigo',
      duration: '5 meses',
      team: 2,
      year: '2024',
      features: [
        'Escaneo QR automatizado',
        'Alertas de vencimiento',
        'Optimización de pedidos',
        'Trazabilidad completa'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'medical', name: 'Médicos', count: projects.filter(p => p.category === 'medical').length },
    { id: 'business', name: 'Empresariales', count: projects.filter(p => p.category === 'business').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'planning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En Progreso';
      case 'planning': return 'Planificación';
      default: return 'Estado desconocido';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Casos de éxito que demuestran nuestro compromiso con la innovación y la excelencia tecnológica
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12+</div>
                <div className="text-gray-300">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-gray-300">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">6</div>
                <div className="text-gray-300">Sectores Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">
                      {project.category === 'medical' ? 'Sector Médico' : 'Empresarial'}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {project.team} desarrolladores
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          +{project.technologies.length - 4} más
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Características principales:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Client */}
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500 mb-4">
                      Cliente: <span className="font-medium text-gray-900">{project.client}</span>
                    </p>
                    

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;