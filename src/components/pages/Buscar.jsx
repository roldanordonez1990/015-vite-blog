import { Constantes } from "../../constantes/Constantes";
import { PeticionesAyax } from "../../utils/PeticionesAyax";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Listado } from "./Listado";

export const Buscar = () => {

  const [articulo, setArticulo] = useState([{}]);
  const [bandera, setBandera] = useState(false);
  const param = useParams();

  useEffect(() => {
    listarArticulosBuscados();
    console.log(param.texto)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    listarArticulosBuscados();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  const listarArticulosBuscados = async() =>{
    let { datos } = await PeticionesAyax(Constantes.url_api+"buscar/"+param.texto,"GET");
    if(datos.resultados >= 1){
      setArticulo(datos.articulo);
      setBandera(true);
    }else{
      setBandera(false)
      console.log(datos.mensaje)
    }
  }

  return bandera ? <Listado articulo={articulo} setArticulo={setArticulo}/>: <span>No se encuentra el artículo</span>
};
