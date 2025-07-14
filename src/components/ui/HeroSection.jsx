import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const HeroSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden"
    >
      {/* Particles effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 tracking-tight">
          Numma 
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Innovación que transforma la salud y el futuro digital
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/servicios"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center justify-center"
          >
            Descubre nuestros servicios
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/proyectos"
            className="group border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
