import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div className="pt-20">
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
                Contáctanos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-3xl p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Empresa"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                    <textarea
                      rows="6"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium"
                    >
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">info@cfeaeon.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">+52 961 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Tuxtla Gutiérrez, Chiapas</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-semibold mb-4">¿Necesitas una cotización?</h3>
                  <p className="text-blue-100 mb-4">
                    Programa una consulta gratuita de 30 minutos para discutir tu proyecto.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium">
                    Agendar consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
