import React from "react";
import ImagenPrincipal from "../assets/images/landing.svg";
import DesktopImage from "../assets/images/go-to-phone.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChevronDownIcon from "../assets/images/chevron_down.svg";
import FirstImage from "../assets/images/about1.svg";
import SecundImage from "../assets/images/about2.svg";
import Profile from "../assets/images/profile.svg";
import AboutProfile from "../components/AboutProfile";
import "../utils/Redirect";

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
            <h1 className="mb-10 bigtitdesk">Bienvenido a Atenea</h1>
            <p className="mb-10 normtxtdesk">
              <span className="text-bold">¡Hola!, ¿Cómo estás?</span> <br />{" "}
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

        {/* contenido del about */}
        <div className="mb-20 mr-8">
          <div className="mx-[9%] my-[30%]">
            <div className="mb-12 flex flex-row items-center gap-4">
              <h1 className="bigtitdesk m-auto">¿Qué es Atenea?</h1>
              <div className="bg-[#DBD8FF] h-[4px] flex-none order-1 grow rounded-sm"></div>
            </div>
            <p className="normtxtdesk text-justify">
              Atenea es un proyecto social pensado y desarrollado para apoyar y
              facilitar las actividades cotidianas que se realizan dentro de un
              centro educativo.
              <br /> <br />
              Es una plataforma web cuyo fin es lograr la automatización en las
              tareas realizadas por las personas que utilizan Atenea para que
              las mismas puedan tener un mejor control de toda la información
              educativa que manejen.
            </p>
          </div>
        </div>
        <div className="bg-[#FCFBFF] bordeblur  md:rounded-[20px] md:mb-20">
          <img
            className="hidden mx-auto md:flex"
            src={FirstImage}
            alt="firstimage"
          />
        </div>

        
        {/* <div className="items-center">
          <div className="grid grid-cols-3">
            <div className="bg-[#DBD8FF]  h-[4px] w-[720px] mt-[115px] ml-[70px]"></div>
            <h1 className="text-center font-bold text-[51px] my-[80px]">
              El Equipo
            </h1>
            <div className="bg-[#DBD8FF] h-[4px] w-[720px] mt-[116px] ml-[-175px]"></div>
          </div>

          <div className="grid grid-cols-4 items-center gap-[40px]">
          <AboutProfile ruta={Profile} nombre = {"Kelvin Cano"} rol = {"Scrum Master & UI / UX Designer"} />
          <AboutProfile ruta={Profile} nombre = {"Josué Méndez"} rol = {"Product Owner & Backend Developer"} /> 
          <AboutProfile ruta={Profile} nombre = {"Fernando Juárez"} rol = {"Frontend Manager"} /> 
          <AboutProfile ruta={Profile} nombre = {"Daniel Tistoj"} rol = {"Backend Manager"} />  
          <AboutProfile ruta={Profile} nombre = {"Luis Rodríguez"} rol = {"Frontend Developer"} /> 
          <AboutProfile ruta={Profile} nombre = {"Manuel Villagrán"} rol = {"Frontend Developer"} /> 
          <AboutProfile ruta={Profile} nombre = {"Fredy Mateo"} rol = {"Frontend Developer"} /> 
          <AboutProfile ruta={Profile} nombre = {"Jonathan Martínez"} rol = {"Backend Developer"} /> 
          </div>
        </div> */}
      </div>
    </>
  );
};

export { LandingPage };
