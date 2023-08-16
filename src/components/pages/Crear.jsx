//Ahora con Vite no hace falta importar React para la transformación en JSX
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { PeticionesAyax } from "../../utils/PeticionesAyax";
import { Constantes } from "../../constantes/Constantes";

export const Crear = () => {
  const { articulo, cambiar } = useForm({});
  const [bandera, setBandera] = useState(false);
  const [bandera2, setBandera2] = useState(false);


  const crearArticulos = async (e) => {
      e.preventDefault();
      let {datos} = await PeticionesAyax(Constantes.url_api+"crear","POST", articulo);
      console.log(datos.mensaje)
      if(datos.mensaje == "Artículo guardado correctacmente"){
        setBandera(true);
        setBandera2(false)
      }else if(datos.mensaje == "No se ha guardado el artículo"){
        setBandera2(true);
        setBandera(false)
      }
      //Imagen
      const fileInput = document.querySelector("#file")
      const formData = new FormData();
      formData.append("file", fileInput.files[0]);
      //console.log(formData);
      try {
        let imagen_subida = await PeticionesAyax(Constantes.url_api+"subir-img/"+datos.articulo._id, "POST", formData, true);
        console.log(imagen_subida.datos.file.originalname);
      } catch (e) {
        console.log("No se ha subido ninguna imagen" + e);
      }
      
  };

  return (
    <div className="ppal-box">
      <h3>Añadir artículo: {articulo.titulo}</h3>
      {bandera ? <p>El nuevo artículo creado es: {articulo.titulo}</p>: ""} 
      {bandera2 && <p>No se ha guardado el artículo. Puede que no cumpla los requisitos</p>} 
      <div className="bbb">
        <form className="box-crear" onSubmit={crearArticulos}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Título..."
            onChange={cambiar}
          />
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción..."
            onChange={cambiar}
          />
          <label htmlFor="imagen">Imagen:</label>
          <input type="file" name="file" id="file"/>
          <input className="guardar" type="submit" value="Guardar" />
        </form>
      </div>
    </div>
  );
};
