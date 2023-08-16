//Ahora con Vite no hace falta importar React para la transformación en JSX
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { PeticionesAyax } from "../../utils/PeticionesAyax";
import { Constantes } from "../../constantes/Constantes";
import { useParams } from "react-router-dom";


export const Editar = () => {
  const { articulo, cambiar } = useForm({});
  const [bandera, setBandera] = useState(false);
  const [bandera2, setBandera2] = useState(false);
  const [articuloEditar, setArticuloEditar] = useState({});
  const param = useParams();

  useEffect(() => {
    listarArticulos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listarArticulos = async () => {
    /*
    let url = Constantes.url_api+"listar";
    let peticion = await fetch(url, { method: "GET" });
    let { articulos } = await peticion.json();
    setArticulo(articulos);
    console.log(articulos);
    */
    let { datos } = await PeticionesAyax(Constantes.url_api+"articulo/"+param.id,"GET");
    setArticuloEditar(datos.articulo);
  };

  const editarArticulo = async (e) => {
      e.preventDefault();
      let {datos} = await PeticionesAyax(Constantes.url_api+"editar/"+param.id,"PUT", articulo);
      console.log(datos.mensaje)
      if(datos.mensaje == "Artículo actualizado correctamente"){
        setBandera(true);
        setBandera2(false)
      }else if(datos.mensaje == "No se ha podido actualizar el artículo"){
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
      <h3>Editar artículo: {articuloEditar.titulo}</h3>
      {bandera ? <p>Artículo actualizado con éxito</p>: ""} 
      {bandera2 && <p>No se ha actualizado el artículo. Puede que no cumpla los requisitos</p>} 
      <div className="bbb">
        <form className="box-crear" onSubmit={editarArticulo}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Título..."
            onChange={cambiar}
            defaultValue={articuloEditar.titulo}
          />
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción..."
            onChange={cambiar}
            defaultValue={articuloEditar.descripcion}
          />
          <label htmlFor="imagen">Imagen:</label>
          <div className="mask">
          {articuloEditar.imagen != "default.png" ? (
            <img src={Constantes.url_api + "imagen/" + articuloEditar.imagen} />
          ) : (
            <img src="https://blog.logrocket.com/wp-content/uploads/2021/05/displaying-images-react-native-image-component.png" />
          )}
          </div>
          <input type="file" name="file" id="file"/>
          <input className="guardar" type="submit" value="Guardar" />
        </form>
      </div>
    </div>
  );
};
