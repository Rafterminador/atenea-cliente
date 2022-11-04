import { async } from "@firebase/util";
import React, { useState } from "react";
import { useEffect } from "react";

import NewTeachers from "../components/NuevoTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { getAllTeachers } from "../services/controllerDirector";
const NuevosDocentes = () => {
  const [newUsers, setNewUsers] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        let response = await getAllTeachers();
        setNewUsers(response.body.newUsers.data);
        setCargando(false)
      
      } catch (error) {
     
      }
    };

    getAllUser();
  }, []);
  return (
    <>
      <Retroceder text={"Nuevos docentes"} />

      <div className="contenedor-admin">
        <SearchBar />

        <div className="flex space-x-2 mt-4 mb-4">
          <p>Número de docentes</p>

          <p className="text-[#A954FF] font-bold">nuevos:</p>

          <p className="font-extrabold">{newUsers.length}</p>
        </div>

        {
        !cargando ? 
        newUsers.map((docente) => (
          <NewTeachers
            id={docente.uid}
            key={docente.uid}
            name={docente.displayName}
            date={docente.date}
          />
        )) :  <Spinner />}
      </div>
    </>
  );
};

export default NuevosDocentes;
