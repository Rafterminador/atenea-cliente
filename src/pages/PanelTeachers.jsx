import React from "react";
import { Link } from "react-router-dom";
import TabBar from "../components/TabBar";
import { SearchIcon } from "@heroicons/react/outline";
import NewTeachers from "../components/NuevoTeachers";
import ActiveTeachers from "../components/ActiveTeachers";
import InactiveTeachers from "../components/InactiveTeachers";
const Teachers = () => {
  return (
    <>
      <main className="mb-20">
        <div className="flex m-6  rounded-2xl items-center h-[40px] bordeblurd  flex-grow cursor-pointer bg-[#DBD8FF] ">
          <SearchIcon className="h-14 p-4  text-[#776694]" />
          <input
            type="text"
            placeholder="Buscar un Docente"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-r-xl focus:outline-none border"
          />
        </div>

        {/* NUEVOS DOCENTES */}

        <section className="m-6">
          <div className="flex justify-between">
            <div className="flex space-x-5 text-center font-bold ">
              <p className="text-xl text-[#A954FF]">Nuevos docentes</p>
              <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">1</p>
            </div>

            <div>
              <Link to="/nuevos-docentes">
                <p className="text-[#776694] text-xs font-bold cursor-pointer">
                  Ver mas
                </p>
              </Link>
            </div>
          </div>
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
        </section>

        {/* DOCENTES ACTIVOS */}
        <section className="m-6">
          <div className="flex justify-between">
            <div className="flex space-x-5 text-center font-bold ">
              <p className="text-xl text-[#4D3483]">Docentes activos</p>
              <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">8</p>
            </div>
            <div>
              <Link to="/docentes-activos">
                <p className="text-[#776694] text-xs font-bold cursor-pointer">
                  Ver mas
                </p>
              </Link>
            </div>
          </div>
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
        </section>

        {/* DOCENTES INACTIVOS */}
        <section className="m-6">
          <div className="flex justify-between">
            <div className="flex space-x-5 text-center font-bold ">
              <p className="text-xl text-[#4D3483]">Docentes Inactivos</p>
              <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">1</p>
            </div>
            <div>
              <Link to="/docentes-inactivos">
                <p className="text-[#776694] text-xs font-bold cursor-pointer">
                  Ver mas
                </p>
              </Link>
            </div>
          </div>
          <InactiveTeachers
            id={1}
            key={2}
            name="Rubén	Argüero	Sánchez Juanajatoja"
            grado="Ningun grado"
          />
        </section>
      </main>

      <TabBar />
    </>
  );
};

export default Teachers;
