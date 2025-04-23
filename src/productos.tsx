import {
  Weight,
  MoveHorizontal,
  MoveVertical,
  Forklift,
  Fuel,
  ArrowUpFromLine,
  ArrowUp,
} from "lucide-react";


export interface ProductoProps {
  nombre: string;
  modelo: string;
  tipo: string;
  alturaTrabajo: number;
  alturaPlataforma: number;
  capacidadPlataforma: number;
  pesoTotal: number;
  dimensionesEquipo: {
    ancho: number;
    largo: number;
  };
  dimensionesPlataforma: {
    ancho: number;
    largo: number;
  };
  fuenteEnergia: string;
  imagen: string;
  disabled?: boolean;
  isSelected?: boolean;
  onComparar?: () => void;
}

const Producto: React.FC<ProductoProps> = ({
  nombre,
  modelo,
  tipo,
  alturaTrabajo,
  alturaPlataforma,
  capacidadPlataforma,
  pesoTotal,
  dimensionesEquipo,
  dimensionesPlataforma,
  fuenteEnergia,
  imagen,
  onComparar,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row shadow-lg  w-[700px] h-[330px]  bg-gradient-to-b from-white to-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-[40%] h-auto object-cover"
          src={imagen}
          alt={nombre}
        />

        <div className="w-[60%] px-8 my-auto text-sm font-inter text-gray-700">
          <h1 className="text-xl text-gray-800 font-bold  mb-4">{modelo}</h1>
          <div className="space-y-2">
            <div className="relative group flex items-center gap-2">
              <Forklift className="w-4 h-4 text-black cursor-pointer" />
              <div className="absolute bottom-full mb-1 hidden group-hover:block bg-[#04203bdf] text-white font-semibold text-xs px-2 py-1 rounded shadow">
                Tipo de maquinaria
              </div>
              <span className="text-gray-900"> {tipo}</span>
            </div>

            <div className="flex justify-between">
              <div className="relative group flex gap-2">
                <ArrowUp className="w-4 h-4 text-black cursor-pointer" />
                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-[#04203bdf] text-white font-semibold text-xs px-2 py-1 min-w-[110px] rounded shadow">
                  Altura de trabajo
                </div>
                <span className="text-gray-900">{alturaTrabajo} m</span>
              </div>

              <div className="relative group flex gap-2">
                <ArrowUpFromLine className="w-4 h-4 text-black cursor-pointer" />
                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-[#04203bdf] text-white font-semibold text-xs px-2 py-1 min-w-[145px] rounded shadow">
                  Altura de la plataforma
                </div>
                <span className="text-gray-900"> {alturaPlataforma} m</span>
              </div>
            </div>

            <div className="flex justify-between items-center gap-2">
              <div className="relative group flex items-center gap-2">
                <Weight className="w-4 h-4 text-black cursor-pointer" />
                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-[#04203bdf] text-white font-semibold text-xs px-2 py-1 min-w-[150px] rounded shadow">
                  Peso máximo soportado
                </div>
                <span className="text-gray-900">{capacidadPlataforma} kg</span>
              </div>

              <div className="relative group flex items-center gap-2">
                <Weight className="w-4 h-4 text-black cursor-pointer" />
                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-[#04203bdf] text-white font-semibold text-xs px-2 py-1 rounded shadow">
                  Peso total
                </div>
                <span className="text-gray-900">{pesoTotal} kg</span>
              </div>
            </div>

            <div className="items-center gap-2">
              <span className="font-semibold text-gray-800">
                Dimensiones del equipo:
              </span>{" "}
              <span className="text-gray-900 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1">
                  <MoveHorizontal className="w-4 h-4 text-black" />
                  {dimensionesEquipo.ancho} m
                </span>
                <span className="inline-flex items-center gap-1">
                  <MoveVertical className="w-4 h-4 text-black" />
                  {dimensionesEquipo.largo} m
                </span>
              </span>
            </div>

            <div className="items-center gap-2">
              <span className="font-semibold text-gray-800">
                Dimensiones de la plataforma:
              </span>{" "}
              <span className="text-gray-900 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1">
                  <MoveHorizontal className="w-4 h-4 text-black" />
                  {dimensionesPlataforma.ancho} m
                </span>
                <span className="inline-flex items-center gap-1">
                  <MoveVertical className="w-4 h-4 text-black" />
                  {dimensionesPlataforma.largo} m
                </span>
              </span>
            </div>
            <div className="relative group flex items-center gap-2">
              <Fuel className="w-4 h-4 text-black" />
              <div className="absolute bottom-full mb-1 hidden group-hover:block bg-[#04203bdf] text-white font-semibold text-xs px-2 py-1 rounded shadow">
                Tipo de combustible
              </div>
              <span className="text-gray-900"> {fuenteEnergia}</span>
            </div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-xs text-[#04203B]"
                onChange={onComparar} 
              />
              <span className="text-gray-800">Seleccionar para comparar</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
