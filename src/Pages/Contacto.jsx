import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El campo nombre es obligatorio';
    }

    if (!correo.trim()) {
      nuevosErrores.correo = 'El campo correo electronico es obligatorio';
    }else if(!emailPattern.test(correo)){
      nuevosErrores.correoValido = 'Por favor ingresa un correo electrónico válido';
    }

    if (!asunto.trim()) {
      nuevosErrores.asunto = 'El campo asunto es obligatorio';
    }

    if (!mensaje.trim()) {
      nuevosErrores.mensaje = 'El campo mensaje es obligatorio';
    }

    setErrors(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validarFormulario()) {
      enviarCorreo();
    }
  }

  const enviarCorreo = () => {
    const templateParams = {
      nombre: nombre,
      correo: correo,
      asunto: asunto,
      mensaje: mensaje
    };

    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_USER_ID;

    emailjs.send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log('Correo enviado con éxito!', response.status, response.text);
        Swal.fire({
          icon: "success",
          title: 'Correo enviado con exito!',
          showConfirmButton: true
        });
        setNombre('');
        setCorreo('');
        setAsunto('');
        setMensaje('');
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: 'Problemas al enviar el correo',
          text: error.text,
          showConfirmButton: true
        });
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <>
      <h2>CONTACTO</h2>
      <div className="fila">
        <div className="col">
          <form onSubmit={handleSubmit}>
          <input id="nombre" type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          {errors.nombre && <p className="campos-obligatorios">El campo nombre es obligatorio <span>*</span></p>}
          <input id="correo" type="text" name="correo" placeholder="Correo electronico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          {errors.correo && <p className="campos-obligatorios">El campo correo es obligatorio <span>*</span></p>}
          {errors.correoValido && <p className="campos-obligatorios">Por favor ingresa un correo electrónico válido</p>}
          <input id="asunto" type="text" name="asunto" placeholder="Asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
          {errors.asunto && <p className="campos-obligatorios">El campo asunto es obligatorio <span>*</span></p>}
          <textarea 
            id="mensaje"
            name="mensaje"
            cols="30"
            rows="5"
            placeholder="Mensaje" 
            value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          {errors.mensaje && <p className="campos-obligatorios">El campo mensaje es obligatorio <span>*</span></p>}
          <button type="submit">
            Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
            <span className="overlay"></span>
          </button>
          </form>
        </div>
      </div>
    </>
  );
};
