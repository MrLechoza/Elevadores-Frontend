import React, { useState } from "react";
import maquinariaData from "./data/maquinaria.json";
import Producto, { ProductoProps } from "./productos";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "react-modal";
import banner from "./assets/banner2.png";
import Slider from "@mui/material/Slider";
import { Scale } from "lucide-react";
import styled from "@emotion/styled";
import telescopico from "./assets/telescopico dibujo.png";
import tijera from "./assets/tijera cartoon.png";
import articulado from "./assets/articulado dibujo.png";
import { motion } from "framer-motion";
import { ShieldCheck, PhoneIcon } from "lucide-react";

interface ListaProductosProps {
  filtros: string[];
  setFiltros: React.Dispatch<React.SetStateAction<string[]>>;
  seleccionados: ProductoProps[];
  toggleSeleccion: (maquina: ProductoProps) => void;
}

const imagenesPorTipo: { [key: string]: string } = {
  "Elevador de tijera": tijera,
  "Elevador Articulado": articulado,
  "Elevador Telescopico": telescopico,
};

const PrettoSlider = styled(Slider)({
  color: "#04203B",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#04203B",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    opacity: 0,
    background: "#04203bdf",
    padding: "4px 8px",
    borderRadius: "4px",
    transform: "translateY(-100%)",
    whiteSpace: "nowrap",
    transition: "opacity 0.3s ease",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      opacity: 1,
      transform: "translateY(-100%)",
    },
  },
});

const ListaProductos: React.FC<ListaProductosProps> = ({
  filtros,
  setFiltros,
  seleccionados,
  toggleSeleccion,
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [pesoFiltro, setPesoFiltro] = useState<number[]>([0, 20000]);
  const [alturaFiltro, setAlturaFiltro] = useState<number[]>([0, 50]);

  const manejarCambioFiltro = (tipo: string) => {
    setFiltros((prevFiltros) =>
      prevFiltros.includes(tipo)
        ? prevFiltros.filter((filtro) => filtro !== tipo)
        : [...prevFiltros, tipo]
    );
  };

  const manejarCambioPeso = (event: Event, nuevoValor: number | number[]) => {
    setPesoFiltro(nuevoValor as number[]);
  };

  const manejarCambioAltura = (event: Event, nuevoValor: number | number[]) => {
    setAlturaFiltro(nuevoValor as number[]);
  };

  const productosFiltrados = maquinariaData.filter(
    (maquina) =>
      (filtros.length === 0 || filtros.includes(maquina.tipo)) &&
      maquina.pesoTotal >= pesoFiltro[0] &&
      maquina.pesoTotal <= pesoFiltro[1] &&
      maquina.alturaTrabajo >= alturaFiltro[0] &&
      maquina.alturaTrabajo <= alturaFiltro[1]
  );

  return (
    <div className="w-[100%] flex flex-col">
      <div className="relative w-full group h-[600px] overflow-hidden">
        {/* Contenedor de imagen con mejoras de hover */}
        <div className="w-full h-full">
          <img
            src={banner}
            alt="Banner P&V"
            className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
          />
        </div>

        {/* Overlay degradado profesional */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04203B]/90 to-[#04203B]/50" />

        {/* Contenido alineado al nuevo diseño */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-12 lg:pl-24 text-white"
        >
          {/* Badge de experiencia */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="bg-[#F6711E] text-[#04203B] px-6 py-2 rounded-full mb-6 flex items-center gap-2 shadow-lg"
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="font-bold">Seguridad</span>
          </motion.div>

          {/* Titulo principal con animación */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight mb-4 text-light"
          >
            <span className="text-[#F6711E]">Soluciones verticales</span> para
            horizontes mayores
          </motion.h2>

          {/* Subtítulo mejorado */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-xl text-right font-medium"
          >
            Alturas extremas, seguridad garantizada
          </motion.p>

          {/* Botón con nuevo estilo */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              className="bg-[#F6711E] text-[#04203B] px-8 py-3 rounded-full font-bold hover:bg-[#f6711ebd] 
        transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95
        border-2 border-[#F6711E] flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Contactar Ahora</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex shadow-xl mx-auto w-[100%]">
        {/* Filtros */}
        <div className="w-[25%] py-10 px-8 bg-white shadow-md rounded-lg">
          <h1 className="text-lg font-bold text-gray-800 mb-6">Filtros</h1>

          <h2 className="text-md font-semibold text-gray-700 mb-4">Tipo</h2>
          <div className="flex flex-col gap-3">
            <FormControlLabel
              control={
                <Checkbox
                  checked={filtros.includes("Elevador Articulado")}
                  onChange={() => manejarCambioFiltro("Elevador Articulado")}
                  sx={{
                    color: "#04203B",
                    "&.Mui-checked": { color: "#04203B" },
                  }}
                />
              }
              label="Elevador Articulado"
              className="hover:bg-gray-100 rounded-md px-2 py-1 transition-all duration-200"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filtros.includes("Elevador Telescopico")}
                  onChange={() => manejarCambioFiltro("Elevador Telescopico")}
                  sx={{
                    color: "#04203B",
                    "&.Mui-checked": { color: "#04203B" },
                  }}
                />
              }
              label="Elevador Telescopico"
              className="hover:bg-gray-100 rounded-md px-2 py-1 transition-all duration-200"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filtros.includes("Elevador de tijera")}
                  onChange={() => manejarCambioFiltro("Elevador de tijera")}
                  sx={{
                    color: "#04203B",
                    "&.Mui-checked": { color: "#04203B" },
                  }}
                />
              }
              label="Elevador de Tijera"
              className="hover:bg-gray-100 rounded-md px-2 py-1 transition-all duration-200"
            />
          </div>

          {/* Filtro por peso */}
          <h2 className="text-md font-semibold text-gray-700 mt-6 mb-4">
            Peso Total (kg)
          </h2>
          <PrettoSlider
            value={pesoFiltro}
            onChange={manejarCambioPeso}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} kg`}
            min={0}
            max={20000}
            sx={{ color: "#04203B" }}
          />

          {/* Filtro por altura */}
          <h2 className="text-md font-semibold text-gray-700 mt-6 mb-4">
            Altura Máxima (m)
          </h2>
          <PrettoSlider
            value={alturaFiltro}
            onChange={manejarCambioAltura}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} m`}
            min={0}
            max={50}
            sx={{ color: "#04203B" }}
          />

          {/* Botón para activar el modal */}
          <button
            className="flex gap-2 mt-4 bg-[#04203B] text-white py-2 px-4 rounded hover:bg-[#04203bdf]  hover:-translate-y-1 duration-300 transition ease-in-out active:scale-95"
            onClick={() => setMostrarModal(true)}
          >
            <Scale />
            Comparar
          </button>
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 p-10 shadow-xl w-[75%]">
          {productosFiltrados.map((maquina, index) => (
            <Producto
              key={index}
              {...maquina}
              onComparar={() => toggleSeleccion(maquina)}
            />
          ))}
        </div>
      </div>

      {/* Modal para la comparativa */}
      <Modal
        isOpen={mostrarModal}
        onRequestClose={() => setMostrarModal(false)}
        contentLabel="Comparativa de Productos"
        className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-[700px] mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <h2 className="text-2xl font-bold text-center mb-3">
          Comparativa de Productos
        </h2>

        {/* Comparativa en 3 columnas */}
        <div className="flex  justify-center gap-2 items-start">
          {/* Producto 1 */}
          {seleccionados[0] && (
            <div className="text-center w-[250px] p-4 px-0">
              <img
                src={
                  imagenesPorTipo[seleccionados[0].tipo] ||
                  "https://via.placeholder.com/150?text=Sin+Imagen"
                }
                alt={seleccionados[0].tipo}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />

              <h3 className="text-lg font-bold mb-4">
                {seleccionados[0].modelo}
              </h3>
              <div className="flex flex-col gap-4">
                {/* Altura */}
                <div className="relative w-full h-6 overflow-hidden">
                  <div
                    className={`absolute rounded-l-full top-0 right-0 h-full ${
                      seleccionados[0].alturaTrabajo ===
                      Math.max(...seleccionados.map((p) => p.alturaTrabajo))
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                    style={{
                      width: `calc(${
                        (seleccionados[0].alturaTrabajo / 50) * 100
                      }% + 40px)`,
                      minWidth: "40px",
                      maxWidth: "200px",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-end mr-1 text-white text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                      {seleccionados[0].alturaTrabajo} m
                    </span>
                  </div>
                </div>

                {/* Capacidad */}
                <div className="relative w-full h-6  overflow-hidden">
                  <div
                    className={`absolute top-0 rounded-l-full right-0 h-full ${
                      seleccionados[0].capacidadPlataforma ===
                      Math.max(
                        ...seleccionados.map((p) => p.capacidadPlataforma)
                      )
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                    style={{
                      width: `calc(${
                        (seleccionados[0].capacidadPlataforma / 700) * 100
                      }% + 40px)`,
                      minWidth: "40px",
                      maxWidth: "200px",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-end mr-1 text-white text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                      {seleccionados[0].capacidadPlataforma} kg
                    </span>
                  </div>
                </div>

                {/* Peso */}
                <div className="relative w-full h-6  overflow-hidden">
                  <div
                    className={`absolute top-0 rounded-l-full right-0 h-full ${
                      seleccionados[0].pesoTotal ===
                      Math.max(...seleccionados.map((p) => p.pesoTotal))
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                    style={{
                      width: `calc(${
                        (seleccionados[0].pesoTotal / 20000) * 100
                      }% + 40px)`,
                      minWidth: "40px",
                      maxWidth: "200px",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-end mr-1 text-white text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                      {seleccionados[0].pesoTotal} kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categorías en el centro */}
          <div className="flex flex-col items-center mt-[238px] justify-center space-y-5 text-sm font-semibold text-gray-700 mx-2 ">
            <div>Altura Trabajo</div>
            <div>Capacidad</div>
            <div>Peso Total</div>
          </div>

          {/* Producto 2 */}
          {seleccionados[1] && (
            <div className="text-center w-[250px] p-4 px-0 ">
              <img
                src={
                  imagenesPorTipo[seleccionados[1].tipo] ||
                  "https://via.placeholder.com/150?text=Sin+Imagen"
                }
                alt={seleccionados[1].tipo}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-4">
                {seleccionados[1].modelo}
              </h3>
              <div className="flex flex-col gap-4">
                {/* Altura */}
                <div className="relative w-full h-6 overflow-hidden">
                  <div
                    className={`absolute top-0 rounded-r-full left-0 h-full ${
                      seleccionados[1].alturaTrabajo ===
                      Math.max(...seleccionados.map((p) => p.alturaTrabajo))
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                    style={{
                      width: `calc(${
                        (seleccionados[1].alturaTrabajo / 50) * 100
                      }% + 40px)`,
                      minWidth: "40px",
                      maxWidth: "200px",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-start ml-1 text-white text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                      {seleccionados[1].alturaTrabajo} m
                    </span>
                  </div>
                </div>

                {/* Capacidad */}
                <div className="relative w-full h-6  overflow-hidden">
                  <div
                    className={`absolute top-0 rounded-r-full left-0 h-full ${
                      seleccionados[1].capacidadPlataforma ===
                      Math.max(
                        ...seleccionados.map((p) => p.capacidadPlataforma)
                      )
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                    style={{
                      width: `calc(${
                        (seleccionados[1].capacidadPlataforma / 700) * 100
                      }% + 40px)`,
                      minWidth: "40px",
                      maxWidth: "200px",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-start ml-1 text-white text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                      {seleccionados[1].capacidadPlataforma} kg
                    </span>
                  </div>
                </div>

                {/* Peso */}
                <div className="relative w-full h-6 overflow-hidden">
                  <div
                    className={`absolute top-0 rounded-r-full left-0 h-full ${
                      seleccionados[1].pesoTotal ===
                      Math.max(...seleccionados.map((p) => p.pesoTotal))
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                    style={{
                      width: `calc(${
                        (seleccionados[1].pesoTotal / 20000) * 100
                      }% + 40px)`,
                      minWidth: "40px",
                      maxWidth: "200px",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-start ml-1 text-white text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                      {seleccionados[1].pesoTotal} kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          className="flex gap-2 mt-10 bg-[#04203B] text-white py-2 px-4 rounded hover:bg-[#04203bdf]  hover:-translate-y-1 duration-300 transition ease-in-out"
          onClick={() => setMostrarModal(false)}
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default ListaProductos;
