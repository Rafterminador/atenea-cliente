import React, { useState } from "react";
import ImageLogin from "../assets/images/login-mobile.svg";
import ImageLoginDesktop from "../assets/images/login-desktop.svg";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

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
    <div className="contenedor md:px-16">
      <div className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between px-5 items-center md:grid md:grid-cols-12 md:gap-[30px] md:p-0 md:py-10">
        <div className="bg-[#FCFBFF] bordeblur w-full flex justify-center md:col-span-6 md:rounded-[20px]">
          <img src={ImageLogin} alt="Login" className="md:hidden" />
          <img
            src={ImageLoginDesktop}
            alt="Login"
            className="hidden md:block"
          />
        </div>
        <div className="md:flex md:flex-col md:col-span-6 md:col-start-8 md:col-end-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-10">¡Hola de nuevo!</h1>
            <p className="text-center mt-4">
              ¿Como ha estado?, es un gusto volver a tenerlo por aca en Atenea
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
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleChangePassword}
                  className="font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
                  placeholder="Ingresar contraseña"
                />
                <Link
                  to="/olvide-password"
                  className="self-end text-xs text-[#776694]"
                >
                  Recuperar contraseña
                </Link>
                <button
                  type="submit"
                  className="bg-[#7064FF] text-white py-[15px] px-2.5"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>

          <div className="mt-3">
            <button className="text-[12.8px]">
              ¿No tiene una cuenta?{" "}
              <span className="text-[#7064FF]">Registrarse ahora</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
