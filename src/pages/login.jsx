import React, { useState } from "react";
import ImageLogin from "../assets/images/login-img.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(username + " " + password);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="flex flex-col px-5 items-center">
      <img src={ImageLogin} alt="Login" className="" />
      <h1 className="text-4xl font-bold mt-10">¡Hola de nuevo!</h1>
      <p className="text-center mt-4">
        ¿Como ha estado?, es un gusto volver a tenerlo por aca en Atenea
      </p>
      <div className="w-full mt-10 px-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
            <label htmlFor="username">Correo</label>
            <input
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={handleChangeUsername}
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
            <button type="button" className="text-xs text-end text-[#776694]">
              Recuperar contraseña
            </button>
            <button type="submit" className="bg-[#7064FF] text-white">
              Ingresar
            </button>
          </div>
        </form>
      </div>
      <button className="text-[12.8px]">
        ¿No tiene una cuenta?{" "}
        <span className="text-[#7064FF]">Registrese ahora</span>
      </button>
    </div>
  );
};

export { Login };
