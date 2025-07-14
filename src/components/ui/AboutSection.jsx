import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { companyInfo } from '../../data/company';

const AboutSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Quiénes somos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {companyInfo.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Transformando el futuro digital
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desde nuestra fundación en {companyInfo.founded}, nos hemos dedicado a crear tecnología que 
                realmente impacte en la vida de las personas. Combinamos la experiencia médica 
                con la innovación tecnológica para desarrollar soluciones que mejoren la 
                atención sanitaria y optimicen los procesos empresariales.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo multidisciplinario está formado por ingenieros biomédicos, 
                desarrolladores de software y especialistas en inteligencia artificial, 
                todos comprometidos con la excelencia y la innovación.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {companyInfo.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-gray-600">{stat.label.split(' ')[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
