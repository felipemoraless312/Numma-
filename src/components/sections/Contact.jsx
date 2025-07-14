import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Contact = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas
          </p>
        </div>
        {/* Contact form will be implemented */}
      </div>
    </section>
  )
}

export default Contact