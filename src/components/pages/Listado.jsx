import { Constantes } from "../../constantes/Constantes";
import { PeticionesAyax } from "../../utils/PeticionesAyax";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Listado = ({ articulo, setArticulo }) => {

  const [bandera, setBandera] = useState(false);

  const eliminar = async (id) => {
    let { datos } = await PeticionesAyax(Constantes.url_api+"articulo/"+ id,"DELETE");
    if (datos.mensaje == "Artículo borrado con éxito") {
      let articulos_actualizados = articulo.filter(articulos => articulos._id !== id);
      setArticulo(articulos_actualizados);
    }else{
      setBandera(true)
    }
  };

  return articulo.map((articulos) => {
    return (
      <article key={articulos._id} className="articulo-item">
        <div className="mask">
          {articulos.imagen != "default.png" ? (
            <img src={Constantes.url_api + "imagen/" + articulos.imagen} />
          ) : (
            <img src="https://blog.logrocket.com/wp-content/uploads/2021/05/displaying-images-react-native-image-component.png" />
          )}
        </div>
        <div className="datos">
          <strong>{articulos.titulo}</strong>
          {bandera && <span> No se ha podido eliminar</span>}
          <p>{articulos.descripcion}</p>
          <Link to={"/editar/"+articulos._id}><input className="edit" type="submit" value="Editar" /></Link>
          <input
            className="delete"
            type="submit"
            onClick={() => {
              eliminar(articulos._id);
            }}
            value="Borrar"
          />
        </div>
        
      </article>
    );
  });
};
