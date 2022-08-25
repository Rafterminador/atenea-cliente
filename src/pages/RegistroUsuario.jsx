import React, { useState } from "react";
import ImageRegistro from "../assets/images/register.svg";

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
    <div className="mx-5 contenedor flex flex-col justify-between">
      <div className="bg-[#FCFBFF] bordeblur flex flex-col items-center">
        <img src={ImageRegistro} alt="Registros" />
      </div>

      <div className="flex flex-col text-center">
        <h1>Hola docente</h1>
        <p>Es un gusto apoyar a una nueva persona</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
            <label htmlFor="username">Nombre</label>
            <input
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={handleChangeUsername}
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar nombre completo"
            />
            <label htmlFor="useremail">Correo</label>
            <input
              id="useremail"
              type="text"
              value={useremail}
              name="useremail"
              onChange={handleChangeEmail}
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
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
      </div>
      <div>
        <button
          type="submit"
          className="mtext-center min-w-full bg-[#7064FF] text-white"
        >
          Registrarse
        </button>
        <button className="text-[12.8px]">
          ¿Ya tiene una cuenta?{" "}
          <span className="text-[#7064FF]">Ingresar ahora</span>
        </button>
      </div>
    </div>
  );
};

export { RegistroUsuario };
