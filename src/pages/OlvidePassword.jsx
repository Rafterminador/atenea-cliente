import React from "react";
import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import ImageLoginDesktop from "../assets/images/recuperarPassword.svg";
import { useNavigate } from 'react-router-dom';
const OlvidePassword = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  const handleValidarCodigo = () => {
    navigate('/verificacion')
  }

  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <div className="contenedor md:px-16">
      <div className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between px-5 items-center md:grid md:grid-cols-12 md:gap-[30px] md:p-0 md:py-10">
        <div className="bg-[#FCFBFF] bordeblur w-full flex justify-center md:col-span-6 md:rounded-[20px]">
          <img src={ImageLoginDesktop} alt="Login" className="md:hidden" />
          <img
            src={ImageLoginDesktop}
            alt="Login"
            className="hidden md:block"
          />
        </div>
        <div className="md:flex md:flex-col md:col-span-6 md:col-start-8 md:col-end-12">
          <div className="text-center">
            <h2 className="mt-10">¿Olvido su contraseña?</h2>
            <p className="text-center mt-4">
              No se preocupe, suele pasar, Por Favor, ingrese su correo
              elctrónico asociado
            </p>
          </div>
          <div className="w-full mt-10 px-1 ">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
                <label htmlFor="username">Correo</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  name="username"
                  onChange={handleChangeUsername}
                  className="font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
                  placeholder="Ingresar correo"
                />

                <button
                  type="submit"
                  className="bg-[#7064FF] text-white py-[15px] px-2.5 mt-14 mb-5"
                  onClick={handleValidarCodigo}
                >
                  Enviar Código
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlvidePassword;
