import React from "react";
import ViewGrados from "../components/ViewGrados";
import BottomNavbar from "../components/BottomNavbar";
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
      <BottomNavbar />
    </>
  );
};

export default Asistencia;
