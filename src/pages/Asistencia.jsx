import React from "react";
import ViewGrados from "../components/ViewGrados";
import { ReactComponent as Grade } from "../assets/images/grade.svg";
import { ReactComponent as Students } from "../assets/images/students.svg";
import { ReactComponent as Teachers } from "../assets/images/teachers.svg";
import { ReactComponent as MenuImage } from "../assets/images/menu.svg";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Image from "../components/Image";
const Asistencia = () => {
  return (
    <>
      <div className="m-6">
        <p className="text-[21.33px] text-[#4D3483] font-extrabold	 mb-2">
          Tomar asistencia de
        </p>

        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
        <ViewGrados name={"Primero Primaria"} lengtAlumnos={"38"} />
      </div>

      {/* NabBAR initial */}
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
              <Teachers />
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

export default Asistencia;
