import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CTASection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            ¿Listo para innovar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Únete a las empresas que ya están transformando su futuro con nuestras soluciones tecnológicas
          </p>
          <Link 
            to="/contacto"
            className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center"
          >
            Comienza tu proyecto
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
