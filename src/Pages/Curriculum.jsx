export const Curriculum = () => {
  return (
    <>
      <h2>Curriculum</h2>
      <div className="fila">
        <div className="col izquierda">
          <h3>Educación</h3>
          <div className="item izq">
            <h4>Ingeniero de Sistemas</h4>
            <span className="casa">
              Corporación Universitaria del Caribe CECAR
            </span>
            <span className="fecha">2013 - 2019</span>
            <div className="conectori">
              <div className="circuloi"></div>
            </div>
          </div>
        </div>

        <div className="col derecha">
          <h3>Experiencia Laboral</h3>
          <div className="item der">
            <h4>Desarrollador Web</h4>
            <span className="casa">MEZA INGENIEROS</span>
            <span className="fecha">2018 - 2021</span>
            <ul>
              <li>Desarrollo de aplicaciones web(FrontEnd – BackEnd).</li>
              <li>
                Administración de bases de datos para elaboración de informes a
                clientes de IPS y ET.
              </li>
            </ul>
            <div className="conectord">
              <div className="circulod"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
