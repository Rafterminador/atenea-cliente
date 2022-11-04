import React, { useState } from "react";

import ActiveTeachers from "../components/ActiveTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getAllTeachers } from "../services/controllerDirector";

const DocentesActivos = () => {
  const [enableTeacher, setenableTeacher] = useState([]);
  useEffect(() => {
    const getEnableTeacher = async () => {
      try {
        let response = await getAllTeachers();
        console.log(response);
        setenableTeacher(response.body.activeUsers.data);
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
            key={docente.uid}
            uid={docente.uid}
            name={docente.displayName}
            grado={docente?.grade.grade_name}
          />
        ))}
      </div>
    </>
  );
};

export default DocentesActivos;
