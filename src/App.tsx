import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  { useState } from 'react';
import Home from './home';
import Header from './header';
import Contacto from './contact';
import ListaProductos from './ListaProductos';
import ComparadorProductos from './comparativa'
import { ProductoProps } from './productos';

function App() {
  const [filtros, setFiltros] = useState<string[]>([]);
  const [seleccionados, setSeleccionados] = useState<ProductoProps[]>([]);

  const toggleSeleccion = (maquina: ProductoProps) => {
    setSeleccionados(prevSeleccionados => {
      // Verificar si el producto ya está seleccionado
      const existe = prevSeleccionados.some(item => item.nombre === maquina.nombre);
      
      if (existe) {
        // Si ya está seleccionado, lo removemos
        return prevSeleccionados.filter(item => item.nombre !== maquina.nombre);
      } else {
        // Si no está seleccionado y hay menos de 2 seleccionados, lo agregamos
        if (prevSeleccionados.length < 2) {
          return [...prevSeleccionados, maquina];
        }
        // Si ya hay 2 seleccionados, no hacemos cambios
        return prevSeleccionados;
      }
    });
  };
  return (
    <Router>
      <Header />
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
      </Routes>
    </Router>
  );
}

export default App;