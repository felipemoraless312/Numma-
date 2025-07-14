import React from 'react'
import { servicesData } from '../../data/services'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Services = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas avanzadas para el sector médico y empresarial
          </p>
        </div>
        {/* Services grid will be implemented */}
      </div>
    </section>
  )
}

export default Services