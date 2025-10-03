import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Heart } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    {
      icon: <Code size={32} />,
      title: "Desarrollo",
      description: "Python, Django, Taildwind, etc",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Palette size={32} />,
      title: "Diseño",
      description: "Figma",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Rocket size={32} />,
      title: "Creatividad",
      description: "Soluciones innovadoras y pensamiento lateral",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Heart size={32} />,
      title: "Pasión",
      description: "Amor por el arte digital y la tecnología",
      color: "from-red-400 to-orange-500"
    }
  ];

  return (
    <section id="sobre-mi" ref={ref} className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Desarrollador e innovador digital apasionado por crear vivencias visuales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl text-white mb-6">Mi Historia</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Soy un apasionado desarrollador junior que inicio todo este viaje por curiosidad 
                a la programación, gracias a ello encontre el universo completo y arte visual 
                que las webs pueden ofrecer.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cada proyecto es una oportunidad para explorar nuevas fronteras creativas, 
                combinando técnicas tradicionales de diseño con las últimas tecnologías 
                emergentes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pienso que el arte no es algo establecido, sino un viaje continuo
                de diversas vivencias y aprendizajes. Pues todos tenemos un concepto e ideaologias
                distintas, todos tenemos un gusto en especifico, y por ello creo que el arte es 
                un universo sin fin.
              </p>
            </div>

            {/* Personal stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-4 rounded-xl text-center"
              >
                <div className="text-2xl text-blue-400 mb-2">2</div>
                <div className="text-sm text-gray-400">Carreras</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-4 rounded-xl text-center"
              >
                <div className="text-2xl text-purple-400 mb-2">2+</div>
                <div className="text-sm text-gray-400">Años</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-4 rounded-xl text-center"
              >
                <div className="text-2xl text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Creatividad</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-8 text-center">Habilidades & Herramientas</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, translateX: 10 }}
                className="glass-dark p-6 rounded-xl group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-lg mb-1">{skill.title}</h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
            <blockquote className="text-2xl text-white italic mb-4">
              "La creatividad es la inteligencia divirtiéndose"
            </blockquote>
            <cite className="text-blue-400">- Albert Einstein</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}