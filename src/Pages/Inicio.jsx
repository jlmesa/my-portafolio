export const Inicio = () => {
  return (
    <div className="contenido-banner">
      <div className="contenedor-img">
        <img src="assets/img/josemesa.png" alt="Foto de Jose Mesa" />
      </div>
      <h1>JOSE LEONARDO MESA</h1>
      <h2>Desarrollador FullStack</h2>
      <div className="redes">
        <a
          href="https://api.whatsapp.com/send?phone=573007432538"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="mailto:jolemeag@gmail.com" target="_blank">
          <i className="fa-brands fa-at"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jose-leonardo-mesa-aguas-247966148"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/jlmesa" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};
