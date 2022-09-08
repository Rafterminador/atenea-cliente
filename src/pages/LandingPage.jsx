import React from "react";
import ImagenPrincipal from "../assets/images/landing.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("login");
  }
  function handleRegister() {
    navigate("registro/usuario");
  }
  return (
    <>
      <Navbar />
      <div className="md:mx-16 h-full contenedor flex flex-col justify-between text-center items-center md:grid md:grid-cols-2">
        <div className="bg-[#FCFBFF] bordeblur w-full flex justify-center  md:rounded-[20px] md:mt-[40px]">
          <img src={ImagenPrincipal} alt="dashboard" />
        </div>

        <div className="flex flex-col text-center md:mx-32">
          <div>
            <h1>Hola, ¿Qué tal?</h1>
          </div>
          <div className="mb-20">
            <p>
              Bienvenido docente a Atenea, su nueva herramienta de apoyo académico
            </p>
          </div>


          <div className=" md:hidden">
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

          <div className="hidden md:flex flex-col">
            <button
              className="mb-5 text-center min-w-full bg-[#7064FF] text-white"
              onClick={handleRegister}
            >
              Comenzar ahora
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export { LandingPage };
