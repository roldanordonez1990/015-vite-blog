//Ahora con Vite no hace falta importar React para la transformación en JSX
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="ppal-box">
        <h3>Blog con MERN Stack (Mongo DB, Express, React y Node js</h3>
        <Link to="/articulos" className="linkButton">Ver artículos</Link>
    </div>
  )
}
