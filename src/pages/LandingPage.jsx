import React from "react";
import ImagenPrincipal from "../assets/images/landing.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("login");
  }
  function handleRegister() {
    navigate("registro/usuario");
  }
  return (
    <div className="mx-5 contenedor flex flex-col justify-between">
      <div className="bg-[#FCFBFF] bordeblur flex flex-col items-center">
        <img src={ImagenPrincipal} alt="dashboard" />
      </div>

      <div className="flex flex-col text-center">
        <div>
          <h1>Hola, ¿Qué tal?</h1>
        </div>
        <div>
          <p>
            Bienvenido docente a Atenea, su nueva herramienta de apoyo académico
          </p>
        </div>
      </div>

      <div className="">
        <button
          className="mb-5 text-center min-w-full bg-transparent text-[#7064FF] border-2 border-[#7064FF]"
          onClick={handleLogin}
        >
          Ingresar
        </button>
        <button
          className="mb-5 text-center min-w-full bg-[#7064FF] text-white"
          onClick={handleRegister}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export { LandingPage };
