import React from "react";

import NewTeachers from "../components/NuevoTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
const NuevosDocentes = () => {
  return (
    <>
      <Retroceder text={"Nuevos docentes"} />

      <div className="contenedor-admin">
        <SearchBar />

        <div className="flex space-x-2 mt-4 mb-4">
          <p>Número de docentes</p>

          <p className="text-[#A954FF] font-bold">nuevos:</p>

          <p className="font-extrabold">4</p>
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
      </div>
    </>
  );
};

export default NuevosDocentes;
