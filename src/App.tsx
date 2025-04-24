import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./home";
import Header from "./header";
import Contacto from "./contact";
import Servicios from "./servicios";
import ListaProductos from "./ListaProductos";
import ComparadorProductos from "./comparativa";
import { ProductoProps } from "./productos";
import Footer from "./footer"


function App() {
  const [filtros, setFiltros] = useState<string[]>([]);
  const [seleccionados, setSeleccionados] = useState<ProductoProps[]>([]);

  const toggleSeleccion = (maquina: ProductoProps) => {
    setSeleccionados((prevSeleccionados) => {
    
      const existe = prevSeleccionados.some(
        (item) => item.nombre === maquina.nombre
      );

      if (existe) {
       
        return prevSeleccionados.filter(
          (item) => item.nombre !== maquina.nombre
        );
      } else {
        
        if (prevSeleccionados.length < 2) {
          return [...prevSeleccionados, maquina];
        }
      
        return prevSeleccionados;
      }
    });
  };
  return (
    <Router>
      
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header className="row-start-1" />

        
        <main className="row-start-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/producto"
              element={
                <ListaProductos
                  filtros={filtros}
                  setFiltros={setFiltros}
                  seleccionados={seleccionados}
                  toggleSeleccion={toggleSeleccion}
                />
              }
            />
            <Route
              path="/comparativa"
              element={<ComparadorProductos seleccionados={seleccionados} />}
            />
            <Route 
            path="/servicios"
            element={ <Servicios/> }
            />
          </Routes>
        </main>

        <Footer className="row-start-3"/>
      </div>
    </Router>
  );
}

export default App;