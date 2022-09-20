import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../src/assets/images/chevron_left.svg";
import { SearchIcon } from "@heroicons/react/outline";
import ActiveTeachers from "../components/ActiveTeachers";

const DocentesActivos = () => {
  return (
    <>
      <div className=" p-4 flex justify-between border-b  border-b-[#DBD8FF]">
        <Link to="/docentes">
          <div className="flex space-x-2">
            <img src={arrowLeft} />
            <p className="text-[#7064FF]">Atrás</p>
          </div>
        </Link>
        <p className="font-bold text-sm">Docentes Activos</p>
      </div>

      <div className="flex m-6  rounded-2xl items-center h-[40px] bordeblurd  flex-grow cursor-pointer bg-[#DBD8FF] ">
        <SearchIcon className="h-14 p-4  text-[#776694]" />
        <input
          type="text"
          placeholder="Buscar un Docente"
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-r-xl focus:outline-none border"
        />
      </div>

      <div className="flex m-6 space-x-2">
        <p>Número de docentes</p>

        <p className="text-[#A954FF] font-bold">activos:</p>

        <p className="font-extrabold">5</p>
      </div>

      <div className="m-6">
        <ActiveTeachers
          id={1}
          key={1}
          name="Rubén	Argüero	Sánchez Juanajatoja"
          grado="Primero Primaria"
        />
        <ActiveTeachers
          id={2}
          key={2}
          name="Anastasia Madeline Orellana Álvarez"
          grado="Segundo Primaria"
        />
        <ActiveTeachers
          id={3}
          key={3}
          name="Sara Josthyn Gutiérrez Lagos"
          grado="Tercero Primaria"
        />
        <ActiveTeachers
          id={4}
          key={4}
          name="Baltazar Anais Bustamante Espinoza"
          grado="Cuarto y Quinto primaria"
        />
      </div>
    </>
  );
};

export default DocentesActivos;
