import React from "react";
import { ProductoProps } from "./productos";

interface ComparadorProductosProps {
  seleccionados: ProductoProps[];
}

const ComparadorProductos: React.FC<ComparadorProductosProps> = ({
  seleccionados,
}) => {
  if (seleccionados.length < 2) return <p className="text-center">Selecciona al menos 2 productos</p>;

  const getMaxValue = (key: keyof ProductoProps) =>
    Math.max(...seleccionados.map((item) => item[key] as number));

  const maxAltura = getMaxValue("alturaTrabajo");
  const maxCapacidad = getMaxValue("capacidadPlataforma");
  const maxPeso = getMaxValue("pesoTotal");

  return (
    <div className="mt-8 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Comparativa de Productos</h2>

      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Producto A */}
        <div className="space-y-6 text-right">
          {seleccionados.map((producto, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>

              {/* Altura */}
              <div className="flex items-center justify-end gap-2">
                <div className="w-full bg-gray-200 h-4 rounded relative">
                  <div
                    className="bg-blue-500 h-4 rounded absolute right-0"
                    style={{
                      width: `${(producto.alturaTrabajo / maxAltura) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="w-12 text-sm">{producto.alturaTrabajo} m</span>
              </div>

              {/* Capacidad */}
              <div className="flex items-center justify-end gap-2">
                <div className="w-full bg-gray-200 h-4 rounded relative">
                  <div
                    className="bg-green-500 h-4 rounded absolute right-0"
                    style={{
                      width: `${(producto.capacidadPlataforma / maxCapacidad) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="w-12 text-sm">{producto.capacidadPlataforma} kg</span>
              </div>

              {/* Peso */}
              <div className="flex items-center justify-end gap-2">
                <div className="w-full bg-gray-200 h-4 rounded relative">
                  <div
                    className="bg-purple-500 h-4 rounded absolute right-0"
                    style={{
                      width: `${(producto.pesoTotal / maxPeso) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="w-12 text-sm">{producto.pesoTotal} kg</span>
              </div>
            </div>
          ))}
        </div>

        {/* Centro: Nombres de categorías */}
        <div className="space-y-10 text-center text-sm font-semibold text-gray-700">
          <div>Altura Trabajo</div>
          <div>Capacidad</div>
          <div>Peso Total</div>
        </div>

        {/* Producto B */}
        <div className="space-y-6 text-left">
          {seleccionados.map((producto, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>

              {/* Altura */}
              <div className="flex items-center gap-2">
                <span className="w-12 text-sm">{producto.alturaTrabajo} m</span>
                <div className="w-full bg-gray-200 h-4 rounded relative">
                  <div
                    className="bg-blue-500 h-4 rounded absolute left-0"
                    style={{
                      width: `${(producto.alturaTrabajo / maxAltura) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Capacidad */}
              <div className="flex items-center gap-2">
                <span className="w-12 text-sm">{producto.capacidadPlataforma} kg</span>
                <div className="w-full bg-gray-200 h-4 rounded relative">
                  <div
                    className="bg-green-500 h-4 rounded absolute left-0"
                    style={{
                      width: `${(producto.capacidadPlataforma / maxCapacidad) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Peso */}
              <div className="flex items-center gap-2">
                <span className="w-12 text-sm">{producto.pesoTotal} kg</span>
                <div className="w-full bg-gray-200 h-4 rounded relative">
                  <div
                    className="bg-purple-500 h-4 rounded absolute left-0"
                    style={{
                      width: `${(producto.pesoTotal / maxPeso) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparadorProductos;
