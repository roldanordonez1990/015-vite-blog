//Ahora con Vite no hace falta importar React para la transformación en JSX
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <header className="cabecera">
        <h3 className="logo">Mi Blog</h3>
      </header>
      <nav className="navegacion">
        <ul>
          <li>
            <NavLink to="/"><strong>Inicio</strong></NavLink>
          </li>
          <li>
            <NavLink to="/articulos"><strong>Artículos</strong></NavLink>
          </li>
          <li>
            <NavLink to="/crear">
              <strong>Crear Artículo</strong>
            </NavLink>
          </li>
          <li>
            <NavLink href="https://www.marca.com">
              <strong>Contacto</strong>
            </NavLink>
          </li>
        </ul>
      </nav>
      </>
  )
}
