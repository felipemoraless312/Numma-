#!/bin/bash

# 🎨 Script para crear componentes UI de CFE Aeon
# Ejecutar después del script principal: bash create-ui-components.sh

echo "🎨 Creando componentes UI..."

# 1. Crear HeroSection
echo "📄 Creando src/components/ui/HeroSection.jsx..."
cat > src/components/ui/HeroSection.jsx << 'EOF'
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
          CFE <span className="text-blue-400 font-light">Aeon</span>
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
EOF

# 2. Crear AboutSection
echo "📄 Creando src/components/ui/AboutSection.jsx..."
cat > src/components/ui/AboutSection.jsx << 'EOF'
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
EOF

# 3. Crear MissionVisionSection
echo "📄 Creando src/components/ui/MissionVisionSection.jsx..."
cat > src/components/ui/MissionVisionSection.jsx << 'EOF'
import React from 'react';
import { Target, Eye } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { companyInfo } from '../../data/company';

const MissionVisionSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-light text-gray-900">Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {companyInfo.mission}
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-3xl font-light text-gray-900">Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
EOF

# 4. Crear ValuesSection
echo "📄 Creando src/components/ui/ValuesSection.jsx..."
cat > src/components/ui/ValuesSection.jsx << 'EOF'
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
EOF

# 5. Crear CTASection
echo "📄 Creando src/components/ui/CTASection.jsx..."
cat > src/components/ui/CTASection.jsx << 'EOF'
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
EOF

# 6. Actualizar Layout.jsx para eliminar dependencias del layout anterior
echo "🔄 Actualizando src/components/layout/Layout.jsx..."
cat > src/components/layout/Layout.jsx << 'EOF'
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
};

export default Layout;
EOF

echo "🎨 ¡Componentes UI creados exitosamente!"
echo ""
echo "✅ Se crearon los siguientes componentes:"
echo "   📄 HeroSection.jsx"
echo "   📄 AboutSection.jsx"
echo "   📄 MissionVisionSection.jsx"
echo "   📄 ValuesSection.jsx"
echo "   📄 CTASection.jsx"
echo ""
echo "🎉 ¡Tu proyecto CFE Aeon está completamente configurado!"
echo "💡 Ejecuta: npm run dev para ver todos los cambios"
