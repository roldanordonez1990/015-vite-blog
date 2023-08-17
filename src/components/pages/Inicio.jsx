//Ahora con Vite no hace falta importar React para la transformación en JSX
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="ppal-box">
      <h3>Blog con MERN Stack (Mongo DB, Express, React y Node.js)</h3>
      <p>
        Adéntrate en el futuro del blogging con nuestra aplicación MERN.
        Fusionando MongoDB, Express, React y Node.js, hemos creado una
        plataforma que combina un backend sólido, una experiencia de usuario
        envolvente y un rendimiento excepcional. Explora nuevas posibilidades
        para compartir tus ideas a través de un blog interactivo y moderno,
        respaldado por una base de datos eficiente y una interfaz receptiva. El
        poder de la pila MERN está a tu alcance para revolucionar tu experiencia
        de blogging.
      </p>
      <br/>
      <Link to="/articulos" className="linkButton">
        Ver artículos
      </Link>
    </div>
  );
};
