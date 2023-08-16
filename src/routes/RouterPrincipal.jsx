import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Sidebar } from "../components/layout/Sidebar";
import { Crear } from "../components/pages/Crear";
import { Buscar } from "../components/pages/Buscar";
import { Editar } from "../components/pages/Editar";
//CUIDADO con BrowserRouter si vamos a subir a pro...hay que cambiar por HashRouter
/*IMPORTATE, hay que instalar dentro del proyecto el Router-dom: npm install react-router-dom@6*/
/*Esto se va a comportar igual que un componente*/
//Lo que se importa y no se usa da error. Importar cuando se use: Navlink y Navigate
export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Header/>
      <section className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos/>} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/buscar/:texto" element={<Buscar />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
      </section>
      <Sidebar/>
      <Footer/>
    </BrowserRouter>
  );
};
