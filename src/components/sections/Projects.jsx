import React from 'react'
import { projectsData } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Projects = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="projects" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Casos de éxito y soluciones innovadoras que hemos desarrollado
          </p>
        </div>
        {/* Projects grid will be implemented */}
      </div>
    </section>
  )
}

export default Projects