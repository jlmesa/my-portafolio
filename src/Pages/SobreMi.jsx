export const SobreMi = () => {
  return (
    <>
      <h2>Sobre Mí</h2>
      <div className="fila">
        <div className="col">
          <p>
            <span>Hola, soy Jose Leonardo Mesa Aguas.</span> Soy un Ingeniero de
            Sistemas con más de 4 años de experiencia en Desarrollo Web, me caracterizo
            por ser innovador, proactivo y apasionado por la resolución de
            problemas y la creación de aplicaciones y sitios web que satisfagan
            las necesidades del cliente. Tengo dominio de diversas tecnologías
            para el desarrollo web tanto del Back-End como del Front-End y
            manejo de bases de datos SQL y NoSQL.
          </p>
        </div>
        <div className="col">
          <h3>Datos Personales</h3>
          <ul>
            <li>
              <strong>Teléfono</strong>
              300 743 2538
            </li>
            <li>
              <strong>Email</strong>
              jolemeag@gmail.com
            </li>
            <li>
              <strong>Dirección</strong>
              Sincelejo - Sucre, Colombia
            </li>
            <li>
              <strong>Cargo</strong>
              <span>Desarrollador FullStack</span>
            </li>
          </ul>
        </div>
      </div>
      <a
        className="btn-download"
        href="assets/CV_JoseMesaAguas.pdf"
        target="_blank"
        download="CV_JoseMesaAguas.pdf"
      >
        Descargar CV <i className="fa-solid fa-download"></i>
        <span className="overlay"></span>
      </a>
    </>
  );
};
