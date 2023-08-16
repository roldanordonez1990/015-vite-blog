//Ahora con Vite no hace falta importar React para la transformación en JSX
import { useState, useEffect } from "react";
import { Constantes } from "../../constantes/Constantes";
import { PeticionesAyax } from "../../utils/PeticionesAyax";
import { Listado } from "./Listado";

export const Articulos = () => {
  const [articulo, setArticulo] = useState([{}]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    listarArticulos();
  }, []);

  const listarArticulos = async () => {
    /*
    let url = Constantes.url_api+"listar";
    let peticion = await fetch(url, { method: "GET" });
    let { articulos } = await peticion.json();
    setArticulo(articulos);
    console.log(articulos);
    */
    let { datos } = await PeticionesAyax(Constantes.url_api+"listar/","GET");

    setArticulo(datos.articulos);
    setCargando(false);
  };

  return (
    <>
      {cargando ? <span>Cargando resultados...</span> :
        articulo.length >= 1 ? <Listado articulo={articulo} setArticulo={setArticulo}/>: <span>No hay artículos</span>
      }
    </>
  );
};
