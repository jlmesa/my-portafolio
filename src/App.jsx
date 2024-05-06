import { useState, useEffect } from "react";
import proyectos from "./data/proyectos.json";
import { Proyectos } from "./Pages/Proyectos ";
import { Contacto } from "./Pages/Contacto";
import { Footer } from "./components/Footer";
import { Inicio } from "./Pages/Inicio";
import { SobreMi } from "./Pages/SobreMi";
import { Habilidades } from "./Pages/Habilidades";
import { Curriculum } from "./Pages/Curriculum";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === 'true');

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === 'true';
    setDarkMode(isDarkMode);
  }, []);

  return (
    <>
      <div className={`contenedor-header ${!darkMode && "light-mode"}`}>
        <header>
          <div className="logo">
            <a href="#inicio">JM</a>
          </div>
          <button onClick={toggleDarkMode}>
            { darkMode ? <i className="fa-sharp fa-solid fa-sun fa-2xl"></i> : <i className="fa-sharp fa-solid fa-moon fa-2xl"></i> }
          </button>
          <nav id="nav" className={showMenu ? "responsive" : ""}>
            <ul>
              <li>
                <a href="#inicio" onClick={() => setShowMenu(false)}>
                INICIO
                </a>
              </li>
              <li>
                <a href="#sobremi" onClick={() => setShowMenu(false)}>
                  SOBRE MI
                </a>
              </li>
              <li>
                <a href="#habilidades" onClick={() => setShowMenu(false)}>
                  HABILIDADES
                </a>
              </li>
              <li>
                <a href="#curriculum" onClick={() => setShowMenu(false)}>
                  CURRICULUM
                </a>
              </li>
              <li>
                <a href="#proyectos" onClick={() => setShowMenu(false)}>
                  PROYECTOS
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={() => setShowMenu(false)}>
                  CONTACTO
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-responsive" onClick={handleShowMenu}>
            { showMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i> }           
          </div>
        </header>
      </div>

      <section id="inicio" className={`inicio ${!darkMode && "light-mode"}`}>
        <Inicio />
      </section>

      <section id="sobremi" className={`sobremi ${!darkMode && "light-mode"}`}>
        <div className="contenido-seccion">
          <SobreMi />
        </div>
      </section>

      <section id="habilidades" className={`habilidades ${!darkMode && "light-mode"}`}>
        <div className="contenido-seccion">
          <Habilidades />
        </div>
      </section>

      <section id="curriculum" className={`curriculum ${!darkMode && "light-mode"}`}>
        <div className="contenido-seccion">
          <Curriculum />
        </div>
      </section>

      <section id="proyectos" className={`proyectos ${!darkMode && "light-mode"}`}>
        <div className="contenido-seccion">
          <Proyectos proyectos={proyectos} />
        </div>
      </section>

      <section id="contacto" className={`contacto ${!darkMode && "light-mode"}`}>
        <div className="contenido-seccion">
            <Contacto />
        </div>
    </section>

    <section className={`footer ${!darkMode && "light-mode"}`}>
      <Footer />
    </section>
    
    </>
  );
}

export default App;
