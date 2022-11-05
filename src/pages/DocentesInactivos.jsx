import React, { useEffect, useState } from "react";

import InactiveTeachers from "../components/InactiveTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { getAllTeachers } from "../services/controllerDirector";

const DocentesInactivos = () => {
  const [disabledTeacher, setdisabledTeacher] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const getdisabledTeacher = async () => {
      try {
        let response = await getAllTeachers();
        console.log(response);
        setdisabledTeacher(response.body.inactiveUsers.data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    getdisabledTeacher();
  }, []);
  return (
    <>
      <Retroceder text={"Docentes inactivos"} />

      <div className="contenedor-admin">
        <SearchBar />

        {!cargando ? (
          <>
            <div className="flex  space-x-2 mt-4 mb-4">
              <p>Número de docentes</p>

              <p className="text-[#A954FF] font-bold">inactivos:</p>

              <p className="font-extrabold">{disabledTeacher.length}</p>
            </div>

            {disabledTeacher.map((docente) => (
              <InactiveTeachers
                key={docente.uid}
                uid={docente.uid}
                name={docente.displayName}
                grado={docente?.grade.grade_name}
              />
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default DocentesInactivos;
