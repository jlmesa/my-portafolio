export const Proyectos = ({ proyectos }) => {
  return (
    <>
    <h2>PROYECTOS</h2>
    <div className="galeria">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="proyecto">
          <div className="contenido-proyecto">
            <img src={proyecto.imagen} alt={proyecto.nombre} />
            <div className="overlay">
              <h3>{proyecto.nombre}</h3>
              <div className="fila-iconos">
                <a href={proyecto.url[0].repositorio} target="_blank">
                  <abbr title="Ver repositorio"><i className="fa-brands fa-github"></i></abbr>
                </a>
                <a href={proyecto.url[0].linkApp} target="_blank">
                  <abbr title="Ver demo"><i className="fa-solid fa-eye"></i></abbr>
                </a>
              </div>
            </div>
          </div>
          <div className="info-proyecto">
            <p>{proyecto.descripcion} </p>
            <p>Este proyecto fue realizado con: <span>{proyecto.tecnologias.join(", ")}.</span></p>
          </div>
        </div>
      ))}
    </div>
    </> 
  );
};