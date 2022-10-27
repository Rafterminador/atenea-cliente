import React from "react";
import { Link } from "react-router-dom";
import NewTeachers from "../components/NuevoTeachers";
import ActiveTeachers from "../components/ActiveTeachers";
import InactiveTeachers from "../components/InactiveTeachers";
import { ReactComponent as Grade } from "../assets/images/grade.svg";
import { ReactComponent as Students } from "../assets/images/students.svg";
import { ReactComponent as TeachersIcon } from "../assets/images/teachers.svg";
import { ReactComponent as MenuImage } from "../assets/images/menu.svg";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getEnabledTeachers, getdisableTeachers } from "../services/controllerDirector";
import { useState } from "react";
const Teachers = () => {

  const [enableTeacher, setenableTeacher] = useState([]);
  const [disabledTeacher, setdisabledTeacher] = useState([]);


  useEffect(() => {

    const handlegetEnabledTeachers = async () => {

      try {
        let response = await getEnabledTeachers();
        console.log(response)
        setenableTeacher(response.body)
      } catch (error) {
        
      }
     
    }


    const handlegetDisableTeachers = async () => {

      try {
        let response = await getdisableTeachers();
        console.log(response)
        setdisabledTeacher(response.body)
      } catch (error) {
        
      }
     
    }

    handlegetEnabledTeachers()
    handlegetDisableTeachers()

  }, [])


  return (
    <>
      <div className="contenedor contenedor-admin">
        <SearchBar />

        {/* NUEVOS DOCENTES */}

        <section className="my-[10px]">
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
        <section className="my-[10px]">
          <div className="flex justify-between">
            <div className="flex space-x-5 text-center font-bold ">
              <p className="text-xl text-[#4D3483]">Docentes activos</p>
              <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">{enableTeacher.length}</p>
            </div>
            <div>
              <Link to="/docentes-activos">
                <p className="text-[#776694] text-xs font-bold cursor-pointer">
                  Ver mas
                </p>
              </Link>
            </div>
          </div>


          {enableTeacher.slice(0,4).map((docente) => (
            <ActiveTeachers key={docente.id}  name={docente.displayName} grado="Primero Primaria"/>
          ))}
        
        </section>

        {/* DOCENTES INACTIVOS */}
        <section className="my-[10px]">
          <div className="flex justify-between">
            <div className="flex space-x-5 text-center font-bold ">
              <p className="text-xl text-[#4D3483]">Docentes Inactivos</p>
              <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">{disabledTeacher.length}</p>
            </div>
            <div>
              <Link to="/docentes-inactivos">
                <p className="text-[#776694] text-xs font-bold cursor-pointer">
                  Ver mas
                </p>
              </Link>
            </div>
          </div>

          {disabledTeacher.slice(0,4).map((docente) => (
            <InactiveTeachers key={docente.id} name={docente.displayName} grado="Ningun grado" />
          ))}

        </section>
      </div>

      <div className="fixed z-0 bottom-0 h-[70px] w-full flex justify-around items-center text-centers shadow">
        <div className="w-[90px] h-full">
          <button
            id="grade"
            // onClick={handleBtns}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
              <Grade />
            </div>
            <p className="text-[12.8px] font-semibold">Grados</p>
          </button>
        </div>
        <div className="w-[90px] h-full">
          <button
            id="students"
            // onClick={handleBtns}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
              <Students />
            </div>
            <p className="text-[12.8px] font-semibold">Estudiantes</p>
          </button>
        </div>
        <div className="w-[90px] h-full">
          <button
            id="teachers"
            // onClick={handleBtns}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
              <TeachersIcon />
            </div>
            <p className="text-[12.8px] font-semibold">Docentes</p>
          </button>
        </div>
        <div className="w-[90px] h-full">
          <button
            // onClick={handleClick}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-6 h-6 flex justify-center items-center">
              <MenuImage className="" />
            </div>
            <p className="text-[12.8px] font-semibold">Menu</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Teachers;
