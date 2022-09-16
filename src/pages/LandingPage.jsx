import React from "react";
import ImagenPrincipal from "../assets/images/landing.svg";
import DesktopImage from "../assets/images/go-to-phone.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChevronDownIcon from "../assets/images/chevron_down.svg";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("login");
  }
  function handleRegister() {
    navigate("registro/usuario");
  }
  function handleAbout() {
    navigate("about");
  }
  return (
    <>
      {" "}
      <Navbar />
      <div className="mx-5 min-h-screen flex flex-col justify-between md:mx-16 md:grid md:grid-cols-2 md:mt-10">
        {/* div de la imagen */}
        <div className="bg-[#FCFBFF] bordeblur md:rounded-[20px] md:mb-20">
          <img
            className="md:hidden mx-auto"
            src={ImagenPrincipal}
            alt="dashboard"
          />
          <img
            className="hidden mx-auto md:flex"
            src={DesktopImage}
            alt="dashboard"
          />
        </div>
        {/* contenido en mobile */}
        <div className="text-center md:hidden">
          <h1 className="mb-5 md:hidden">Hola, ¿Qué tal?</h1>
          <p className="md:hidden">
            Bienvenido docente a Atenea, su nueva herramienta de apoyo académico
          </p>
        </div>

        <div className="md:hidden">
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

        {/* contenido en desktop */}
        <div className="hidden text-center mb-20 ml-8 md:block">
          <div className="my-[270px] mx-[152px]">
            <h1 className="mb-10 text-5xl">Bienvenido a Atenea</h1>
            <p className="mb-10 text-xl">
              <span className="text-bold ">¡Hola!, ¿Cómo estás?</span> <br />{" "}
              Actualmente Atenea está disponible para que puedas acceder
              únicamente mediante tu teléfono, por favor ve y hazlo para que
              puedas utilizar de forma completa nuestra plataforma web académica
            </p>

            <button
              className="arrow-animation btntxtsmdesk text-[#4D3483] hover:text-[#FF54B0] w-40 h-11"
              onClick={handleAbout}
            >
              Acerca de Atenea
              <img
                className="mx-auto mt-2"
                src={ChevronDownIcon}
                alt="ChevronDownIcon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { LandingPage };
