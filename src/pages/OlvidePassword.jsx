import React from "react";
import { useState } from "react";
import ImageLoginDesktop from "../assets/images/recuperarPassword.svg";
import { useNavigate } from "react-router-dom";
const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleValidarCodigo = () => {
    navigate("/check-email");
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between md:hidden">
      {/* div de la imagen */}
      <div className="bg-[#FCFBFF] bordeblur">
        <img className="mx-auto" src={ImageLoginDesktop} alt="Registros" />
      </div>

      {/* div del contenido */}
      <div className="flex flex-col gap-6">
        {/* div del copy web */}
        <div className="text-center flex flex-col items-center gap-10">
          <h1 className="m-0 med-title">¿Olvido su contraseña?</h1>
          <p className="nrm-text">
            No se preocupe, suele pasar. Por favor, ingrese su correo
            electrónico asociado
          </p>
        </div>
        <form onSubmit={handleSubmit} id="resetpassword-form">
          <div className="flex flex-col gap-2 min-w-full">
            {/* <label className="text-[#4D3483] sml-title" htmlFor="email">
              Correo
            </label> */}
            <input
              id="email"
              type="text"
              value={email}
              name="email"
              onChange={handleChangeEmail}
              className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar correo"
            />
          </div>
        </form>
      </div>

      {/* div de los botones */}
      <div className="flex flex-col mb-5">
        <button
          type="submit"
          form="resetpassword-form"        
          className="bg-[#7064FF] text-white nrm-button"
          onClick={handleValidarCodigo}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default OlvidePassword;
