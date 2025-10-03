import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Interactivo",
    description: "Un portfolio personal con animaciones avanzadas y efectos visuales inmersivos. Implementado con React, TypeScript y Motion.",
    tech: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    github: "https://github.com/example/portfolio",
    type: "Web Development"
  },
  {
    id: 2,
    title: "Projecto de Estadistica",
    description: "App Desktop para análisis estadístico y visualización de datos con gráficos interactivos y reportes personalizables.",
    tech: ["C#", ".NET", "ASP.NET"],
    github: "https://github.com/SteMt323/EstadisticProject.git",
    type: "Data Visualization"
  },
  {
    id: 3,
    title: "Curso de CS50 - Hardvard",
    description: "Curso completo de aprendizaje de programación producido por Hardvard.",
    tech: ["C", "Sqlite", "Python", "Flask"],
    github: "https://github.com/SteMt323/CS50-FullCourse.git",
    type: "CR-CS50"
  },
  {
    id: 4,
    title: "Wiki Project",
    description: "Uno de los projects presentados por el curso de web de CS50, una wiki colaborativa personalizada visualmente.",
    tech: ["Python", "Django"],
    github: "https://github.com/SteMt323/CS50w-Project0.git",
    type: "PJ-CS50-WB"
  },
  {
    id: 5,
    title: "Calculadora Web de Algebra Lineal",
    description: "Aplicación Web para resolver problemas de algebra lineal, incluyendo operaciones con matrices y vectores.",
    tech: ["Python", "Django"],
    github: "https://github.com/THEGABOALE/Calculadora-Algebra-Lineal.git",
    type: "WBAPP-MATH"
  },
  {
    id: 6,
    title: "WRO 2025",
    description: "Programas para robot representante de la Universidad America UAM, competencias wro 2025",
    tech: ["Lego", "Spike Prime"],
    github: "https://github.com/johaneris/Robotica-2025.git",

    type: "WRO-2025"
  }
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Una selección de mis proyectos, cursos y competencias que poseo dentro de mi github.
            Evidenciando mi continuo desarrollo y aprendizaje en la industria.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-dark p-6 rounded-2xl group"
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="flex items-center space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={18} />
                  <span className="text-sm">Código</span>
                </motion.a>
                
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl text-white mb-4">¿Quieres ver más?</h3>
            <p className="text-gray-400 mb-6">
              Explora todos mis proyectos en GitHub y descubre el código detrás de cada creación.
            </p>
            <motion.a
              href="https://github.com/SteMt323"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 glass px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Github size={20} />
              <span>Ver GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}