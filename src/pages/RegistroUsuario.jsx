import React, { useState } from "react";
import ImageRegistro from "../assets/images/register.svg";
import ImageRegistrod from "../assets/images/register-desktop.svg";
import { Link } from "react-router-dom";

const RegistroUsuario = () => {
  const [username, setUsername] = useState("");
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(username + " " + password);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="mx-5 h-full contenedor flex flex-col justify-between text-center items-center md:grid md:grid-cols-2 md:gap-[30px] md:p-0 md:py-10">
      <div className="bg-[#FCFBFF] bordeblur flex flex-col items-center md:hidden">
        <img src={ImageRegistro} alt="Registros" />
      </div>

      <div className="bg-[#FCFBFF] bordeblurd items-center md:block hidden md:ml-[65px]">
        <img src={ImageRegistrod} alt="Registrosd" />
      </div>

      <div className="md:my-[220px] md:w-[576px] md:mr-[1128px]">
        <div className="flex flex-col text-center md:my-[48px] mt-4">
          <h1 className="md:my-[28px]">Empezemos</h1>
          <p className="mt-2 mb-8">
            Está a unos pasos de descubrir una nueva forma de llevar sus labores
            académicas
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold text-start">
            <label htmlFor="username">Nombre</label>
            <input
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={handleChangeUsername}
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] mb-2"
              placeholder="Ingresar nombre completo"
            />
            <label htmlFor="useremail">Correo</label>
            <input
              id="useremail"
              type="text"
              value={useremail}
              name="useremail"
              onChange={handleChangeEmail}
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] mb-2"
              placeholder="Ingresar correo"
            />
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              name="password"
              onChange={handleChangePassword}
              className="font-normal border-solid border-2 rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar contraseña"
            />
          </div>
        </form>

        <button
          type="submit"
          className="mtext-center min-w-full bg-[#7064FF] text-white mt-[32px]"
        >
          Registrarse
        </button>
        <button className="text-[12.8px]">
          ¿Ya tiene una cuenta?{" "}
          <Link to="/login">
            <span className="text-[#7064FF]">Ingresar ahora</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export { RegistroUsuario };
