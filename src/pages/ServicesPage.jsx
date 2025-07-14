import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Activity, Code, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [ref, isVisible] = useScrollReveal();

  const services = [
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Software Médico',
      description: 'Desarrollo de historiales clínicos digitales, sistemas de monitoreo en tiempo real y análisis predictivos para mejorar la atención médica.',
      features: ['Historiales electrónicos seguros', 'Monitoreo en tiempo real', 'Análisis predictivos con IA', 'Integración con dispositivos'],
      price: 'Desde $15,000 USD'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Soluciones Empresariales',
      description: 'Automatización de procesos, dashboards inteligentes y aplicaciones personalizadas para optimizar la productividad empresarial.',
      features: ['Automatización de procesos', 'Dashboards ejecutivos', 'Apps móviles empresariales', 'Integración con sistemas'],
      price: 'Desde $8,000 USD'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Inteligencia Artificial',
      description: 'Implementación de modelos de machine learning y deep learning para análisis predictivo y automatización inteligente.',
      features: ['Machine learning personalizado', 'Análisis predictivo', 'Procesamiento de lenguaje', 'Visión computacional'],
      price: 'Desde $12,000 USD'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Consultoría Tecnológica',
      description: 'Asesoría especializada en transformación digital, arquitectura de software y estrategias tecnológicas.',
      features: ['Auditoría de sistemas', 'Transformación digital', 'Arquitectura escalable', 'Roadmap tecnológico'],
      price: 'Desde $3,000 USD'
    }
  ];

  return (
    <div className="pt-20">
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones tecnológicas avanzadas diseñadas para transformar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link 
                    to="/contacto"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Solicitar cotización
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
