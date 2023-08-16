import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  let navegar = useNavigate();

  const buscandoArticulo = (e) =>{
      e.preventDefault();
      let texto = e.target.busqueda.value;
      navegar("/buscar/"+texto, {replace: true});
  }
  return (
    <>
      <aside className="lateral">
        <div>
          <p>
            <strong>Buscador: </strong>
          </p>
          <form onSubmit={buscandoArticulo}>
            <input type="text" name="busqueda" placeholder="Buscador..." />
            <input className="buscar" type="submit" value="Buscar" />
          </form>
        </div>
        {/* 
        <div>
          <h3>Crear Nueva</h3>
          <form>
            <input
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Título..."
            />
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Descripción..."
            ></textarea>
            <input className="guardar" type="submit" value="Guardar" />
          </form>
        </div>
        */}
      </aside>
    </>
  );
};
