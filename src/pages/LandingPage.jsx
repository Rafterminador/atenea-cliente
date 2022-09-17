import React from "react";
import ImagenPrincipal from "../assets/images/landing.svg";
import DesktopImage from "../assets/images/go-to-phone.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChevronDownIcon from "../assets/images/icon-chevrondown.svg";
import WhatIsImg from "../assets/images/img-about-whatis.svg";
import ForWhomImg from "../assets/images/img-about-forwhom.svg";

import ProfileImg from "../assets/images/img-about-profile.svg";
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
        <div className="text-center flex flex-col items-center gap-5 md:hidden ">
          <h1 className="m-0 md:hidden">Hola, ¿Qué tal?</h1>
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
          <a
            href="#aboutInit"
            className="btntxtsmmobl text-[#4D3483] flex flex-col items-center mb-5"
          >
            Acerca de Atenea{" "}
            <img
              className="mx-auto mt-1"
              src={ChevronDownIcon}
              alt="ChevronDownIcon"
            />
          </a>
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

            <a
              href="#aboutInit"
              className="arrow-animation btntxtsmdesk text-[#4D3483] hover:text-[#FF54B0] w-40 h-11"
            >
              Acerca de Atenea{" "}
              <img
                className="mx-auto mt-2"
                src={ChevronDownIcon}
                alt="ChevronDownIcon"
              />
            </a>
          </div>
        </div>
      </div>
      {/* contenido del about */}
      {/* what is space */}
      <div className="mx-5 flex flex-col justify-between md:mx-16 md:grid md:grid-cols-2 mb-8 md:mb-20">
        <div className="md:mb-20 md:mr-8" id="aboutInit">
          <div className="mb-6 md:mx-[9%] md:my-[30%]">
            <div className="mb-6 md:mb-12 flex flex-row items-center gap-4">
              <h1 className="m-auto text-[1.777rem] md:text-[3.157rem]">
                ¿Qué es Atenea?
              </h1>
              <div className="bg-[#DBD8FF] h-[4px] flex-none order-1 grow rounded-sm"></div>
            </div>
            <p className="hidden text-[1.333rem] text-justify md:block">
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
        <div className="bg-[#FCFBFF] bordeblurd mb-6 md:mb-0">
          <img
            className="mx-auto -scale-x-100 md:flex md:scale-x-100"
            src={WhatIsImg}
            alt="WhatIsImg"
          />
        </div>
        <p className="text-center md:hidden">
          Atenea es un proyecto social pensado y desarrollado para apoyar y
          facilitar las actividades cotidianas que se realizan dentro de un
          centro educativo.
          <br /> <br />
          Es una plataforma web cuyo fin es lograr la automatización en las
          tareas realizadas por las personas que utilizan Atenea para que las
          mismas puedan tener un mejor control de toda la información educativa
          que manejen.
        </p>
      </div>
      {/* for whom space */}
      <div className="mx-5 flex flex-col justify-between md:mx-16 md:grid md:grid-cols-2 mb-8 md:mb-20">
        <div className="md:order-2 md:h-[880px]">
          <div className="mb-6 md:mx-[9%] md:my-[30%]">
            <div className="mb-6 md:mb-12 flex flex-row items-center gap-4">
              <h1 className="m-auto text-[1.777rem] md:text-[3.157rem] order-2">
                ¿Para quiénes?
              </h1>
              <div className="bg-[#DBD8FF] h-[4px] flex-none order-1 grow rounded-sm"></div>
            </div>
            <p className="hidden text-[1.333rem] text-justify md:block">
              Atenea nació gracias a la colaboración entre Equipo Xapps y las
              personas de la Escuela Oficial Rural Mixta cantón el Llano, aldea
              Ocubilá, en Huehuetenango.
              <br /> <br />
              Por ello, Atenea fue concebida para apoyarles y solucionar
              problemas puntuales que presentaban al momento de llevar a cabo
              tareas educativas comunes como la toma y registro de notas y
              asistencias, la consulta de los boletines y el control en general
              de la información de los estudiantes y docentes que conforman la
              escuela.
            </p>
          </div>
        </div>
        <div className="bg-[#FCFBFF] bordeblurd mb-6 md:mb-0 md:h-[880px] md:order-1">
          <img className="mx-auto md:flex" src={ForWhomImg} alt="ForWhomImg" />
        </div>
        <p className="text-center md:hidden">
          Atenea nació gracias a la colaboración entre Equipo Xapps y las
          personas de la Escuela Oficial Rural Mixta cantón el Llano, aldea
          Ocubilá, en Huehuetenango.
          <br /> <br />
          Por ello, Atenea fue concebida para apoyarles y solucionar problemas
          puntuales que presentaban al momento de llevar a cabo tareas
          educativas comunes como la toma y registro de notas y asistencias, la
          consulta de los boletines y el control en general de la información de
          los estudiantes y docentes que conforman la escuela.
        </p>
      </div>
      {/* by whom space */}
      <div className="mx-5 flex flex-col justify-between md:mx-16 md:grid md:grid-cols-2 mb-8 md:mb-20">
        <div className="md:h-[880px]">
          <div className="mb-6 md:mx-[9%] md:my-[30%]">
            <div className="mb-6 md:mb-12 flex flex-row items-center gap-4">
              <h1 className="m-auto text-[1.777rem] md:text-[3.157rem]">
                ¿Por quiénes?
              </h1>
              <div className="bg-[#DBD8FF] h-[4px] flex-none order-1 grow rounded-sm"></div>
            </div>
            <p className="hidden text-[1.333rem] text-justify md:block">
              Atenea fue desarrollado por Equipo Xapps, un equipo conformado por
              ocho estudiantes, de 5to año en Ingeniería en Informática y
              Sistemas, de la Universidad Rafel Landívar, Campus San Alberto
              Hurtado S. J., de Quetzaltenango.
              <br /> <br />
              Para todos nosotros fue una experiencia importante y gratificante
              el poder haber tenido la oportunidad de colaborar en el desarrollo
              de este proyecto con las personas de la Escuela a lo largo de 5
              meses, los cuales dieron fruto a esta plataforma web.
            </p>
          </div>
        </div>
        <div className="bg-[#FCFBFF] bordeblurd mb-6 md:mb-0 md:h-[880px]">
          <img className="mx-auto md:flex" src={ForWhomImg} alt="ByWhomImg" />
        </div>
        <p className="text-center md:hidden">
          Atenea fue desarrollado por Equipo Xapps, un equipo conformado por
          ocho estudiantes, de 5to año en Ingeniería en Informática y Sistemas,
          de la Universidad Rafel Landívar, Campus San Alberto Hurtado S. J., de
          Quetzaltenango.
          <br /> <br />
          Para todos nosotros fue una experiencia importante y gratificante el
          poder haber tenido la oportunidad de colaborar en el desarrollo de
          este proyecto con las personas de la Escuela a lo largo de 5 meses,
          los cuales dieron fruto a esta plataforma web.
        </p>
      </div>
      <div className="mx-5 flex flex-col md:mx-16 mb-8 md:mb-20">
        <div className="mb-6 md:mb-12 flex flex-row items-center gap-4">
          <div className="bg-[#DBD8FF] h-[4px] flex-none order-0 grow rounded-sm"></div>
          <h1 className="m-auto text-[1.777rem] order-1 md:text-[3.157rem]">
            El Equipo
          </h1>
          <div className="bg-[#DBD8FF] h-[4px] flex-none order-2 grow rounded-sm"></div>
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-4 items-center">
          {/* <div className="gap-[40px]"> */}
          <AboutProfile
            img={ProfileImg}
            nombre={"Kelvin Cano"}
            rol={"Scrum Master & UI / UX Designer"}
          />
        </div>
      </div>
    </>
  );
};

export { LandingPage };
