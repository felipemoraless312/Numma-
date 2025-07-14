import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-light mb-4">
              Numma
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Innovación que transforma la salud y el futuro digital. 
              Desarrollamos soluciones tecnológicas que impactan positivamente en la vida de las personas.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Tuxtla Gutiérrez, Chiapas</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/servicios" className="hover:text-white transition-colors">Software Médico</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Soluciones Empresariales</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Inteligencia Artificial</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Consultoría</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">numma2contact@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+52 962 107 8686</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Numma Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
