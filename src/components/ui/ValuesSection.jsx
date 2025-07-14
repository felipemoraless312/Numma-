import React from 'react';
import { Zap, Star, Shield, Heart } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { companyInfo } from '../../data/company';

const ValuesSection = () => {
  const [ref, isVisible] = useScrollReveal();

  const iconMap = {
    'Zap': <Zap className="w-8 h-8" />,
    'Star': <Star className="w-8 h-8" />,
    'Shield': <Shield className="w-8 h-8" />,
    'Heart': <Heart className="w-8 h-8" />
  };

  return (
    <section ref={ref} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Nuestros valores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión y proyecto que emprendemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
