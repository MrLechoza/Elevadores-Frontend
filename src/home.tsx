import fotoHome from "./assets/top.png";
import { motion } from "framer-motion";
import {
  Construction,
  GitPullRequest,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { CalendarDays, ArrowUp, Headset } from "lucide-react";

function Home() {
  return (
    <div className="relative">
      {/* Imagen hero con overlay */}
      <div className="relative h-screen w-full">
        <img
          src={fotoHome}
          alt="Maquinaria industrial P&V"
          className="w-full h-full object-cover absolute inset-0"
        />

        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04203B]/90 to-[#04203B]/50" />

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex flex-col justify-center items-start px-8 lg:px-24 text-white"
        >
          {/* Badge de experiencia */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="bg-[#F6711E] text-[#04203B] px-6 py-2 rounded-full mb-6 flex items-center gap-2"
          >
            <Construction className="w-5 h-5" />
            <span className="font-bold">+30 años de experiencia</span>
          </motion.div>

          {/* Titulo principal */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6"
          >
            Tu socio en{" "}
            <span className="text-[#F6711E]">elevación industrial</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl"
          >
            Soluciones integrales en maquinaria pesada para proyectos de altura
            en toda Venezuela
          </motion.p>

          {/* Puntos destacados */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex items-center gap-4">
              <GitPullRequest className="w-8 h-8 text-[#F6711E]" />
              <div>
                <h3 className="font-bold text-lg">Alquiler Especializado</h3>
                <p className="text-sm">Plataformas elevadoras y manlifts</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Wrench className="w-8 h-8 text-[#F6711E]" />
              <div>
                <h3 className="font-bold text-lg">Equipos Modernos</h3>
                <p className="text-sm">Tecnología Genie y plataformas aéreas</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#F6711E]" />
              <div>
                <h3 className="font-bold text-lg">Seguridad Garantizada</h3>
                <p className="text-sm">Certificaciones internacionales</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4"
          >
            <button className="bg-[#F6711E] text-[#04203B] px-6 py-2 rounded-full font-bold hover:bg-[#f6711ebd] transition-all shadow-xl hover:-translate-y-1 duration-300  ease-in-out active:scale-95 cursor-pointer">
              Ver Maquinaria
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 duration-300 ease-in-out cursor-pointer active:scale-95">
              Contáctanos
            </button>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#04203B] mb-12 text-center"
          >
            Sobre Nosotros
          </motion.h2>

          {/* Grid de información */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "30+ Años de Experiencia",
                icon: <CalendarDays className="w-8 h-8 text-[#F6711E]" />,
                content:
                  "Pioneros en soluciones de elevación industrial en Venezuela",
              },
              {
                title: "Tecnología Certificada",
                icon: <ShieldCheck className="w-8 h-8 text-[#F6711E]" />,
                content: "Equipos con estándares internacionales de seguridad",
              },
              {
                title: "Expertos en Altura",
                icon: <ArrowUp className="w-8 h-8 text-[#F6711E]" />,
                content: "Especialistas en trabajos de elevación complejos",
              },
              {
                title: "Soporte 24/7",
                icon: <Headset className="w-8 h-8 text-[#F6711E]" />,
                content: "Asistencia técnica permanente para tus proyectos",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#04203B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sección adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#04203B]">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desde 1994, en P&V Inversiones nos hemos dedicado a proveer
                soluciones seguras y confiables para trabajos en altura. Lo que
                comenzó como un pequeño taller especializado, hoy es referencia
                nacional en equipos de elevación industrial.
              </p>
              <div className="flex items-center gap-4">
                
                <div className="flex-1 border-t border-[#F6711E]"></div>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border-4 border-[#F6711E]">
              <img
                src="/equipo-trabajo.jpg"
                alt="Nuestro equipo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04203B]/80 flex items-end p-6">
                <span className="text-white font-semibold">
                  Equipo técnico especializado
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
