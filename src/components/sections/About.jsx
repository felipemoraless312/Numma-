import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const About = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" ref={ref} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Sobre CFE Aeon
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa especializada en el desarrollo de soluciones tecnológicas 
            innovadoras para el sector médico y empresarial, combinando experiencia técnica 
            con visión médica para crear productos que realmente impacten en la vida de las personas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About