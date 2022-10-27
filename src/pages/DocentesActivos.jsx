import React, { useState } from "react";

import ActiveTeachers from "../components/ActiveTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getEnabledTeachers } from "../services/controllerDirector";

const DocentesActivos = () => {
  const [enableTeacher, setenableTeacher] = useState([]);
  useEffect(() => {
    const getEnableTeacher = async () => {
      try {
        let response = await getEnabledTeachers();
        console.log(response);
        setenableTeacher(response.body);
      } catch (error) {}
    };
    getEnableTeacher();
  }, []);

  return (
    <>
      <Retroceder text={"Docentes activos"} />

      <div className="contenedor-admin">
        <SearchBar />
        <div className="flex space-x-2 mt-4 mb-4">
          <p>Número de docentes</p>

          <p className="text-[#A954FF] font-bold">activos:</p>

          <p className="font-extrabold">{enableTeacher.length}</p>
        </div>

        {enableTeacher.map((docente) => (
          <ActiveTeachers
            key={docente.id}
            name={docente.displayName}
            grado="Primero Primaria"
          />
        ))}
      </div>
    </>
  );
};

export default DocentesActivos;
