import fotoHome from "./assets/top.png";
import { motion } from "framer-motion";
import {
  Construction,
  GitPullRequest,
  Wrench,
  ShieldCheck,
  Plus,
  CalendarDays,
  ArrowUp,
  Headset,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="relative h-screen w-full">
        <img
          src={fotoHome}
          alt="Maquinaria industrial P&V"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04203B]/90 to-[#04203B]/50" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex flex-col justify-center items-start px-8 lg:px-24 text-white"
        >
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="bg-[#F6711E] text-[#04203B] px-20 py-2  mb-6 flex items-center gap-2"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <Construction className="w-5 h-5" />
            <div className="flex items-center">
              <Plus className="w-3 h-3 text-[#04203B]" strokeWidth="3" />
              <span className="font-bold items-center">
                30 años de experiencia
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6"
          >
            Tu socio en{" "}
            <span className="text-[#F6711E]">elevación industrial</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl"
          >
            Soluciones integrales en maquinaria pesada para proyectos de altura
            en toda Venezuela
          </motion.p>

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

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4"
          >
            <button
              onClick={() => navigate("/producto")}
              className="bg-[#F6711E] text-[#04203B] px-6 py-2 rounded-full font-bold hover:bg-[#f6711ebd] transition-all shadow-xl hover:-translate-y-1 duration-300  ease-in-out active:scale-95 cursor-pointer"
            >
              Ver Maquinaria
            </button>
            <a
              href="https://wa.me/582414141652"
              target="_blank"
              className="border-2 border-white px-6 py-2 rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 duration-300 ease-in-out cursor-pointer active:scale-95"
            >
              Contáctanos
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#04203B] mb-12 text-center"
          >
            Sobre Nosotros
          </motion.h2>

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
                className="p-6  shadow-lg rounded-xl hover:shadow-xl transition-all group"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#F6711E] to-[#FFAA00] rounded-full"></div>

              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#F6711E] to-[#FFAA00] bg-clip-text text-transparent">
                Nuestra Historia
              </h3>

              <p className="text-[#04203B]/90 leading-relaxed text-lg font-medium">
                Desde 1994, en{" "}
                <span className="text-[#F6711E] font-bold">
                  P&V Inversiones
                </span>{" "}
                nos hemos dedicado a proveer soluciones seguras y confiables
                para trabajos en altura. Lo que comenzó como un pequeño taller
                especializado, hoy es referencia nacional en equipos de
                elevación industrial.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-1 rounded-full bg-gradient-to-r from-[#F6711E] to-[#FFAA00]"
                    ></div>
                  ))}
                </div>
                <div className="flex-1 border-t border-[#F6711E]/30"></div>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 border-4 border-[#F6711E] rounded-2xl z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F6711E]/20 to-[#04203B]/30"></div>

              <motion.img
                src="/equipo-trabajo.jpg"
                alt="Nuestro equipo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04203B] via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F6711E] rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-xl drop-shadow-md">
                    Equipo técnico especializado
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
