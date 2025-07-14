# CFE Aeon - Portfolio Empresarial

![CFE Aeon Logo](./public/images/logo.png)

## 🚀 Descripción

CFE Aeon es una empresa especializada en el desarrollo de soluciones tecnológicas innovadoras para el sector médico y empresarial. Este repositorio contiene el código fuente de nuestro sitio web corporativo y portafolio de proyectos.

## ✨ Características

- **Diseño Moderno**: Inspirado en la estética minimalista de Apple
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Efectos de scroll reveal y transiciones fluidas
- **Performance Optimizado**: Carga rápida y experiencia de usuario excepcional
- **SEO Friendly**: Optimizado para motores de búsqueda
- **Arquitectura Escalable**: Código modular y mantenible

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, Vite
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: CSS Transitions & Transforms
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/cfe-aeon/portfolio.git

# Navegar al directorio
cd cfe-aeon-portfolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
cfe-aeon-portfolio/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes del sitio
│   │   ├── projects/      # Capturas de proyectos
│   │   ├── team/          # Fotos del equipo
│   │   └── icons/         # Iconos personalizados
│   └── favicon.ico        # Favicon
├── src/
│   ├── components/        # Componentes React
│   │   ├── common/        # Componentes reutilizables
│   │   ├── layout/        # Componentes de layout
│   │   └── sections/      # Secciones del sitio
│   ├── data/             # Datos estáticos
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Páginas principales
│   ├── styles/           # Estilos globales
│   └── utils/            # Utilidades y helpers
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # Configuración de Tailwind
├── vite.config.js        # Configuración de Vite
└── README.md             # Este archivo
```

## 🎨 Guía de Estilos

### Colores Principales
- **Primario**: `#3b82f6` (Blue 500)
- **Secundario**: `#1e3a8a` (Blue 900)
- **Acento**: `#60a5fa` (Blue 400)
- **Texto**: `#0f172a` (Slate 900)
- **Gris**: `#64748b` (Slate 500)

### Tipografía
- **Familia**: Inter, system-ui, sans-serif
- **Pesos**: 100, 200, 300, 400, 500, 600, 700, 800, 900

### Espaciado
- **Escala**: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## 🧩 Componentes Principales

### Layout
- **Header**: Navegación principal con menú responsive
- **Footer**: Información de contacto y enlaces

### Secciones
- **Hero**: Presentación principal con call-to-action
- **Services**: Servicios que ofrecemos
- **Projects**: Portafolio de proyectos realizados
- **Team**: Información del equipo
- **About**: Información sobre la empresa
- **Contact**: Formulario de contacto

### Componentes Comunes
- **Button**: Botones con diferentes variantes
- **Card**: Tarjetas reutilizables con efectos hover
- **Modal**: Ventanas modales para contenido adicional
- **Loading**: Indicadores de carga

## 📊 Gestión de Datos

Los datos del sitio se gestionan a través de archivos JavaScript en la carpeta `src/data/`:

- `projects.js`: Información de proyectos
- `team.js`: Información del equipo
- `services.js`: Servicios ofrecidos
- `testimonials.js`: Testimonios de clientes

## 🔧 Desarrollo

### Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build de producción
npm run preview    # Previsualizar build
npm run lint       # Ejecutar ESLint
npm run format     # Formatear código con Prettier
```

### Convenciones de Código

- **Componentes**: PascalCase (ej: `HeroSection.jsx`)
- **Archivos**: camelCase (ej: `useScrollReveal.js`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `COMPANY_INFO`)
- **CSS Classes**: kebab-case siguiendo Tailwind

### Git Workflow

```bash
# Crear rama para nueva funcionalidad
git checkout -b feature/nueva-funcionalidad

# Hacer commits descriptivos
git commit -m "feat: agregar sección de testimonios"

# Push y crear Pull Request
git push origin feature/nueva-funcionalidad
```

## 🚀 Deployment

### Opciones Recomendadas

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Netlify**
   - Conectar repositorio de GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Subir carpeta dist a rama gh-pages
   ```

## 📈 SEO y Performance

- **Meta tags** optimizados para cada página
- **Lazy loading** de imágenes
- **Code splitting** automático con Vite
- **Compresión** de assets en build
- **Sitemap** y robots.txt incluidos

## 🧪 Testing (Próximamente)

- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Cypress
- **Visual Regression**: Chromatic

## 📝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 📞 Contacto

**CFE Aeon** - Innovación Médica y Tecnológica

- 📧 Email: info@cfeaeon.com
- 📱 Teléfono: +52 961 123 4567
- 🌐 Website: [www.cfeaeon.com](https://www.cfeaeon.com)
- 📍 Ubicación: Tuxtla Gutiérrez, Chiapas, México

---

**Desarrollado con ❤️ por el equipo de CFE Aeon**