import React, { useEffect, useState } from "react";

import InactiveTeachers from "../components/InactiveTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import { getdisableTeachers } from "../services/controllerDirector";

const DocentesInactivos = () => {

  const [disabledTeacher, setdisabledTeacher] = useState([]);
  useEffect(() => {
    const getdisabledTeacher = async () => {
      try {
        let response = await getdisableTeachers();
        console.log(response);
        setdisabledTeacher(response.body);
      } catch (error) {}
    };
    getdisabledTeacher();
  }, []);
  return (
    <>
      <Retroceder text={"Docentes inactivos"} />

      <div className="contenedor-admin">

       
        <SearchBar />

        <div className="flex  space-x-2 mt-4 mb-4">
          <p>Número de docentes</p>

          <p className="text-[#A954FF] font-bold">inactivos:</p>

          <p className="font-extrabold">{disabledTeacher.length}</p>
        </div>

        {disabledTeacher.map((docente) => (
          <InactiveTeachers key={docente.id} name={docente.displayName} grado="Ningun grado"/>
        ))}

    
      </div>
    </>
  );
};

export default DocentesInactivos;
