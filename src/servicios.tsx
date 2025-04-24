import React from "react";
import { motion } from "framer-motion";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandymanIcon from "@mui/icons-material/Handyman";
import VerifiedIcon from "@mui/icons-material/Verified";
import BuildIcon from "@mui/icons-material/Build";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import fotoServicios from "./assets/contact.png";

const Servicios: React.FC = () => {
  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-b from-gray-300 via-white to-white relative mb-15">
      <div
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${fotoServicios})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#04203B]/90 to-[#04203B]/50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col justify-center items-start px-8 lg:px-24 text-white"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-4"
            >
              <span className="text-[#F6711E]">Nuestros Servicios</span>,<br />
              seguridad y calidad garantizada
            </motion.h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center mb-4">
                  <SafetyCheckIcon className="text-white w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#04203B] mb-2">
                SEGURIDAD
              </h3>
              <p className="text-gray-600">
                Nuestros elevadores de personal cumplen con las más estrictas
                normativas de seguridad, asegurando un entorno de trabajo
                seguro.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center mb-4">
                  <VerifiedIcon className="text-white w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#04203B] mb-2">
                CERTIFICACIONES
              </h3>
              <p className="text-gray-600">
                Todos los elevadores cuentan con certificación en constante
                actualización.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center mb-4">
                  <EngineeringIcon className="text-white w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#04203B] mb-2">
                VERSATILIDAD
              </h3>
              <p className="text-gray-600">
                Disponemos de diferentes modelos de elevadores que se adaptan a
                las necesidades específicas de su proyecto.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center mb-4">
                  <HandymanIcon className="text-white w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#04203B] mb-2">
                ASISTENCIA TÉCNICA
              </h3>
              <p className="text-gray-600">
                Contamos con un equipo técnico certificado disponible para
                cualquier asesoramiento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center mb-4">
                  <BuildIcon className="text-white w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#04203B] mb-2">
                EQUIPOS EN EXCELENTES CONDICIONES
              </h3>
              <p className="text-gray-600">
                Nuestros equipos son sometidos a un riguroso programa de
                mantenimiento preventivo, asegurando su óptimo funcionamiento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center mb-4">
                  <AvTimerIcon className="text-white w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#04203B] mb-2">
                EFICIENCIA
              </h3>
              <p className="text-gray-600">
                Equipos modernos que facilitan y agilizan los trabajos en
                altura, reduciendo tiempos de operación.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-[#04203B] text-white rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#F6711E]">CALIDAD DE EQUIPOS</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Todos nuestros elevadores de personal son de la marca{" "}
            <strong>JLG</strong>, líder mundial en equipos de elevación.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Servicios;
