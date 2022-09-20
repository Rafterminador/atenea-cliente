import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../src/assets/images/chevron_left.svg";
import { SearchIcon } from "@heroicons/react/outline";
import NewTeachers from "../components/NuevoTeachers";
const NuevosDocentes = () => {
  return (
    <>
      <div className=" p-4 flex justify-between border-b  border-b-[#DBD8FF]">
        <Link to="/docentes">
          <div className="flex space-x-2">
            <img src={arrowLeft} />
            <p className="text-[#7064FF]">Atrás</p>
          </div>
        </Link>
        <p className="font-bold text-sm">Nuevos Docentes</p>
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

        <p className="text-[#A954FF] font-bold">nuevos:</p>

        <p className="font-extrabold">4</p>
      </div>

      <div className="m-6">
        <NewTeachers
          id={1}
          key={1}
          name="Naomi Segundo Perez Paredes"
          date="12 de Agosto del 2022"
        />
        <NewTeachers
          id={2}
          key={2}
          name="Naomi Segundo Perez Paredes"
          date="12 de Agosto del 2022"
        />
        <NewTeachers
          id={3}
          key={3}
          name="Naomi Segundo Perez Paredes"
          date="12 de Agosto del 2022"
        />
        <NewTeachers
          id={4}
          key={4}
          name="Naomi Segundo Perez Paredes"
          date="12 de Agosto del 2022"
        />
      </div>
    </>
  );
};

export default NuevosDocentes;
