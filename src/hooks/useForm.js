import { useState } from "react";

export const useForm = (objeto = {}) => {
  const [articulo, setArticulo] = useState(objeto);

  //Esto es otra forma obtener los datos del objeto.
  //FormData nos da todo el conjunto de opciones (name, onClick, moveOver, value, onSubmit, id....)
  //que contiene un formulario por dentro.
  //e.target es el objeto
  const formularioSerializado = (objeto) => {
    const formData = new FormData(objeto);
    const objeto_nuevo = {};
    //Recorremos todo el conjunto de elementos que contiene el form, entre ellos name y value.
    for (let [name, value] of formData) {
      //Le asignamos el value al input name, rellenando así el objeto.
      objeto_nuevo[name] = value;
    }

    return objeto_nuevo;
  };

  const enviar = (e) => {
    e.preventDefault();
    /*
        let mi_curso = {
            nombre: nombre_ref.current.value,
            anio: anio_ref.current.value,
            descripcion: descripcion_ref.current.value
        }
        ¨*/
    //Simplemente es otra forma de hacerlo
    let articulo_nuevo = formularioSerializado(e.target);
    setArticulo(articulo_nuevo);
    //Añadimos una clase al elemento cuando se ha enviado el form
    //document.getElementById("resultado").classList.add("enviado");
    //console.log(e.target);
    console.log(articulo_nuevo);
  };

  //Método donde actualizamos el objeto desde el objeto reservado target del formulario.
  const cambiar = ({ target }) => {
    const { name, value } = target;
    setArticulo({
      ...articulo,
      [name]: value,
    });
  };

  return {
    articulo,
    enviar,
    cambiar,
  };
};
