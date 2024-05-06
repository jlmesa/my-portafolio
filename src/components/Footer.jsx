export const Footer = () => {
  return (
    <>
      <a href="#inicio" className="arriba">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div className="info-footer">
        <p>Desarrollado por Jose Leonardo Mesa Aguas <i className="fa-solid fa-code"></i></p>
        <p>Todos los derechos reservados - &copy; {new Date().getFullYear()}</p>
      </div>
    </>
  );
};
