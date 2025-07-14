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
