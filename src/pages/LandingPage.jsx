import React from "react";
import ImagenPrincipal from "../Assets/images/landing.svg";

const LandingPage = () => {
  return (
    <div className="mx-5 contenedor flex flex-col justify-between">

      <div className='bg-[#FCFBFF] bordeblur flex flex-col items-center'>
            <div className=''>
            <img  src={ImagenPrincipal}/>
            </div>

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
        <button className="mb-5 text-center min-w-full bg-transparent text-[#7064FF] border-2 border-[#7064FF]">
          Ingresar
        </button>
        <button className="mb-5 text-center min-w-full bg-[#7064FF] text-white">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export { LandingPage };
