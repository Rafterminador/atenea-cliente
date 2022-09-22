import React from "react";
import CardAlumno from "../components/CardAlumno";
import bleft from "../assets/images/chevron_left.svg";

export default function AlumnoProfile() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex m-5 text-center">
        <img src={bleft} alt="backleft" />
        <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]">
          Atrás
        </p>
        <p className="text-[16px] ml-[16px] font-semibold">
          José Fernando Arredondo Aparicio
        </p>
      </div>

      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      <div className="">
        <CardAlumno
          nombre={"José Fernando Arredondo Aparicio"}
          cumpleanios={"08 / 04 / 2008 - 14 años"}
          direccion={"Aldea Buenos Aires, Chiantla"}
          grado={"Sexto primaria"}
          nombre_encargado={"Priscilla Regina Aparicio Rabanales "}
          telefono={"5486 7889"}
        />
      </div>


      <div className="m-5">
        <button
          className="min-w-full bg-transparent border-[#FF54B0] border-2 text-[#FF54B0] mt-[32px] h-[49px] text-[21.33px]"
        >
          Eliminar alumno
        </button>

        <button
          className="min-w-full bg-[#7064FF] text-white mt-[20px] h-[49px] text-[21.33px]"
        >
          Editar datos
        </button>
      </div>
    </div>
  );
}

export { AlumnoProfile };
