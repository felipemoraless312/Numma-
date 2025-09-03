import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  Mail,
  Linkedin,
  Github,
  Award,
  MapPin,
  Calendar,
  Code,
  Heart,
  Star,
  Users,
} from 'lucide-react'
import felipe from '../../public/images/team/felipe.jpeg'

const persona = {
  image: felipe,
}

const TeamPage = () => {
  const [ref, isVisible] = useScrollReveal()

  const teamMembers = [
    {
      id: 1,
      name: 'César Gómez Aguilera',
      role: 'Co-fundador & CEO',
      profession: 'Desarrollador de Software',
      experience: '3 años de experiencia',
      education:
        'Ing. en Desarrollo de Software - Universidad Politecnica de Chiapas',
      specialization:
        'Desarrollo full-stack y arquitectura de sistemas escalables',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQF9MR-_jnFffQ/profile-displayphoto-shrink_800_800/B56ZZ5OcpqHUAc-/0/1745790553838?e=1758153600&v=beta&t=-e1nr09Sl5VqoQN2ADyfbeoVDUgQi36zOsmE06_2JIw',
      description:
        'Desarrollador full-stack especializado en la creación de aplicaciones web y móviles robustas y escalables. Experto en tecnologías modernas y metodologías ágiles para el desarrollo de software empresarial.',
      skills: [
        'React/Next.js',
        'Node.js/Python',
        'Cloud Computing (AWS/Azure)',
        'DevOps & CI/CD',
        'Desarrollador Frontend',
      ],
      email: 'blackrubick14@gmail.com',
      linkedin: 'https://www.linkedin.com/in/cesar-gomez-aguilera-429125316/',
      achievements: [
        'Programa especializado: Ciberseguridad de Google',
        'Google Cloud Professional Developer',
        'Hackaton Varathon Ganador 1er Lugar ',
      ],
      projects: [
        'IntelliDash Pro',
        'Diagnostico medico asisitido por  AI',
        'Sistema de Gestión Hospitalaria',
      ],
      languages: ['Español', 'Inglés'],
      location: 'Tuxtla Gutiérrez, Chiapas',
      joinedYear: '2022',
    },
    {
      id: 2,
      name: 'Luis Felipe Morales Gutiérrez',
      role: 'Co-fundador & CTO',
      profession: 'Ingeniero Biomédico',
      experience: '3 años de experiencia',
      education: 'Ingeniería Biomédica - Universidad Politecnica de Chiapas',
      specialization: 'Sistemas médicos digitales ',
      image: '/images/team/felipe.jpeg',
      description:
        'Especialista en el desarrollo de tecnologías médicas innovadoras con enfoque en la mejora de la atención sanitaria a través de soluciones digitales. Experta en integración de dispositivos médicos y análisis de big data en salud.',
      skills: [
        'Ingeniería Biomédica',
        'Análisis de Datos Médicos',
        'Machine Learning en Salud',
      ],
      email: 'felipemorales453@gmail.com',
      linkedin:
        'https://www.linkedin.com/in/luis-felipe-morales-gutierrez-159b75325/',
      achievements: ['Premio Innovación Tecnológica 2023'],
      projects: ['Sistema de Gestión Hospitalaria', 'CardioMonitor AI'],
      languages: ['Español', 'Inglés'],
      location: 'Tuxtla Gutiérrez, Chiapas',
      joinedYear: '2022',
    },
  ]

  const companyValues = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Excelencia Técnica',
      description:
        'Nos comprometemos con los más altos estándares de calidad en cada línea de código.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Impacto Social',
      description:
        'Desarrollamos tecnología que mejora la vida de las personas y contribuye al bienestar social.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Innovación Continua',
      description:
        'Siempre buscamos las últimas tecnologías para crear soluciones disruptivas.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trabajo en Equipo',
      description:
        'Creemos en la colaboración y el intercambio de conocimientos para lograr los mejores resultados.',
    },
  ]

  const teamStats = [
    { label: 'Años de Experiencia Combinada', value: '14+' },
    { label: 'Certificaciones Profesionales', value: '12+' },
    { label: 'Proyectos Liderados', value: '25+' },
    { label: 'Tecnologías Dominadas', value: '30+' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={ref}
        className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Conoce a los profesionales apasionados por la innovación
              tecnológica y el impacto social que están detrás de CFE Aeon
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Photo and Basic Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                      <div className="text-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1">
                          {member.role}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {member.profession}
                        </p>

                        {/* Contact Links */}
                        <div className="flex justify-center space-x-4 mb-6">
                          <a
                            href={`mailto:${member.email}`}
                            className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>

                        {/* Quick Info */}
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-center justify-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {member.location}
                          </div>
                          <div className="flex items-center justify-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            En Numma desde {member.joinedYear}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div
                  className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="space-y-8">
                    {/* Experience and Education */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Experiencia y Formación
                      </h4>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          <span className="font-medium">Experiencia:</span>{' '}
                          {member.experience}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Educación:</span>{' '}
                          {member.education}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Especialización:</span>{' '}
                          {member.specialization}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Acerca de {member.name.split(' ')[0]}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Habilidades Técnicas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Logros y Certificaciones
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-600"
                          >
                            <Award className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Proyectos Destacados
                      </h4>
                      <div className="space-y-2">
                        {member.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Idiomas
                      </h4>
                      <div className="flex gap-2">
                        {member.languages.map((language, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y proyecto que emprendemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-600 mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-thin text-gray-900 mb-6">
                Nuestra Cultura
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En Numma fomentamos un ambiente de trabajo colaborativo,
                creativo e inclusivo. Creemos que la diversidad de pensamiento y
                experiencia es fundamental para la innovación. Nuestro equipo
                trabaja con pasión para crear soluciones que realmente impacten
                en la vida de las personas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Valoramos el aprendizaje continuo, la experimentación y el
                crecimiento profesional. Cada miembro de nuestro equipo tiene la
                oportunidad de liderar proyectos, proponer nuevas ideas y
                contribuir al éxito colectivo de la empresa.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Flexibilidad y balance trabajo-vida
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Oportunidades de crecimiento profesional
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Ambiente colaborativo e inclusivo
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Apoyo para certificaciones y formación
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  ¿Por qué contratarnos?
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      +3 años
                    </div>
                    <div className="text-gray-600">
                      De experiencia en desarrollo de software y soluciones
                      médicas
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Especialistas
                    </div>
                    <div className="text-gray-600">
                      Equipo multidisciplinario en ingeniería biomédica y
                      software
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">
                      Comprometidos con la calidad, innovación y atención
                      personalizada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage
