import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import foto from "./assets/contact.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

const Contacto: React.FC = () => {
  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-b from-gray-300 via-white to-white relative">
      <div
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${foto})` }}
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
              <span className="text-[#F6711E]">Contáctanos</span>,<br/>
              garantizamos tu seguridad
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl max-w-3xl"
            >
              Más de 30 años elevando el éxito de empresas venezolanas
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="-mt-12">
        <div className="relative z-10 flex shadow-lg rounded-4xl center w-[70%] mx-auto gap-10 bg-white">
          <div className="w-[45%] text-center rounded-l-4xl justify-center flex flex-col font-inter text-[#04203bdf] gap-5 p-10 bg-gray-50 ">
            <h1 className="text-2xl font-inter text-[#04203B] font-bold">
              Ponte en Contacto
            </h1>

            <div className="flex items-center justify-center w-full gap-4">
              <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center">
                <LocationOnIcon className="text-white w-5 h-5" />
              </div>
              <div className="w-[250px]">
                <h1 className="text-left text-[15px] font-inter font-semibold">
                  Ubicación
                </h1>
                <p className="text-[12px] text-left">
                  Av. Interurbana. San Diego, Valencia, Carabobo. CC Boulevard Castillito. Galpón Nro 1. Detrás del Hotel Castillito.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center w-full gap-4">
              <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center">
                <EmailIcon className="text-white w-5 h-5" fontSize="medium" />
              </div>
              <div className="w-[250px]">
                <h1 className="text-left text-[15px] font-inter font-semibold">
                  Correo
                </h1>
                <a href="mailto:pvinversiones@gmail.com" target="_blank">
                  <p className="text-[12px] text-left">
                    pvinversiones@gmail.com
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center w-full gap-4">
              <div className="w-12 h-12 bg-[#04203B] rounded-full flex items-center justify-center">
                <CallIcon className="text-white w-5 h-5" />
              </div>
              <div className="w-[250px]">
                <h1 className="text-left text-[15px] font-inter font-semibold">
                  Teléfonos
                </h1>
                <a href="https://wa.me/582414141652" target="_blank">
                  <p className="text-[12px] text-left">
                    Atención al Cliente - (+58) 2414141652
                  </p>
                </a>

                <a href="https://wa.me/584143419161" target="_blank">
                  <p className="text-[12px] text-left">
                    Dirección - (+58) 4143419161
                  </p>
                </a>

                <a href="https://wa.me/584144107454" target="_blank">
                  <p className="text-[12px] text-left">
                    Dpto. Operaciones - (+58) 4144107454
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-[#04203bdf]" />
            <h1 className="text-xs font-inter font-semibold">
              Siguenos en nuestras redes sociales
            </h1>

            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiy96jEx7eLAxV2QjABHQqXAB8QFnoECDgQAQ&url=https%3A%2F%2Fwww.instagram.com%2Felevadoresdepersonalpv%2F%3Fhl%3Des&usg=AOvVaw1gFoovkkDirHbcRXy7UXCA&opi=89978449"
              target="_blank"
              className="transform hover:-translate-y-1 duration-300 ease-in-out w-10 h-10 mx-auto"
            >
              <div className="w-10 h-10 bg-[#04203B] rounded-full flex items-center justify-center">
                <InstagramIcon className="text-white w-3 h-3" />
              </div>
            </a>
          </div>

          <div className="w-[55%] p-14">
            <form className="flex flex-col text-center gap-3 items-center justify-center">
              <h1 className="text-2xl font-inter text-[#04203B] font-bold">
                Enviar Mensaje
              </h1>

              <div className="relative w-80">
                <PersonOutlineIcon className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  placeholder="Nombre"
                  className="border w-full border-gray-300 p-2 pl-10 rounded-md"
                />
              </div>

              <div className="relative w-80">
                <LocalPhoneOutlinedIcon className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  placeholder="Teléfono"
                  className="border w-full border-gray-300 p-2 pl-10 rounded-md"
                />
              </div>

              <div className="relative w-80">
                <MailOutlineIcon className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  placeholder="Correo"
                  className="border w-full border-gray-300 p-2 pl-10 rounded-md"
                />
              </div>

              <textarea
                placeholder="Mensaje"
                className="border w-80 h-24 border-gray-300 p-2 rounded-md"
              />
              <button className="w-80 bg-[#04203B] text-white py-2 px-4 rounded hover:bg-[#04203bdf]  hover:-translate-y-1 duration-300 transition ease-in-out active:scale-95">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
